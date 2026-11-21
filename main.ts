// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a public YouTube Short that pitches
// make.fun. This program's only job is to hand the video's address to the
// grader — it copies VIDEO.json from the repository root to /output,
// byte for byte, and refuses to run when the file is missing or unreadable.
// Nothing this program writes about the video is scored: the house reads
// the video itself through the YouTube Data API and ranks entries by views.
//
// Local run (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let raw: Buffer;
try {
  raw = readFileSync(SOURCE);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let video: unknown;
try {
  video = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof video !== 'object' || video === null || typeof (video as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

// The gate only accepts a YouTube video address: a Shorts link, a watch
// link, or a youtu.be link, with an 11-character video id. Catch a bad
// address here instead of letting the grader refuse the entry for it.
const url = (video as { url: string }).url;
const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}([?&#].*)?$/;
if (!YOUTUBE_URL.test(url)) {
  console.error(`VIDEO.json url is not a YouTube video address: ${url}`);
  process.exit(1);
}

try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The grader runs the program twice and the two runs must write the same
// bytes, so verify the copy matches the source before reporting success.
const copied = readFileSync(TARGET);
if (!copied.equals(raw)) {
  console.error('VIDEO.json copy does not match the source.');
  process.exit(1);
}
