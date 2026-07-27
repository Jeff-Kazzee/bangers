---
name: bangers
description: Route social-media research, ideas, packaging, writing, scripts, editing, and platform-native repurposing through the BANGERS skill suite.
metadata:
  version: "1.1.0"
  suite: bangers
---

# BANGERS

BANGERS is a research-backed social-media content system. It studies public creator and platform behavior, extracts reusable mechanics, and turns verified source material into native assets without copying a creator's voice.

## Tool-neutral path mapping

In Claude's plugin runtime, `${CLAUDE_PLUGIN_ROOT}` is supplied automatically. In any other harness, define `BANGERS_ROOT` as the directory containing this file and read every `${CLAUDE_PLUGIN_ROOT}` reference as `BANGERS_ROOT`.

## Router

| Request | Procedure |
| --- | --- |
| Research a creator, platform, format, or writing pattern | `skills/banger-research/SKILL.md` |
| Ideas, angles, or calendar | `skills/banger-ideas/SKILL.md` |
| Hooks, titles, thumbnails, or packaging | `skills/banger-hooks/SKILL.md` |
| YouTube or long-form video script | `skills/banger-script-longform/SKILL.md` |
| Short vertical script | `skills/banger-script-shorts/SKILL.md` |
| X, Twitter, Bluesky post, or thread | `skills/banger-threads/SKILL.md` |
| LinkedIn, Substack, newsletter, or Facebook Group post | `skills/banger-longform-written/SKILL.md` |
| Instagram or LinkedIn carousel | `skills/banger-carousels/SKILL.md` |
| Cut sheet, captions, markers, reframe, or recording plan | `skills/banger-edit/SKILL.md` |
| Technical explainer, tutorial, build log, or how-it-works teaching content | `skills/banger-explainer/SKILL.md` |
| One source adapted to several platforms | `skills/banger-repurpose/SKILL.md` |
| AI detector check, authenticity verification, or AI-use disclosure | `skills/banger-detector/SKILL.md` |

## Suite rules

1. Start with a real source, observation, result, or clearly named audience question. Do not invent proof, experience, metrics, quotes, or current platform facts.
2. Read `references/frameworks/voice-and-audience.md` and `references/frameworks/writing-quality.md` before drafting prose.
3. Research updates need dated sources, observed examples, a confidence label, and a reusable mechanic. One viral post does not establish a law. Treat platform claims without a current, non-expired source-ledger entry as unverified and research them before use.
4. Borrow mechanics, not phrasing, identity, signature jokes, or a creator's imitation voice.
5. Adapt every output to its native platform. Do not paste identical copy everywhere.
6. Detector results are weak adversarial evidence. Revise only when a highlighted passage exposes a real defect. Never damage a true, clear passage to move a score, and never advertise that output passes AI detection. Route detector and disclosure work through `skills/banger-detector/SKILL.md`.
7. When a piece teaches a mechanism the reader must repeat, read `references/frameworks/technical-clarity.md` and apply the frame/payload split.
7. Keep public methods free of private client, identity, health, financial, or unpublished business context.

Lead with the strongest ready-to-use asset. Include only the evidence assumptions, platform notes, and approval needed next.
