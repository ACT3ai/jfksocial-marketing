import fs from "node:fs";
import GithubSlugger from "github-slugger";

const files = [
  "site/pages/consumer/license.mdx",
  "site/pages/consumer/privacy.mdx",
  "site/pages/fork/license.mdx",
  "site/pages/fork/privacy.mdx",
  "site/pages/influencers/license.mdx",
  "site/pages/influencers/privacy.mdx",
];

for (const rel of files) {
  const path = new URL(`../../${rel}`, import.meta.url);
  const src = fs.readFileSync(path, "utf8");
  const lines = src.split("\n");

  const slugger = new GithubSlugger();
  const headings = [];
  for (const line of lines) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (!m) continue;
    const text = m[1];
    const slug = slugger.slug(text);
    const num = text.match(/^(\d+)\.\s/);
    headings.push({ text, slug, num: num ? num[1] : null });
  }

  const tocStart = lines.findIndex((l) => /^##\s+Table of Contents\s*$/.test(l));
  if (tocStart === -1) {
    console.warn(`No TOC heading in ${rel}, skipping`);
    continue;
  }
  let tocEnd = lines.length;
  for (let i = tocStart + 1; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i]) || /^---\s*$/.test(lines[i])) {
      tocEnd = i;
      break;
    }
  }

  let replacements = 0;
  for (let i = tocStart + 1; i < tocEnd; i++) {
    const m = lines[i].match(/^(\s*)(\d+)\.\s+(.+?)\s*$/);
    if (!m) continue;
    const [, indent, num, title] = m;
    if (/^\[.+\]\(#.+\)\s*$/.test(title)) continue;
    const target = headings.find((h) => h.num === num);
    if (!target) {
      console.warn(`  ${rel}: no heading found for "${num}. ${title}"`);
      continue;
    }
    lines[i] = `${indent}${num}. [${title}](#${target.slug})`;
    replacements++;
  }

  fs.writeFileSync(path, lines.join("\n"));
  console.log(`${rel}: linked ${replacements} TOC entries`);
}
