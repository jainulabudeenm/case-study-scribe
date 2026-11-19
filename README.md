# Case Study Scribe

A Claude skill that turns your work log into case-study material while the work is happening, so you
are not rebuilding a year from memory the week before a review or a job search.

Memory is a bad archive for work. It keeps the stressful week and drops the date of the decision,
the number that moved and who did which part. Those three things are what make a case study, a
promotion packet or an interview answer believable. This skill writes them down as they happen.

## Install

In Claude Code, as a plugin:

```
/plugin marketplace add jainulabudeenm/case-study-scribe
/plugin install case-study-scribe
```

From npm, which also covers Claude.ai and anywhere outside Claude Code:

```
npx case-study-scribe
```

## Use

```
> scribe today's log
> add this to the case study: we cut the address step, decided with the eng lead #decision
> build a case-study seed for the checkout project
> what do I have for my portfolio?
```

First run asks five short questions: where your work log is, where your projects live, which tags you
use, who can read these notes, and what to call the seed file.

## How it works

Every project gets one **case-study seed**: a living file with the problem, your role, the research,
dated decisions, impact, artifacts and open gaps. See `seed.example.md` for a filled one.

- **Filing.** Each log entry goes to its project's seed, in the slot its tag implies: a `#decision`
  into the timeline, a `#metric` or `#win` into impact, a shipped thing into artifacts. Every line
  carries the date and the source.
- **Building.** For a project that has notes but no seed, it reads what exists and writes the seed,
  with a source on every fact.
- **Readiness.** It tells you which projects are close to a writable case study, and the one missing
  piece that would move each one furthest.

## Rules it keeps

- **It never invents impact.** No number, no outcome, no "increased engagement" without a source. An
  unmeasured result says "not measured". A made-up number in a seed ends up in a portfolio, and
  somebody asks about it in an interview.
- **Credit stays honest.** Shared work says shared, and names your part.
- **Work notes stay work notes.** If your employer can read your notes (a work laptop, a company
  drive), it refuses to write anything about your pay, your review or your job search into them.
- **Seeds are private.** Check what your employer lets you share before any of it goes public.

## The profile

`~/.claude/case-study-scribe/profile.md`, in your home directory. Run `/case-study-scribe-init` to
change it.

## License

MIT
