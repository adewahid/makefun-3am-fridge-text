import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
const ENTRY =
  "3am. The cheese has been in here longer than your last relationship, and unlike him, it still shows up for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
