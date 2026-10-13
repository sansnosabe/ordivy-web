import assert from 'node:assert/strict';
import { request } from 'node:http';

const origin = process.env.SEO_BASE_URL || 'http://localhost:3000';
for (const route of ['', '/support', '/privacy', '/terms']) {
  for (const lang of ['es', 'en']) {
    const path = lang === 'en' ? `/en${route}` : route || '/';
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes(`<html lang="${lang}">`), `${path}: server document language`);
    const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
    assert.equal(canonical.length, 1, `${path}: one canonical`);
    const canonicalUrl = new URL(canonical[0][0].match(/href="([^"]+)"/)[1]);
    assert.equal(canonicalUrl.origin, 'https://www.ordivy.app', `${path}: canonical origin`);
    assert.equal(canonicalUrl.pathname, path, `${path}: canonical path`);
    assert.equal(canonicalUrl.search + canonicalUrl.hash, '', `${path}: clean canonical`);
    const alternates = [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)].map(([tag]) => ({
      lang: tag.match(/hreflang="([^"]+)"/i)?.[1],
      url: tag.match(/href="([^"]+)"/)?.[1],
    }));
    for (const [language, target] of [['es-ES', route || '/'], ['en', `/en${route}`]]) {
      const links = alternates.filter((link) => link.lang === language);
      assert.equal(links.length, 1, `${path}: one ${language} alternate`);
      assert.equal(new URL(links[0].url).origin, 'https://www.ordivy.app');
      assert.equal(new URL(links[0].url).pathname, target, `${path}: ${language} alternate path`);
    }
    assert.ok(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html), `${path}: indexable`);
    if (!route) {
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
      assert.equal(scripts.length, 1, `${path}: JSON-LD`);
      const data = JSON.parse(scripts[0][1]);
      assert.equal(data['@type'], 'SoftwareApplication');
      assert.equal(data.inLanguage, lang);
      assert.equal(data.operatingSystem, 'iOS');
    }
  }
}
const sitemapResponse = await fetch(origin + '/sitemap.xml');
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, value]) => {
  const url = new URL(value);
  assert.equal(url.origin, 'https://www.ordivy.app');
  return url.pathname;
});
assert.deepEqual(sitemapPaths.sort(), ['/', '/en', '/support', '/en/support', '/privacy', '/en/privacy', '/terms', '/en/terms'].sort());
for (const path of ['/auth/confirm', '/auth/reset-password']) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/);
}
const robotsResponse = await fetch(origin + '/robots.txt');
assert.equal(robotsResponse.status, 200);
assert.match(await robotsResponse.text(), /Sitemap: https:\/\/www\.ordivy\.app\/sitemap\.xml/);
for (const path of ['/missing-seo-check', '/en/missing-seo-check']) {
  assert.equal((await fetch(origin + path)).status, 404, `${path}: real 404`);
}
// Use a native HTTP request so the test explicitly controls the Host header.
const redirected = await new Promise((resolve, reject) => {
  const req = request(origin + '/en/support?check=1', {
    headers: { host: 'ordivy-web.vercel.app' },
  }, (response) => {
    response.resume();
    resolve({ status: response.statusCode, location: response.headers.location });
  });
  req.on('error', reject);
  req.end();
});
assert.equal(redirected.status, 308);
assert.equal(redirected.location, 'https://www.ordivy.app/en/support?check=1');
console.log('SEO checks passed: public routes, exact canonical/hreflang, JSON-LD, sitemap, robots, auth noindex, 404 and host redirect.');
