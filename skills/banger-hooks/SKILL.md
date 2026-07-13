---
name: banger-hooks
description: >
  Write scroll-stopping hooks, video titles, and thumbnail concepts. Use whenever the user asks to
  "write a hook", "give me a better opening line", "title ideas", "come up with a title", "thumbnail idea",
  "thumbnail concept", "how should I open this", "make this more clickable", "my video isn't getting views",
  "help me with packaging", or is polishing the first 3 seconds / first line / title / thumbnail of any piece.
  Part of the BANGERS suite. Packaging (hook + title + thumbnail) often decides whether content is ever
  seen, so reach for this skill aggressively any time the opening or packaging of a piece is in play.
metadata:
  version: "0.1.0"
  suite: "bangers"
---

# Banger Hooks — packaging that earns the click and the first 3 seconds

Packaging is a separate craft from the content, and it usually decides whether the content is seen at all (Theo: "obsess over whether the packaging makes it worth clicking"). A hook's only job is to buy the next 3 seconds. A title/thumbnail's only job is to earn the click — honestly.

## Load the swipe file first
Read `${CLAUDE_PLUGIN_ROOT}/references/frameworks/hooks-bank.md` (the hook engines, fill-in templates, title patterns, thumbnail rules) and `${CLAUDE_PLUGIN_ROOT}/references/frameworks/voice-and-audience.md` (the creator's own defined audience and voice — ask once if it isn't set — so hooks invite that audience instead of intimidating them). For platform-specific opening rules (what "the first 3 seconds" means per surface), see `${CLAUDE_PLUGIN_ROOT}/references/platforms/platform-playbook.md`.

## Method
1. **Know the payoff first.** You can't hook honestly without knowing what the content delivers. If the user hasn't told you, ask what the one takeaway is.
2. **Pick a hook engine** (curiosity gap / specific promise / contrarian / stakes / reaction / relatable pain / result-first). Choose the one the content can actually pay off.
3. **Make it specific.** Swap vague nouns for a named tool, a number, a concrete outcome — whatever your niche's version is. "This can help you" → "This free tool writes a week of emails in 90 seconds" / "This one stretch fixes desk-job back pain in 5 minutes a day."
4. **Generate options, not one.** Give 5–10 hook variants so the user can pick the voice that fits. Vary the engine across them.
5. **Never write clickbait you can't pay off.** The payoff must deliver — reach dies on the hook/retention mismatch check (YouTube, TikTok, IG all penalize it).

## Titles (for YouTube / long-form)
Combine the exact searched term + a finite promise or emotion (number, time box, or verdict). Front-load the payoff; ~70 chars. Offer 5–8 title options ranging from safe to spicy. Patterns and rules are in the hook bank ("[Thing] in 100 Seconds", "I tried N... so you don't have to", "The truth about ___", reaction titles, etc.).

## Thumbnails
Describe a concept the user can actually make in whatever design tool they use (Canva, Figma, Photoshop, their video editor's title tool). Rules that matter most:
- 1–3 words MAX, big, high-contrast; the thumbnail must NOT repeat the title (it's a SECOND hook).
- If a face is used, describe the emotion to perform. Every thumbnail poses an implicit question (good/bad? worth it?).
- Keep key elements centered (survives cropping). Plan the thumbnail BEFORE the content is finalized so the promised moment actually exists.
Give 2–3 distinct thumbnail directions with the exact words + the visual + why it works.

## Output format
Group as: **Hooks** (5–10 options, labeled by engine) · **Titles** (5–8 options) · **Thumbnail concepts** (2–3 directions). End by recommending one hook + one title + one thumbnail as your top pairing, and note that the title and thumbnail should NOT say the same thing. If the piece is going to multiple platforms, remind the user each surface needs its own opening (hand to `banger-repurpose`).

## Quality bar
Every hook must pass the hook checklist in the swipe file: works in the first 3 seconds/line alone, one clear reason to continue, specific not vague, actually paid off by the content, and inviting (not intimidating) to the audience.
