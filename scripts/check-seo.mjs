import assert from 'node:assert/strict';

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
    assert.ok(canonical[0][0].includes(`https://www.ordivy.app${path === '/' ? '' : path}`), `${path}: canonical domain and path`);
    assert.ok(html.includes('hrefLang="es-ES"') && html.includes('hrefLang="en"'), `${path}: languages`);
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
for (const path of ['/missing-seo-check', '/en/missing-seo-check']) {
  assert.equal((await fetch(origin + path)).status, 404, `${path}: real 404`);
}
const redirected = await fetch(origin + '/en/support?check=1', {
  headers: { host: 'ordivy-web.vercel.app' }, redirect: 'manual',
});
assert.equal(redirected.status, 308);
assert.equal(redirected.headers.get('location'), 'https://www.ordivy.app/en/support?check=1');
console.log('SEO checks passed: 8 routes, languages, canonical, hreflang, JSON-LD, 404 and host redirect.');
