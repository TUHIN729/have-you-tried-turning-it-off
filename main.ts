// Have You Tried Turning It Off? — program/v1 entry (node22).
// Writes one funny line, spoken by a hopeless tech support agent to a
// desperate customer, to /output/entry.txt. Deterministic, no network,
// reads nothing outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hear you — I've escalated your ticket to Tier 2, which is just me again, but with a deeper voice.";

if (LINE.trim().length === 0 || [...LINE].length < 1 || [...LINE].length > 199) {
  throw new Error(
    `entry line must be 1-199 characters, got ${[...LINE].length}`,
  );
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
