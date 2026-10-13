import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';

const require = createRequire(join(process.env.BROWSER_CHECK_ROOT, 'package.json'));
const { chromium } = require('playwright');
mkdirSync('browser-check', { recursive: true });
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
try {
  for (const [version, origin] of [['baseline', 'http://localhost:3001'], ['updated', 'http://localhost:3000']]) {
    for (const [device, viewport] of [['mobile', { width: 412, height: 823 }], ['desktop', { width: 1440, height: 900 }]]) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      for (const [lang, path] of [['es', '/'], ['en', '/en']]) {
        const response = await page.goto(origin + path);
        assert.equal(response.status(), 200);
        await page.locator('h1').waitFor();
        assert.equal(await page.locator('h1').count(), 1);
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(1800);
        assert.equal(await page.locator('html').getAttribute('lang'), lang);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        assert.ok(overflow <= 1, `${version}-${device}-${lang}: page overflow`);
        await page.screenshot({ path: `browser-check/${version}-${device}-${lang}.png`, animations: 'disabled' });
        const store = page.locator('a.v2-app-store-badge');
        assert.equal(await store.getAttribute('href'), 'https://apps.apple.com/app/ordivy/id6814024224');
        const chapter = page.locator('.brand-chapters button').last();
        await chapter.scrollIntoViewIfNeeded();
        await chapter.click();
        assert.equal(await chapter.getAttribute('aria-selected'), 'true');
        assert.equal(await page.locator('.brand-viewport-categories li').count(), 8);
        const choice = page.locator('.iv-picker button').nth(1);
        await choice.scrollIntoViewIfNeeded();
        await choice.click();
        assert.equal(await choice.getAttribute('aria-pressed'), 'true');
        const faq = page.locator('.v2-faq-list details').first();
        await faq.locator('summary').scrollIntoViewIfNeeded();
        await faq.locator('summary').click();
        assert.equal(await faq.evaluate((node) => node.open), true);
      }
      await page.goto(origin + '/');
      await page.locator('.v2-header .v2-lang-switch').click();
      await page.waitForURL(origin + '/en');
      await page.locator('html[lang="en"]').waitFor();
      assert.equal(await page.locator('html').getAttribute('lang'), 'en');
      await page.locator('.v2-header .v2-lang-switch').click();
      await page.waitForURL(origin + '/');
      await page.locator('html[lang="es"]').waitFor();
      assert.equal(await page.locator('html').getAttribute('lang'), 'es');
      assert.deepEqual(errors, [], `${version}-${device}: browser errors`);
      await context.close();
    }
  }
  console.log('Browser checks passed: both versions, mobile/desktop, language navigation, categories, inventory selection, FAQ and download links.');
} finally {
  await browser.close();
}
