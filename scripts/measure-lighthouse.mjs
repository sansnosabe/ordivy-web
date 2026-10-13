import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

mkdirSync('lighthouse', { recursive: true });
const origins = { baseline: 'http://localhost:3001', updated: 'http://localhost:3000' };
const cli = process.platform === 'win32' ? 'npx.cmd' : 'npx';
function measure(version, lang, suffix) {
  const file = `lighthouse/${version}-${lang}-${suffix}.json`;
  const result = spawnSync(cli, ['--yes', 'lighthouse@13.5.0', origins[version] + (lang === 'en' ? '/en' : ''),
    '--chrome-flags=--headless --no-sandbox', '--only-categories=performance,seo,accessibility',
    '--output=json', `--output-path=${file}`, '--quiet'], { stdio: 'inherit' });
  if (result.status !== 0) throw new Error(`Lighthouse failed: ${version}-${lang}`);
  const report = JSON.parse(readFileSync(file, 'utf8'));
  if (report.runtimeError) throw new Error(report.runtimeError.message);
  return {
    version, lang, run: suffix, benchmark: report.environment.benchmarkIndex,
    performance: Math.round(report.categories.performance.score * 100),
    seo: Math.round(report.categories.seo.score * 100),
    lcp: report.audits['largest-contentful-paint'].numericValue,
    tbt: report.audits['total-blocking-time'].numericValue,
    cls: report.audits['cumulative-layout-shift'].numericValue,
  };
}
// Discard the first browser/server runs to avoid first-run setup bias.
for (const version of ['baseline', 'updated']) {
  for (const lang of ['es', 'en']) measure(version, lang, 'warmup');
}
const results = [];
for (let run = 1; run <= 3; run++) {
  const versions = run % 2 ? ['baseline', 'updated'] : ['updated', 'baseline'];
  for (const lang of ['es', 'en']) {
    for (const version of versions) results.push(measure(version, lang, run));
  }
}
writeFileSync('lighthouse/comparison.json', JSON.stringify(results, null, 2));
function median(values) { return [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)]; }
console.log('| Version | Language | Median performance | SEO | LCP (ms) | TBT (ms) | CLS | CPU benchmark |');
console.log('|---|---|---|---|---|---|---|---|');
for (const lang of ['es', 'en']) {
  const benchmarks = [];
  for (const version of ['baseline', 'updated']) {
    const group = results.filter((r) => r.lang === lang && r.version === version);
    const values = ['performance', 'seo', 'lcp', 'tbt', 'cls', 'benchmark'].map((key) => median(group.map((r) => r[key])));
    benchmarks.push(values[5]);
    console.log(`| ${version} | ${lang} | ${values.join(' | ')} |`);
  }
  if (Math.max(...benchmarks) / Math.min(...benchmarks) > 1.15) {
    console.log(`\nCPU differs by more than 15% for ${lang}; do not treat this comparison as conclusive.`);
  }
}
console.log('\nLab measurements only. Review every sample and CPU benchmark before attributing a difference to code.');
