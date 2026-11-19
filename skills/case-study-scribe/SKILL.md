---
name: case-study-scribe
description: Turns a work log into case-study material as you go. Takes work entries (a day's log, a single win, a decision, a shipped thing) and files each one into the right project's case-study seed, in the slot its tag implies, with the date and the source. Can also build a seed for a project from the notes that already exist, and report which projects have enough for a case study. Use when the user logs work, says "scribe this", "add this to the case study", "build a case-study seed for X", "what do I have for my portfolio", or is preparing a review, a promotion packet or a job search.
---

# Case Study Scribe

Nobody remembers what they did last March. When a review, a promotion packet or a job search comes,
people rebuild their work from memory, and memory keeps the drama and drops the evidence: the date of
the decision, the number that moved, who did which part.

This skill keeps that evidence as it happens. A work log is the spine. Each project gets a
**case-study seed**: one living file with the problem, your role, the research, dated decisions, the
impact, the artifacts and what is still missing. When it is time to write the case study, the
material is already there, dated and sourced.

## The profile: read this first, every time

`~/.claude/case-study-scribe/profile.md` says where the work log is, where projects live, how to
match an entry to a project, and who can read these notes.

**If it does not exist, run onboarding (next section) first,** then do what the user asked.

## Onboarding

Run this when no profile exists, or when the user runs `/case-study-scribe-init`. Look at their
folders yourself first, so you can propose answers instead of asking blind. One topic per message.

1. **The work log.** Where daily or weekly work entries live (for example `work-log/YYYY-MM-DD.md`),
   or "none, I will paste entries in".
2. **Projects.** Where project folders live, and how to tell which project an entry belongs to:
   folder names, plus a few keywords per project. If they already keep an index of projects with
   keywords, use that file as the router.
3. **Tags.** The defaults are `#decision`, `#metric`, `#win` and `#case-study`. Keep them, rename
   them, or add their own.
4. **Who can read these notes?** Only them, or their employer too (a work laptop, a company drive, a
   work repo). This decides the safety rule below.
5. **Seed file name.** Default `case-study-seed.md` inside each project folder.

```markdown
# Case Study Scribe profile
work-log: <path pattern, or "pasted">
projects: <folder>
router: <index file, or the keyword list below>
keywords:
- <project-folder>: <keyword>, <keyword>
tags: #decision #metric #win #case-study
readable-by: me only | my employer too
seed-file: case-study-seed.md
```

## The safety rule

**If `readable-by` says the employer can read these notes, they hold work facts only.** Nothing about
the user's pay, their review, their opinion of a colleague, their job search or their health. If an
entry holds any of that, stop, say so, and write nothing. The user files that part somewhere private.

Either way, a seed is a private working note. **Before anything from a seed goes public,** the user
checks what their employer lets them share. Say this once, at the end of every readiness report.

## Mode A. Build a seed for a project

When a project has no seed yet, or its seed is thin:

1. Read the project folder: its notes, its state or status file, its sources, anything raw, and
   every work log entry that mentions it.
2. Write the seed from the template below.
3. **Cite the source of every fact:** a log date, a file name, a link.
4. **Never invent impact.** If it has not shipped, or nobody measured it, write "pending" or "not
   measured". An invented number in a seed ends up in a portfolio, and someone will ask about it in
   an interview.
5. **Keep credit honest.** Shared work says shared, and names what was the user's part. A project
   that never shipped still gets a seed: "designed, and here is why it did not ship" is a real story.
6. Skip a project with no real content yet. An empty seed is clutter.

## Mode B. File new entries (the daily job)

Given a day's log or a single item:

1. **Route** each item to its project with the router. Unsure: leave it in the log and list it at
   the end for the user. Never guess a project.
2. **Update the project's state file**, if it has one and the item changes status or next steps.
   Keep the user's framing and voice.
3. **Append to the seed,** in the slot the tag implies:

   | Item | Seed slot |
   |---|---|
   | `#decision` | Dated decisions |
   | `#metric` | Impact and metrics |
   | `#win` | Impact and metrics, marked as a win |
   | Research, a benchmark, an interview round | Research |
   | Something built or shipped | Artifacts |
   | `#case-study` | The slot that fits best. **Keep the tag**, so a writer can find it later |
   | A blocker or an open question | Open gaps |

4. **Cite the log date** on every line you add.
5. **No duplicates.** Before appending, check whether the seed already has this item from the same
   date. If it does, skip it.
6. Skip parked projects unless the user asks.

## Mode C. Readiness report

When the user asks "what do I have" or is preparing a review or a job search: for each seed, say
which slots are filled and which are empty, and rank the projects by how close they are to a
writable case study. A seed is writable when it has a problem, the user's role, at least two dated
decisions and either a measured result or an honest "not measured, and here is why". Name the one
missing piece per project that would move it furthest.

## The seed template

```markdown
---
project: <project>
type: case-study-seed
status: <shipped | in progress | parked> · <one-line headline>
updated: YYYY-MM-DD
---

# Case-study seed: <project>

## Context and problem
## My role and credit
<what was mine, what was shared, who else did what>
## Research
## Dated decisions
- YYYY-MM-DD: <decision> (source: <log date or file>)
## Impact and metrics
<numbers with their source, or "pending" / "not measured">
## Artifacts
## Open gaps
<what is missing before this is writable>
```

## After

Report in a short table: which seeds you changed, what you added, and any entry you could not route.

## Never

Never invent a number or an outcome. Never write a personal fragment into notes the employer can
read. Never edit raw or frozen source files. Never commit or push.
