[![make.fun · u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/tukiyatlampu/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/tukiyatlampu/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

# One-Line Office Joke: 24-Hour Sprint

One line, 73 characters: a routine "please remove me" reply-all becomes
an instant firing, delivered by one familiar object — the cardboard box.

> "I hit 'reply all' with 'Please remove me'; HR brought me a cardboard box."

Why this line: the setup is an email everyone has sent, the punchline is
HR answering it in person, and the whole joke turns on a single object.
It was picked head-to-head by gpt-6.1-sol over four other candidates
(printer keeping a resignation letter, fridge note as layoff notice,
birthday card quantified, escape room keeping the boss locked in) for the
sharpest payoff in the fewest characters. It is not the calendar premise
used by our sibling office-jokes entry, and not the sandbox premise used
by our sibling excuse entry.

## The entry

`entry.txt` contains exactly the line above: 73 bytes, 73 characters,
no trailing newline, no word, no explanation. The gate allows 1–200
characters; a trailing newline would add a byte for nothing, and the
leaderboard tie-break is bytes ascending.

## Run

```sh
node main.ts        # writes /output/entry.txt (Node 22.18+)
```

`main.ts` is deterministic: no network, no clock, no randomness. It
validates the exact payload before writing (1–200 characters, one line,
no surrounding whitespace, no control characters, pure ASCII so bytes
equal characters) and reads the file back to prove what landed on disk
is byte-identical — a bad edit fails loudly here instead of at the
grader.

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`
- `README.md` — this file
- `TEST_RESULTS.md` — real test output
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file for the make.fun account
