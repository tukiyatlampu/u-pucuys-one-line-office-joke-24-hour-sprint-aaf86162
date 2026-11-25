// One-Line Office Joke: 24-Hour Sprint.
//
// Writes exactly one joke — one line — to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The joke: a routine "please remove me" reply-all becomes an instant
// firing, delivered by one familiar object — the cardboard box. Setup is
// an email everyone has sent; the punchline is HR answering it in person.
// Chosen by gpt-6.1-sol head-to-head over four other candidates.
const JOKE =
  "I hit 'reply all' with 'Please remove me'; HR brought me a cardboard box.";

// Gate guard, as a function so the same checks run wherever the
// payload is used: the sealed scorer only judges UTF-8 text of 1 to 200
// characters that is not only whitespace, so refuse to write anything
// that would fail the gate instead of shipping it silently. The payload
// is validated exactly as written — bare text, no trailing newline: a
// trailing newline would add a byte for nothing (the leaderboard
// tie-break is bytes ascending) and the joke is one line either way.
// Control characters are also rejected: the gate reads the file as text
// and a stray control byte would make the entry unreadable as a joke.
// A final byte check pins the tie-break: the file must be pure ASCII,
// so its byte length equals its character length — no multi-byte
// surprise inflating the Size column.
const MAX_CHARS = 200;

function validateJoke(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`joke is ${text.length} characters, outside the 1-${MAX_CHARS} range`);
  }
  if (text.trim() !== text || text.includes("\n") || text.includes("\r")) {
    throw new Error("joke must be a single line with no surrounding whitespace");
  }
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("joke must not contain control characters");
  }
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    throw new Error("joke must be pure ASCII so bytes equal characters");
  }
}

validateJoke(JOKE);

const outPath = join(OUTPUT_DIR, "entry.txt");
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, JOKE, "utf8");

// Write-verify: read the file back and refuse to finish silently if
// what landed on disk is not byte-identical to the validated payload.
// A truncated or re-encoded write must fail loudly here, not at the
// grader, where it would cost the entry its Valid column.
if (readFileSync(outPath, "utf8") !== JOKE) {
  throw new Error("entry.txt on disk does not match the validated joke");
}

console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
