# Dossier — gta6-clipper-01

Bounty: **gta6-clipper-01** — "Clip GTA 6 for the most YouTube views".
Prize: $500 total (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14).
Deadline: 2026-11-23 01:00 UTC = 08:00 WIB. Submissions at last check: ~1,689.
Account: @gentle-walrus-31, wallet 82pPezPZdLFeP8nSc5p9Z1E4G6eQT5jwBvMmtPqTwsef.
Play code used: **makefun-puppy-skylark-zeppelin** (code 0 of 4, fetched via
the make.fun API with the stored API key).

## Moment chosen and why

Source: official **GTA VI Launch Trailer** (Rockstar Games, YouTube
https://www.youtube.com/watch?v=rz1B4B2yBZY, released 15 Oct 2026),
downloaded fresh in this session with yt-dlp (tv_embedded client,
formats 137+140, 1920x1080 H.264+AAC, 90.05 s).

Chosen moment: **trailer 44.4–74.4 (30.0 s, one continuous segment)**.
Frames inspected in this session at t=46/52/58/64/70/73 show: neon club,
Lucia's ankle monitor, a man on a couch, a night street race through
Vice City, a helicopter stunt over the skyline, and Lucia with a rifle as
fire erupts. Why it holds a viewer: the scene changes every few seconds,
it shows the game's most iconic visuals (Vice City nights, Lucia, the
ankle monitor), and it ends on the strongest action shot — the explosion
behind Lucia. One moment, not a montage, as the rules ask.

## Creative decisions (made in this session)

- Hook in the first 3 seconds: "GTA 6 IS OUT NOW" over the neon club shot.
- Overlays while the moment plays: "AFTER 13 YEARS OF WAITING" /
  "WELCOME BACK TO VICE CITY" / "PS5 & XBOX SERIES X|S $79.99".
- Vertical format: blur-fill (blurred 1080x1920 background + sharp
  1080-wide foreground centred), so nothing important is cropped away.
- Pitch (20–30 s, 10 full seconds, over footage dimmed to 55% black):
  "MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun /
  make.fun/bounty/gta6-clipper-01" — text on screen, bold, centred, with
  the bounty URL in yellow. This satisfies the pitch rule (on screen,
  names make.fun, shows the bounty page).
- Audio: original trailer audio kept for the full 30 s.
- Title: "GTA 6 IS OUT NOW 🎮". Description: hook + GTA facts + pitch
  + the exact bounty line + play code + hashtags (see README.md).

## Verification results

- Clip: `gta6_clipper_youtube.mp4` — 1080x1920, H.264 + AAC, 30.000 s,
  13,889,691 bytes (~13.3 MB), md5 81af73dd6025020e53e87cb324636049.
- Frames visually checked at t=1/5/11/17/25: hook, all three overlays
  and the pitch card all render bold and readable, inside the safe area.
- main.ts: written in this session (v1: copy + JSON validation; v2:
  added YouTube URL-shape validation + byte-compare of the copy).
  Local run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out
  node main.ts` — exit 0, out/VIDEO.json byte-identical to VIDEO.json;
  two runs byte-identical; a bad (non-YouTube) URL is refused with exit 1.
- Kit: `gta6-clipper-01-kit/` downloaded from
  https://make.fun/c/gta6-clipper-01/kit; RULES.txt and AGENT.md read.

## Status / what is still open (NOT done in this build)

- The GitHub repo is **not** created yet (parent to create).
- The YouTube channel does **not** exist yet — the user must create it
  (suggested name "klippodcast", handle @klippodcast, fallback
  @klippodcast64) and post the Short as Public before Mon 23 Nov 08:00 WIB.
- VIDEO.json still holds the placeholder
  `https://www.youtube.com/shorts/AAAAAAAAAAA` — replace with the real
  Shorts URL after posting, re-run main.ts, then bundle + submit.
- Nothing was submitted. No views have been bought or botted.
