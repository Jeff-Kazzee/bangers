# Technical clarity: the frame and payload split

Read this when the content teaches how something works. It sits between
`voice-and-audience.md` (who is speaking) and `writing-quality.md` (what fails).

Most technical content fails by applying one register to the whole piece. All
voice and the explanation goes hand-wavy: the reader enjoys it and cannot
repeat it. All specification and the piece reads like a manual: correct,
unshareable, unfinished. Teaching content needs both registers, assigned
deliberately.

## The split

**Frame = the author's voice.** Hook, stance, the story of what happened, the
cost of getting it wrong, transitions, the judgment, the call to action. This
is where the reader decides whether to keep going and whether to trust the
person talking. Personality lives here. Apply the creator profile, not the
clarity rules below.

**Payload = technical clarity.** The passages where the reader must understand
a mechanism: definitions, steps, what the system does, why the failure
happens. This is where the reader is working, and where vague writing costs
them the most. Apply the discipline below.

A starting ratio for a teaching post: frame carries the first and last fifth,
payload carries the middle. Adjust to the piece.

## Payload discipline

Adapted from ASD-STE100 Simplified Technical English, a controlled-language
standard built for aircraft maintenance documentation, where a misread
instruction has a physical cost. The full standard is at
https://www.asd-ste100.org/ and is free to download.

1. **One name per thing.** Choose the term on first use and never rotate it.
   If it is a "context file" in paragraph two, it is not a "memory doc" in
   paragraph five. Synonym rotation is the fastest way to lose a reader who is
   tracking a mechanism.
2. **One idea per sentence.** Around 25 words in payload prose, closer to 20
   for steps and instructions.
3. **Active voice with a named actor.** "The parser reads the file", not "the
   file is read". The reader is building a model of who does what.
4. **Verbs, not nominalized verbs.** Analyze, not "perform an analysis of".
   Help, not "provide assistance".
5. **Cut hedge stacks.** "This may potentially help improve" says nothing. It
   either does the thing or it does not. Real uncertainty stated plainly
   ("I have not tested this at scale") is honesty, not hedging. Keep that.
6. **Show quality, never claim it.** No seamless, robust, powerful, blazing,
   effortless. Give the number, the before and after, or the failure it
   prevents.
7. **No semicolons in payload prose.** Use a period.
8. **Concrete over abstract.** The exact command, the exact error text, the
   exact file. Screenshots and code blocks beat description.

## What survives the discipline

Do not sand these off in the name of clarity:

- Contractions, if the author uses them.
- The aside that names the annoying part.
- The judgment call. A specification has no opinions. The author does, and the
  opinion is often why the piece is worth reading.
- Humor and intensity where the author has earned them.

Orwell's sixth rule governs the whole document: break any of these rules
before you write something barbarous. Clarity is the goal. Compliance is not.

## Orwell's six rules

From "Politics and the English Language" (1946), paraphrased:

1. Never use a figure of speech you are used to seeing in print.
2. Never use a long word where a short one works.
3. If you can cut a word, cut it.
4. Never use the passive where the active works.
5. Never use jargon when everyday English works.
6. Break any of these rules before writing something barbarous.

## Kill-list for teaching content

These tells hit hardest here, because the reader is already working:

- Significance inflation: "plays a pivotal role", "underscores the
  importance", "a testament to", "the evolving landscape of".
- Copula avoidance: "serves as" and "boasts" where "is" and "has" work.
- Negative parallelism: "it's not just a cache, it's a paradigm shift".
- Rule-of-three triples that sound complete and teach nothing.
- Vague attribution: "experts argue", "industry reports suggest". Name the
  source or cut the claim.
- Filler vocabulary: delve, intricate, interplay, meticulous, leverage,
  facilitate, showcase, foster, robust, seamless.
- Formatting tells: bold on every other phrase, Title Case Headings, and a
  closing paragraph that restates the piece.

## Check before delivering

- Can a reader follow the mechanism and repeat it with the post closed?
- Is every concept called exactly one name?
- Did any sentence claim quality instead of showing it?
- Does the frame still sound like the author, or did the discipline flatten
  the piece?
- Would deleting any sentence lose information? If not, delete it.

A mechanical check catches the countable defects and nothing else. It will
pass a clean, confident, hollow paragraph. It cannot tell you whether you had
anything to say.
