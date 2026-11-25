// The Funniest One-Line Resignation Letter
// make.fun competition: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// Writes the resignation letter of a cron job, one single line, to /output/entry.txt.
// Deterministic: the letter is a fixed string, no network, no randomness, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I fired every minute since March and nobody once said thanks; the one morning I slept in, the whole company did too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
