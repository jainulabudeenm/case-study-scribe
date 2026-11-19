---
project: checkout-redesign
type: case-study-seed
status: shipped · one-page checkout replaced a four-step flow
updated: 2026-10-14
---

# Case-study seed: checkout-redesign

## Context and problem
Mobile checkout had four steps. Support tickets kept naming the address step, and session recordings
showed people leaving on it (source: research/recordings-summary.md).

## My role and credit
- Mine: the flow, the address form, the usability tests, the spec.
- Shared: the payment step, with a second designer. The engineering lead chose the address API.

## Research
- 2026-07-08: five usability tests on the old flow. Four of five people paused at the address step (source: log 2026-07-08).
- 2026-07-15: compared three competitor checkouts (source: research/benchmark.md).

## Dated decisions
- 2026-07-22: merged address and delivery into one step (source: log 2026-07-22) #decision
- 2026-08-05: dropped the account-creation prompt from checkout, moved it to the order confirmation (source: log 2026-08-05) #decision #case-study

## Impact and metrics
- 2026-09-30: checkout completion went up after launch. Exact number pending the analytics review (source: log 2026-09-30) #metric
- 2026-10-02: the team lead thanked the squad in the all-hands for the launch (source: log 2026-10-02) #win

## Artifacts
- Final flow and spec: design/checkout-v2.fig, spec/checkout-v2.md
- Usability test notes: research/usability-round-1.md

## Open gaps
- The exact completion number, once analytics publishes it.
- A before and after screenshot pair for the address step.
