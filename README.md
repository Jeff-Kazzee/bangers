<h1 align="center">🔥 BANGERS</h1>
<p align="center"><b>Turn one idea into scroll-stopping content across every platform.</b></p>
<p align="center">A research-backed social-media studio for creators. Study the mechanics, keep your own voice, publish with proof.</p>

<p align="center">
<a href="#install">Install</a> · <a href="#the-skills">Skills</a> · <a href="#how-the-system-learns">How it works</a> · <a href="#make-it-yours">Make it yours</a> · <a href="#license">License</a>
</p>

---

## What is BANGERS?

BANGERS is a plugin for [Claude](https://claude.com/claude-code) (Claude Code and Cowork) and a tool-neutral skill suite. You describe what you want, such as "give me 10 video ideas", "write a YouTube script on X", or "turn this video into posts for everything", and the right skill fires.

The insight behind it: four of the sharpest creators on the internet, [Fireship](https://www.youtube.com/@Fireship) (density and deadpan comedy), [Matt Pocock](https://www.mattpocock.com/) (teach one thing, show don't tell), [Theo](https://www.youtube.com/@t3dotgg) (react with a defensible take), and [ThePrimeagen](https://www.youtube.com/@ThePrimeagen) (manufactured energy and the clip funnel), all run the *same underlying machine*. BANGERS extracts that machine, keeps the mechanics, and points them at **your** audience in whatever niche you're in.

You keep their moves. You swap the fuel. You make bangers.

It starts from a real source artifact, extracts one strong idea, adapts it to the target audience, and packages it natively per platform. A living writing-quality gate catches generic AI-assisted prose along the way, and treats detector scores as weak evidence rather than truth.

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
| `banger-explainer` | Tutorials, build logs, and how-it-works teaching content |
| `banger-carousels` | Instagram and LinkedIn carousels |
| `banger-edit` | Cut sheets, captions, markers, reframing, and recording plans |
| `banger-repurpose` | One source adapted into a native multiplatform package |
| `banger-detector` | Authenticity verification and honest AI-use disclosure |

Platforms covered: YouTube, Shorts, TikTok, Instagram, X, LinkedIn, Substack, Bluesky, and Facebook Groups.

## Writing that doesn't read like a machine wrote it

Two pieces of the suite exist because banning words does not work. Blacklist the em dash and the model hands back the same paragraph without one. A system it can check itself against holds where a list does not.

**`references/frameworks/technical-clarity.md`** carries the standard. Its payload discipline is adapted from [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/), plus Orwell's six rules from 1946. STE exists because airlines asked for it: roughly 80% of them are not native English speakers, and as the standard's own documentation puts it, complex technical instructions can be misunderstood, and misunderstandings can lead to accidents. Working group formed 1983, first released 1986, still maintained. One name per thing. One idea per sentence. Active voice with a named actor. Verbs instead of nominalizations. Show the number instead of calling something powerful.

The important part is the **frame and payload split**. Never run a standard like this over a whole piece, or you get something technically flawless that nobody wants to read. Your voice carries the hook, the story, and the judgment. The standard carries the passages where the reader has to understand a mechanism.

**`banger-detector`** handles authenticity and disclosure. It verifies provenance and voice first, treats detector output as one weak diagnostic, and refuses the moves that damage true writing to move a number: no humanizers, no inserted typos, no filler added to raise perplexity. It also helps you write an honest disclosure of how AI was used, which is a stronger position than any score.

On that last point, worth knowing: detectors measure how predictable your sentences are, and clean technical writing is predictable by design. Applying the clarity standard correctly will often *raise* your AI score while improving the writing. Liang et al. (2023, *Patterns*) found detectors falsely flagged 61.3% of essays by non-native English writers. Treat every score accordingly.

**Credit where this came from.** The STE idea reached me through a public conversation on X: [@geogristle](https://x.com/geogristle/status/2078492579511906771) made the original point about requiring LLMs to follow ASD-STE100, [@Voxyz_ai](https://x.com/Voxyz_ai/status/2078857039116156978) made the broader argument that banning words one at a time fails because you never gave the model a writing system, and [@mikehostetler](https://x.com/mikehostetler/status/2079245119455150418) carried the STE answer further. [woosal1337](https://github.com/woosal1337/blog/tree/main/videos/ep01-the-cure-for-ai-slop) ran the cross-model experiment and published a linter and results. [danyuchn/asd-ste100-skill](https://github.com/danyuchn/asd-ste100-skill) shipped an STE Claude Code skill before this one. What BANGERS adds is the frame/payload split, which is what happens when you point a controlled-language standard at writing that also has to carry a voice.

## How the system learns

- `references/creators/` contains public creator playbooks and their shared mechanics.
- `references/platforms/platform-playbook.md` contains platform guidance that should be reverified when it may have changed.
- `references/research/creator-research-protocol.md` defines the evidence and adoption gate for new mechanics.
- `references/research/source-ledger.md` records dated sources, confidence, and review dates. Missing or expired support triggers research before a platform claim is used.
- `references/research/detector-runs.md` stores scrubbed detector receipts when the creator profile enables the panel.
- `references/frameworks/voice-and-audience.md` adapts mechanics to the actual author and audience.
- `references/frameworks/writing-quality.md` provides the human writing test and the optional detector panel.
- `references/frameworks/technical-clarity.md` provides the frame/payload split for teaching content.
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

The techniques here are studied from the public work of [Fireship](https://www.youtube.com/@Fireship), [Matt Pocock](https://www.mattpocock.com/), [Theo](https://www.youtube.com/@t3dotgg), and [ThePrimeagen](https://www.youtube.com/@ThePrimeagen). Go watch them, they're the real deal. BANGERS is independent and unaffiliated. It distills publicly documented *methods* into a reusable toolkit and does not reproduce their content or voices.

`references/creators/` ships a playbook for each of the four, and `_synthesis.md` covers the laws they share.

## License

MIT © 2026 Jeff Kazzee.
