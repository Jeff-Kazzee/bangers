<h1 align="center">🔥 BANGERS</h1>
<p align="center"><b>Turn one idea into scroll-stopping content across every platform.</b></p>
<p align="center">A social-media content studio for creators — built on the reverse-engineered playbooks of <b>Fireship</b>, <b>Matt Pocock</b>, <b>Theo</b>, and <b>ThePrimeagen</b>, and adaptable to <i>any</i> niche.</p>

<p align="center">
<a href="#install">Install</a> · <a href="#the-skills">Skills</a> · <a href="#how-it-works">How it works</a> · <a href="#make-it-yours">Make it yours</a> · <a href="#license">License</a>
</p>

---

## What is this?

BANGERS is a plugin for [Claude](https://claude.com/claude-code) (Cowork & Claude Code) that turns you into a content machine. You describe what you want — "give me 10 video ideas," "write a YouTube script on X," "turn this video into posts for everything" — and the right skill fires, using deep playbooks of how the best creators alive actually make things.

The insight behind it: four of the sharpest creators on the internet — Fireship (density + deadpan comedy), Matt Pocock (teach one thing, show don't tell), Theo (react + defensible hot takes), and ThePrimeagen (manufactured energy + the clip funnel) — all run the *same underlying machine*. BANGERS extracts that machine, keeps the mechanics, and lets you point them at **your** audience, whatever niche you're in.

You keep their moves. You swap the fuel. You make bangers.

## The skills

Just talk naturally — the matching skill triggers itself.

| Skill | Use it for |
|-------|-----------|
| `banger-ideas` | "What should I post?" — ideas, angles, and a content calendar |
| `banger-hooks` | Hooks, video titles, and thumbnail concepts (packaging) |
| `banger-script-longform` | Full YouTube / long-form video scripts with a retention structure |
| `banger-script-shorts` | Shorts / TikTok / Reels vertical scripts |
| `banger-threads` | X / Twitter and Bluesky posts and threads |
| `banger-longform-written` | LinkedIn posts, Substack newsletters, Facebook Group posts |
| `banger-carousels` | Instagram + LinkedIn slide carousels and decks |
| `banger-edit` | Cut sheets, SRT captions, marker CSVs, reframe & recording plans for **DaVinci Resolve, Premiere, CapCut, Descript & OBS** |
| `banger-repurpose` | The orchestrator: one idea → a native package for all 9 platforms |

### Platforms covered
YouTube (long-form + Shorts) · TikTok · Instagram (Reels + Carousels) · X/Twitter · LinkedIn · Substack · Bluesky · Facebook Groups.

## How it works

Under the hood is a reference library every skill reads — the real asset:

- **`references/creators/`** — full reverse-engineered playbooks for Fireship, Matt Pocock, Theo, and ThePrimeagen, plus `_synthesis.md` (the 10 laws they all share).
- **`references/platforms/platform-playbook.md`** — current specs + algorithm rules for all 9 platforms, plus the cross-platform "film once, cut everywhere" repurposing waterfall.
- **`references/frameworks/voice-and-audience.md`** — the translation layer. Define who *your* audience is, and the whole suite adapts the creators' mechanics to them.
- **`references/frameworks/hooks-bank.md`** — a swipe file of hook, title, and thumbnail patterns.

Every skill follows the same shape: load the relevant playbooks → apply the method → deliver a ready-to-use asset → check it against a quality bar drawn from how the pros actually work.

## Install

**As a Claude Code plugin marketplace:**

```
/plugin marketplace add Jeff-Kazzee/bangers
/plugin install bangers
```

**In Cowork:** download the packaged `bangers.plugin` from the [Releases](https://github.com/Jeff-Kazzee/bangers/releases) page (or build it yourself, below) and open it in the Claude desktop app to install.

**Or just clone it** and drop the `skills/` and `references/` into your own project or `~/.claude/`:

```
git clone https://github.com/Jeff-Kazzee/bangers.git
```

**Build the `.plugin` yourself:**

```
cd bangers && zip -r bangers.plugin . -x "*.git*" "*.DS_Store"
```

## Make it yours

BANGERS ships niche-agnostic. To lock it to your audience, open `references/frameworks/voice-and-audience.md` and fill in the five-question audience profile at the top — every skill reads it. Want a different swipe file or creator emphasis? Edit `references/frameworks/hooks-bank.md` and the creator playbooks. It's all plain markdown.

## Credit & inspiration

The techniques here are studied from the public work of [Fireship](https://www.youtube.com/@Fireship), [Matt Pocock](https://www.mattpocock.com/), [Theo](https://www.youtube.com/@t3dotgg), and [ThePrimeagen](https://www.youtube.com/@ThePrimeagen). BANGERS is an independent, unaffiliated homage — go watch them, they're the real deal. Nothing here reproduces their content; it distills publicly-documented *methods* into a reusable toolkit.

## License

[MIT](./LICENSE) © 2026 Jeff Kazzee. Use it, fork it, sell what you make with it. Make bangers.
