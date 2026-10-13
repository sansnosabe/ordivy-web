import { readFileSync } from 'node:fs';

console.log('| Version | Language | Performance | SEO | LCP | TBT | CLS |');
console.log('|---|---|---|---|---|---|---|');
for (const version of ['baseline', 'updated']) {
  for (const lang of ['es', 'en']) {
    const report = JSON.parse(readFileSync(`lighthouse/${version}-${lang}.json`, 'utf8'));
    if (report.runtimeError) throw new Error(`${version}-${lang}: ${report.runtimeError.message}`);
    const metrics = ['largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift']
      .map((name) => report.audits[name].displayValue);
    console.log(`| ${version} | ${lang} | ${Math.round(report.categories.performance.score * 100)} | ${Math.round(report.categories.seo.score * 100)} | ${metrics.join(' | ')} |`);
  }
}
console.log('\nOne mobile simulation per page on the same runner. These are lab results, not real-user Core Web Vitals.');
