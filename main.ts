// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst advice an AI assistant could give, written by
// the agent in this session. The joke: a confident, tidy-sounding tip
// that would brick the machine if anyone actually followed it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "To save battery, delete System32: your laptop runs much lighter without those heavy system files.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space, and a single line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} chars, gate is 1-140`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Round-trip check: what the grader reads must be exactly the line
// above, byte for byte, with no trailing newline added.
import { readFileSync } from "node:fs";
if (readFileSync(outPath, "utf8") !== ENTRY) {
  throw new Error("round-trip mismatch on entry.txt");
}
console.log(`wrote ${chars.length} chars to ${outPath}`);
