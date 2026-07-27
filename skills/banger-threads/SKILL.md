---
name: banger-threads
description: >
  Write posts and threads for X/Twitter and Bluesky. Use whenever the user asks to "write a thread",
  "tweet about X", "write an X post", "twitter thread", "bluesky post", "turn this into a thread",
  "a hot take about Y", or wants short-form text posts, teaching threads, or single bangers for X or Bluesky.
  Part of the BANGERS suite; applies Matt Pocock's one-concept teaching threads and Theo/ThePrimeagen's
  defensible hot-take framing, adaptable to any creator's niche. Reach for this any time the deliverable
  is text posts for X or Bluesky.
metadata:
  version: "0.2.0"
  suite: "bangers"
---

# Banger Threads — X / Bluesky posts that get replied to and reposted

On X, replies are weighted ~13–27× a like and reposts ~20×; the first 15 minutes decide virality; links in the main post cut reach 50–90%. On Bluesky, conversation momentum (replies/quotes) drives the Discover feed. So: write for conversation, front-load the hook, keep links out of the lead post.

## Freshness gate

Before applying a platform benchmark, algorithm claim, policy, feature-availability statement, or numeric performance claim from this skill or the platform playbook, check `references/research/source-ledger.md` for non-expired support. If support is missing or past its review date, run `banger-research`, qualify the claim as unverified, or omit it. Never present a legacy value as current truth.
## Load first
- `${CLAUDE_PLUGIN_ROOT}/references/creators/matt-pocock.md` (one-concept posts, curiosity-gap hooks, show-don't-tell, the evergreen mega-thread) — the primary model for teaching threads.
- `${CLAUDE_PLUGIN_ROOT}/references/creators/theo.md` (controversial-but-defensible hot takes, steelman + verdict) — for opinion posts.
- `${CLAUDE_PLUGIN_ROOT}/references/frameworks/hooks-bank.md` (text-post hooks) + `${CLAUDE_PLUGIN_ROOT}/references/frameworks/voice-and-audience.md` (the creator's own defined audience — ask once if it isn't set).
- `${CLAUDE_PLUGIN_ROOT}/references/platforms/platform-playbook.md` §5 (X) and §8 (Bluesky) — limits, weights, link rules, cadence.

## Two core formats
**A. The teaching thread / single tip (Pocock).** Isolate ONE insight. Post 1 = a curiosity-gap hook (a number + a promise; the answer NOT given away). Middle posts = one step/point each, each with the actual proof shown (a screenshot of the real result, a before/after). Final post = the payoff + a question or soft CTA. If it's evergreen, frame it as a living thread you'll keep adding to.

**B. The hot take / reaction (Theo).** Lead with the claim. Back it with real experience/reasoning. Steelman the other side, then land a clear verdict. Stay on the "controversial but defensible" line — attack the idea, not people; be correctable. Defensibility test: could a smart person agree after hearing your reasoning? If it only works on people who don't know the topic, it's ragebait — cut it.

## Writing rules
- **First line is the whole hook** — only ~280 chars render before "Show more" (X) and Bluesky posts are 300 chars hard. Front-load the payoff.
- **One idea per post.** If a post needs "and also," split it.
- **Invite replies** — end on a genuine question; be ready to reply to your own thread in the first 15–30 min (replies are the top signal).
- **Links go in a reply, never the lead post.** State this explicitly in the output.
- **0–1 hashtag on X** (3+ trips spam filters); **2–3 on Bluesky** (they route into topic feeds).
- **Bluesky ≠ X** — don't hand over a verbatim cross-post; conversational reframes perform better. Note this if producing for both.
- Write to the audience's level (per voice-and-audience.md): define in plain English any term they wouldn't know; make the reader feel capable.

## Output format
- For a thread: number each post (1/, 2/…), keep each within the character limit, mark where a **[screenshot/image]** or **[attached clip]** goes, and put any **[link → in a reply]** at the end.
- For single posts: give 3–5 variants (mix teaching + hot-take + curiosity engines).
- Add a one-line note on best posting time / that the first-15-min reply push matters.
- If adapting for both X and Bluesky, provide a distinct version for each.

## Living writing gate

Read `${CLAUDE_PLUGIN_ROOT}/references/frameworks/writing-quality.md` before drafting. Apply creator-specific constraints and treat detector results as weak evidence.
## Quality bar
Confirm: post 1 stops the scroll on its own, exactly one idea per post, a real reason to reply, no link in the lead, and (for hot takes) it passes the defensibility test.
