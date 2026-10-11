import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

for (const path of ["index.html", "samples/2026-10-07.html"]) {
  const document = readFileSync(path, "utf8");
  const ids = Array.from(document.matchAll(/\bid="([^"]+)"/g), match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate IDs in ${path}`);
  assert.equal(Array.from(document.matchAll(/<h1\b/g)).length, 1, `One primary heading required in ${path}`);
  assert.match(document, /<html lang="ko">/);
  for (const match of document.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(match[1]), `Missing anchor in ${path}: ${match[1]}`);
  }
  for (const match of document.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const href = match[1].replace(/&amp;/g, "&");
    if (/^(?:https:|mailto:)/.test(href)) continue;
    const [target, fragment] = href.split("#");
    const localPath = join(dirname(path), target.split("?")[0]);
    assert.ok(existsSync(localPath), `Missing asset in ${path}: ${href}`);
    if (fragment && /\.html$/.test(localPath)) {
      assert.ok(readFileSync(localPath, "utf8").includes(`id="${fragment}"`), `Missing linked anchor: ${href}`);
    }
  }
  for (const match of document.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert.match(match[0], /rel="[^"]*noopener/);
  }
  assert.ok(!/(?:file:\/\/|(?:^|["'\s])[A-Z]:[\\/])|<iframe|<embed|<object/i.test(document), `Local path or embedded document in ${path}`);
}

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const workflow = readFileSync(".github/workflows/deploy-pages.yml", "utf8");
assert.equal(Array.from(html.matchAll(/<article class="project-card project-featured/g)).length, 3);
assert.match(html, /class="skip-link"/);
assert.match(html, /aria-label="주요 메뉴"/);
assert.match(css, /@media \(max-width: 720px\)/);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /:focus-visible/);
assert.match(workflow, /npm run check/);
assert.match(workflow, /npm run typecheck/);
assert.match(workflow, /cp index\.html styles\.css \.nojekyll/);
assert.doesNotMatch(workflow, /cp -R \. _site|path: '\.'/);
console.log("Site checks passed: anchors, local assets, navigation, accessibility and deployment scope.");
