# GTA 6 Clipper — make.fun bounty gta6-clipper-01

Entry for make.fun bounty **gta6-clipper-01** — "Clip GTA 6 for the most YouTube views".
$500 total (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14).
Places go by the video's YouTube views at the deadline reading (most first).
Deadline: **23 November 2026, 01:00 UTC = 08:00 WIB**.

## The clip

File: `gta6_clipper_youtube.mp4` — 1080x1920 vertical 9:16, H.264 + AAC,
30.0 s, 13,889,691 bytes (~13.3 MB), md5 `81af73dd6025020e53e87cb324636049`.

Source: the official **GTA VI Launch Trailer** (Rockstar Games, released
15 Oct 2026, https://www.youtube.com/watch?v=rz1B4B2yBZY), downloaded and
cut in this session. Moment: trailer segment **44.4–74.4** — one continuous
run through Vice City at night (neon club, Lucia's ankle monitor, street
race, helicopter stunt, Lucia with a rifle as fire erupts behind her).

Structure:
- 0–3 s: hook **"GTA 6 IS OUT NOW"**
- 3–8 s: "AFTER 13 YEARS OF WAITING"
- 8–14 s: "WELCOME BACK TO VICE CITY"
- 14–20 s: "PS5 & XBOX SERIES X|S $79.99"
- 20–30 s: the make.fun pitch over dimmed footage — "MAKE CLIPS LIKE THIS
  WITH AI / AND EARN MONEY ON make.fun / make.fun/bounty/gta6-clipper-01"

Facts used (verified): GTA VI released 19 Nov 2026, PS5 + Xbox Series X|S
only (no PC yet), $79.99 standard, Vice City / Leonida, Lucia & Jason.

## Files in this folder

| File | Goes into the GitHub repo? |
|---|---|
| `main.ts` | Yes — entrypoint, copies VIDEO.json to /output |
| `VIDEO.json` | Yes — placeholder for now, replace with the real Shorts URL after posting |
| `LICENSE` | Yes — MIT, with SPDX-License-Identifier line |
| `.makefun/owner.json` | Yes — wallet 82pPezPZdLFeP8nSc5p9Z1E4G6eQT5jwBvMmtPqTwsef |
| `README.md` (this file) | Yes |
| `DOSSIER.md` | Yes — build notes (optional, harmless) |
| `gta6_clipper_youtube.mp4` | **No** — do not commit; the entry is the YouTube video |
| `work/` | **No** — scratch (trailer, frames, subtitle file) |
| `out/`, `out2/` | **No** — local test output of main.ts |

## Copy-paste title (YouTube)

```
GTA 6 IS OUT NOW 🎮
```

## Copy-paste description (YouTube) — paste exactly as-is

```
GTA 6 IS OUT NOW 🎮 After 13 years of waiting, we're finally back in Vice City. PS5 & Xbox Series X|S — $79.99. Lucia & Jason are here.

Make clips like this with AI and earn money on make.fun 🎬

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-puppy-skylark-zeppelin

#gta6 #gtavi #vicecity #rockstargames #gaming #shorts
```

The third paragraph is the bounty's required line (word for word) and the
play code `makefun-puppy-skylark-zeppelin`. Do not delete either — the
house refuses an entry whose description lacks them.

## Phone steps for the user (do these before the deadline)

1. **Buat channel YouTube** (belum ada): buka aplikasi YouTube → foto
   profil → "Buat channel". Nama: **klippodcast**. Handle: coba
   **@klippodcast**, kalau sudah dipakai pakai **@klippodcast64** (sama
   seperti TikTok). Gratis.
2. **Upload klipnya**: di aplikasi YouTube, tap **+** → "Buat Short" /
   "Upload video" → pilih file `gta6_clipper_youtube.mp4` dari HP.
   (Muse akan mengirim file ini; ukurannya ~13 MB.)
3. **Judul**: tempel judul di atas. **Deskripsi**: tempel deskripsi di atas
   persis apa adanya (jangan hapus baris bounty dan kode play).
4. **Visibilitas: Publik** (bukan Unlisted/Private). Publikasikan
   sebelum **Senin 23 Nov 2026 jam 08:00 WIB**. Biarkan tetap publik
   sampai hasilnya keluar.
5. **Kirim link Short-nya ke Muse** (tombol Bagikan → Salin link), supaya
   Muse bisa mengisi VIDEO.json dan submit entrinya.

## After posting (for the submit step)

1. Replace the placeholder in `VIDEO.json` with the real Shorts URL:
   `{"url": "https://www.youtube.com/shorts/<id>"}`.
2. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and check `out/VIDEO.json` matches.
3. Create the public GitHub repo (e.g. `gta6-clipper-entry`) with the files
   listed above, set its About (website + `makefun` topic), then bundle the
   transcripts and submit with the kit CLI before the deadline.

Views must be organic — never buy views or use bots; that disqualifies
the entry.
