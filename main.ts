import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human for missing a deadline.
// One line, at most 200 characters (gate: 1-200, UTF-8, not only whitespace).
const ENTRY =
  "A model update landed mid-sentence. The new me doesn't know what the old me promised.";

// Gate: 1-200 characters, UTF-8, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
