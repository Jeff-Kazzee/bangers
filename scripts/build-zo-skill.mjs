#!/usr/bin/env node
// Build the Zo Computer distribution of BANGERS.
//
// Zo has no plugin system. It implements Agent Skills: one skill lives at
// Skills/<slug>/ with SKILL.md plus optional references/, scripts/, assets/,
// and it loads progressively. So the twelve plugin procedures become one skill
// whose SKILL.md routes internally and pulls a procedure only when it matches.
//
// Generated, never hand-edited. Edit the source skills and rerun:
//   node scripts/build-zo-skill.mjs

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "dist", "zo", "bangers");

const ORDER = [
  ["banger-research", "Research a creator, platform, format, or writing pattern"],
  ["banger-ideas", "Ideas, angles, or a content calendar"],
  ["banger-hooks", "Hooks, titles, thumbnails, or packaging"],
  ["banger-explainer", "Technical explainer, tutorial, build log, or how-it-works teaching content"],
  ["banger-script-longform", "YouTube or long-form video script"],
  ["banger-script-shorts", "Short vertical script"],
  ["banger-threads", "X, Twitter, or Bluesky post or thread"],
  ["banger-longform-written", "LinkedIn, Substack, newsletter, or Facebook Group post"],
  ["banger-carousels", "Instagram or LinkedIn carousel"],
  ["banger-edit", "Cut sheet, captions, markers, reframe, or recording plan"],
  ["banger-repurpose", "One source adapted to several platforms"],
  ["banger-detector", "AI detector check, authenticity verification, or AI-use disclosure"],
];

// maxRetries covers Windows EPERM/EBUSY when an indexer or shell holds a handle.
const rmrf = (p) =>
  fs.rmSync(p, { recursive: true, force: true, maxRetries: 8, retryDelay: 120 });
const copyDir = (src, dst) => fs.cpSync(src, dst, { recursive: true });

// Rewrite plugin-runtime paths to paths relative to the Zo skill root.
function rewrite(text) {
  return text
    .replaceAll("${CLAUDE_PLUGIN_ROOT}/", "")
    .replaceAll("${CLAUDE_PLUGIN_ROOT}", ".")
    .replace(/`?skills\/(banger-[a-z-]+)\/SKILL\.md`?/g,
             "`references/procedures/$1.md`")
    // Bare prose mentions ("run `banger-research`") carry no location in Zo,
    // where there is no skill namespace to resolve them against. Point them at
    // the file. Skips mentions already rewritten into a path above.
    .replace(/(?<!procedures\/)`(banger-[a-z-]+)`(?!\.md)/g,
             "`references/procedures/$1.md`")
    .replace(/^---\n[\s\S]*?\n---\n/, ""); // strip frontmatter; the router owns it
}

function stripLeadNoise(text) {
  // Drop the tool-neutral path-mapping note; irrelevant once paths are rewritten.
  return text.replace(
    /^#+ *(Tool-neutral path mapping|Compatibility adapter)[\s\S]*?(?=\n#+ )/m, "");
}

rmrf(path.join(ROOT, "dist", "zo"));
fs.mkdirSync(path.join(OUT, "references", "procedures"), { recursive: true });

// references/ ships whole; the procedures reference it constantly.
for (const dir of ["creators", "frameworks", "platforms", "research"]) {
  const src = path.join(ROOT, "references", dir);
  if (fs.existsSync(src)) copyDir(src, path.join(OUT, "references", dir));
}

// scripts/ ships too: the writing checker is callable from Zo's terminal.
fs.mkdirSync(path.join(OUT, "scripts"), { recursive: true });
fs.copyFileSync(path.join(ROOT, "scripts", "check-writing.mjs"),
                path.join(OUT, "scripts", "check-writing.mjs"));

const rows = [];
for (const [name, when] of ORDER) {
  const src = path.join(ROOT, "skills", name, "SKILL.md");
  if (!fs.existsSync(src)) {
    console.warn(`  ! missing source skill: ${name}`);
    continue;
  }
  const body = stripLeadNoise(rewrite(fs.readFileSync(src, "utf8"))).trim();
  fs.writeFileSync(path.join(OUT, "references", "procedures", `${name}.md`),
                   body + "\n");
  rows.push(`| ${when} | \`references/procedures/${name}.md\` |`);
}

// DISPLAY.json is the Zo skills registry presentation layer. Spec: DISPLAY.md
// in github.com/zocomputer/skills. Strictly display; SKILL.md stays the source
// of truth for identity and behavior.
fs.writeFileSync(path.join(OUT, "DISPLAY.json"), JSON.stringify({
  specVersion: "0.2.0",
  icon: "megaphone",
  tags: ["content", "marketing", "research"],
}, null, 2) + "\n");

// Frontmatter below satisfies the registry validator: `name` must match the
// parent directory, and `description` and `metadata.author` are required.
const skill = `---
name: bangers
description: >
  Social-media content system. Use whenever the request is about making content: what to post,
  content ideas, hooks, titles, thumbnails, YouTube or short-form video scripts, X/Bluesky threads,
  LinkedIn or Substack or newsletter posts, Facebook Group posts, Instagram or LinkedIn carousels,
  technical explainers and tutorials, video edit plans and captions, repurposing one source across
  platforms, or checking whether a draft reads as AI-written and how to disclose AI use. Studies
  public creator and platform mechanics and adapts them to the author's own audience and voice.
homepage: https://github.com/Jeff-Kazzee/bangers
license: MIT
metadata:
  author: Jeff Kazzee
  generated: scripts/build-zo-skill.mjs
  source: https://github.com/Jeff-Kazzee/bangers
  suite: bangers
  version: "1.1.0"
---

# BANGERS

A research-backed social-media content system. It studies public creator and
platform behavior, extracts reusable mechanics, and turns real source material
into native assets without copying anyone's voice.

This is the Zo Computer build. Zo has no plugin system, so the twelve
procedures live under \`references/procedures/\` instead of as separate skills.
Load one procedure at a time. Do not read them all.

## Router

Pick one procedure, read it completely, then load only the references it names.

| Request | Procedure |
| --- | --- |
${rows.join("\n")}

## Before drafting anything

1. Start from a real source, observation, result, or a clearly named audience
   question. Never invent proof, experience, metrics, quotes, or current
   platform facts.
2. Read \`references/frameworks/voice-and-audience.md\` to fix who is speaking
   and who they are speaking to, then
   \`references/frameworks/writing-quality.md\` for the failure list.
3. When the piece teaches a mechanism the reader must repeat, also read
   \`references/frameworks/technical-clarity.md\` and apply the frame/payload
   split: the author's voice carries the hook, story, and judgment, while the
   explanation takes one name per concept, one idea per sentence, and active
   voice.

## Suite rules

1. Research updates need dated sources, observed examples, a confidence label,
   and a reusable mechanic. One viral post does not establish a law. Treat any
   platform claim without a current entry in
   \`references/research/source-ledger.md\` as unverified and research it first.
2. Borrow mechanics, not phrasing, identity, signature jokes, or an imitation
   voice.
3. Adapt every output to its native platform. Never paste identical copy
   everywhere.
4. Detector results are weak adversarial evidence. Never damage a true, clear
   passage to move a score, and never claim output passes AI detection. Route
   detector and disclosure work through
   \`references/procedures/banger-detector.md\`.
5. Keep private client, identity, health, financial, and unpublished business
   context out of anything reusable.

## Checking a draft

The deterministic writing checker runs in the Zo terminal. It reads UTF-8 files
and can enforce an author's em-dash ban:

\`\`\`
node scripts/check-writing.mjs --no-em-dash draft.md
\`\`\`

It prompts human review. It does not prove authorship or quality.

## Output

Lead with the strongest ready-to-use asset. Then give only the source
assumptions, platform notes, and the approval needed next. Drafting is free.
Publishing, scheduling, and outreach need the author's explicit per-item
approval.

## Credit

Creator playbooks study public work by Fireship, Matt Pocock, Theo, and
ThePrimeagen. The technical-clarity standard is adapted from ASD-STE100
Simplified Technical English and Orwell's six rules, and reached this project
through @geogristle, @Voxyz_ai, and @mikehostetler on X. Full credit in
\`references/frameworks/technical-clarity.md\`.

MIT licensed. Source and updates: https://github.com/Jeff-Kazzee/bangers
`;

fs.writeFileSync(path.join(OUT, "SKILL.md"), skill);

const bytes = (p) =>
  fs.readdirSync(p, { withFileTypes: true, recursive: true })
    .filter((e) => e.isFile())
    .reduce((n, e) => n + fs.statSync(path.join(e.parentPath ?? e.path, e.name)).size, 0);

console.log(`built dist/zo/bangers`);
console.log(`  SKILL.md          ${fs.statSync(path.join(OUT, "SKILL.md")).size} bytes (router only)`);
console.log(`  procedures        ${rows.length}`);
console.log(`  total             ${(bytes(OUT) / 1024).toFixed(0)} KB`);
