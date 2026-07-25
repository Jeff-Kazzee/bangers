<h1 align="center">🔥 BANGERS</h1>
<p align="center"><b>A research-backed social-media system for turning real ideas into native content.</b></p>
<p align="center">Study the mechanics. Keep your own voice. Publish with proof.</p>

## What is BANGERS?

BANGERS is a Claude plugin and tool-neutral skill suite for creator research, ideas, hooks, scripts, written posts, carousels, edit plans, and platform-native repurposing. Its original playbooks study public work from Fireship, Matt Pocock, Theo, and ThePrimeagen. Its research loop can keep learning from other creators and current platform behavior without copying anyone's voice.

BANGERS starts from a real source artifact, extracts one strong idea, adapts it to the target audience, and packages it for each platform. It includes a living writing-quality gate that catches generic AI-assisted prose while treating detector scores as weak evidence, not truth.

## The skills

| Skill | Use it for |
| --- | --- |
| `banger-research` | Research creators, formats, platforms, and writing patterns |
| `banger-ideas` | Ideas, angles, and a content calendar |
| `banger-hooks` | Hooks, titles, thumbnails, and packaging |
| `banger-script-longform` | YouTube and long-form video scripts |
| `banger-script-shorts` | Shorts, TikTok, and Reels scripts |
| `banger-threads` | X, Twitter, and Bluesky posts and threads |
| `banger-longform-written` | LinkedIn, Substack, newsletters, and Facebook Groups |
| `banger-carousels` | Instagram and LinkedIn carousels |
| `banger-edit` | Cut sheets, captions, markers, reframing, and recording plans |
| `banger-repurpose` | One source adapted into a native multiplatform package |

Platforms covered: YouTube, Shorts, TikTok, Instagram, X, LinkedIn, Substack, Bluesky, and Facebook Groups.

## How the system learns

- `references/creators/` contains public creator playbooks and their shared mechanics.
- `references/platforms/platform-playbook.md` contains platform guidance that should be reverified when it may have changed.
- `references/research/creator-research-protocol.md` defines the evidence and adoption gate for new mechanics.
- `references/research/source-ledger.md` records dated sources, confidence, and review dates. Missing or expired support triggers research before a platform claim is used.
- `references/research/detector-runs.md` stores scrubbed detector receipts when the creator profile enables the panel.
- `references/frameworks/voice-and-audience.md` adapts mechanics to the actual author and audience.
- `references/frameworks/writing-quality.md` provides the human writing test and optional detector panel.
- `references/frameworks/hooks-bank.md` contains reusable packaging patterns.

A successful post is evidence to inspect, not a universal law. New mechanics need repeated examples or an experimental label, a counterexample, a real test, and a bounded playbook change.

## Install

Claude Code marketplace:

```text
/plugin marketplace add Jeff-Kazzee/bangers
/plugin install bangers
```

Or clone the repository and use its root `SKILL.md` as the tool-neutral router:

```text
git clone https://github.com/Jeff-Kazzee/bangers.git
```

In Cowork, install a packaged `bangers.plugin` from the Releases page or build it from this repository.

## Make it yours

Fill in `references/frameworks/voice-and-audience.md` with the actual author, audience, and constraints. Creator-specific hard rules override generic style advice. Keep private identity, business, client, health, and financial context in a local overlay rather than committing it to this public repository.

See `DISTRIBUTION.md` for public source ownership and private-overlay boundaries.

## Writing check

The deterministic checker reads UTF-8 files, flags a small set of common synthetic phrases, and can enforce a creator-specific em-dash ban. File input is required because Windows PowerShell pipes can replace punctuation before Node receives it:

```text
node scripts/check-writing.mjs --no-em-dash draft.md
```

The checker is a prompt for human review. It does not prove authorship or quality.

## Credit

The initial techniques were studied from public work by Fireship, Matt Pocock, Theo, and ThePrimeagen. BANGERS is independent and unaffiliated. It distills reusable methods and does not reproduce their content or voices.

## License

MIT © 2026 Jeff Kazzee.
