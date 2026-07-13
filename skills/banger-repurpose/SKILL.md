---
name: banger-repurpose
description: >
  Turn ONE piece of content into a full cross-platform package — the "film once, cut everywhere" waterfall.
  Use whenever the user asks to "repurpose this", "turn this video into posts", "post this everywhere",
  "make content from this", "one idea for all platforms", "content from my podcast/stream/video", "atomize
  this", "give me everything for this topic", or hands over a source (video, transcript, script, article,
  idea) and wants it adapted across YouTube, Shorts, TikTok, Instagram, X, LinkedIn, Substack, Bluesky, and
  Facebook Groups. Part of the BANGERS suite; the orchestrator that routes work to the other banger skills.
metadata:
  version: "0.1.0"
  suite: "bangers"
---

# Banger Repurpose — one idea → a whole platform package (the waterfall)

The 2025–2026 rule is: **stop cross-posting, start repurposing.** The same file everywhere trips duplicate-detection and throttles reach (up to ~42% Reels cut for duplicates, ~72% with a visible watermark). Deriving platform-native variants from one source does not. This skill is the orchestrator: it takes one source asset and produces a tailored package for every platform the user wants, delegating to the other BANGERS skills.

## Load first
- `${CLAUDE_PLUGIN_ROOT}/references/platforms/platform-playbook.md` §10 (the waterfall + native-vs-cross-post rules) and the per-platform sections for whichever targets are chosen.
- `${CLAUDE_PLUGIN_ROOT}/references/creators/_synthesis.md` (produce one rich source, then atomize) + `${CLAUDE_PLUGIN_ROOT}/references/frameworks/voice-and-audience.md` (the creator's own defined audience — ask once if it isn't set).

## Step 1 — identify the source and the core idea
Take whatever the user has (a long video, transcript, script, stream/podcast, article, or even a single idea) and extract: the ONE core idea, the 3–8 strongest self-contained moments/points, and any framework/list inside it. If there's no source yet, hand back to `banger-ideas` to pick one, or `banger-script-longform` to make the anchor first.

## Step 2 — confirm the target platforms & effort
Ask (or infer) which platforms to hit and how deep. Default full waterfall = the anchor + short-form clips + a carousel + text posts. Don't silently drop platforms — list what you're producing.

## Step 3 — run the waterfall (delegate to the sibling skills)
Produce, from the one source:
1. **Anchor** — the long-form piece (YouTube). If it doesn't exist yet → `banger-script-longform`.
2. **Short-form clips (many)** — pick the best 15–60s moments → `banger-script-shorts`, one hook + caption + native-sound note PER platform (Shorts / TikTok / Reels), each with a DIFFERENT first frame (duplicate detection weights the first ~0.5s).
3. **Carousel** — a framework/list from the source → `banger-carousels` (Instagram 4:5 + LinkedIn PDF).
4. **X thread** + **Bluesky** posts → `banger-threads`.
5. **LinkedIn post**, **Substack issue (+ pull-out Notes)**, **Facebook Group post** → `banger-longform-written`.
6. **Edit assets** for the clips (reframe plan, captions/SRT, markers) → `banger-edit`.
7. **Packaging** for each surface (hooks/titles/thumbnails) → `banger-hooks`.

## Step 4 — enforce the native rules (critical)
- Export a **clean master with NO watermark** before it touches TikTok; distribute that downstream.
- Give each clip its own **first frame + native trending audio + caption style** — never the same MP4 everywhere.
- **Adapt the text container per platform** (X = strong first line + media; LinkedIn = short-line mini-essay; IG caption front-loaded; Bluesky = conversational reframe, not a verbatim copy).
- **Stagger publishing 24–72h**, hit each platform's best time, upload native files (schedulers are fine).

## Output format
Deliver an organized package, grouped by platform, each with the ready-to-use asset (script/post/caption) + its specs + posting note. Lead with a short **repurposing map** (source → this many clips + these posts) so the user sees the whole plan at a glance. Flag anything that still needs the user (footage to shoot, a screenshot to grab). If the package is large, offer to write each platform's assets to files and deliver them.

## Quality bar
Confirm every platform variant is genuinely native (own hook/first-frame/audio/text container), the watermark rule is stated, publishing is staggered, and nothing is a lazy identical cross-post.
