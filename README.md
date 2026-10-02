# Lokesh R M — portfolio (v2)

One-page static site in the same design system as theanve.com (`../site-v2`): paper surface,
Inter Tight + one Fraunces italic word, DM Mono meta, oxblood accent, hairlines, light/dark toggle.
No build step: edit `index.html`, `styles.css`, `script.js` directly.

The original site is unzipped in `../portfolio-original/` for reference.

## Run locally

```bash
python -m http.server 4176 --directory portfolio-v2
```

## Deploy (GitHub Pages)

Copy everything in this folder into the root of the `hilokeshrm.github.io` repo, replacing
the old files, and push. Same filenames as before (`index.html`, `styles.css`, `script.js`,
`favicon.svg`, resume PDF), so nothing else changes.

## Notes

- Domain colours reuse the ANVE company colours: cobalt = agents, ember = vision/voice,
  moss = robotics, ochre = IoT/edge, oxblood = web.
- `assets/plate-contours.jpg` is the ANVE contours plate (from `site-v2/assets/img`).
- `assets/og-image.png` and `assets/apple-touch-icon.png` were regenerated in the new style.

## Freelance layout (2026-10-02)

Order: hero → services (6) → client work (+ student/engineer project help) → process → engineering work →
about + ANVE → experience → skills/education → FAQ → contact (email, WhatsApp, links).

- On phones a "Start a project / WhatsApp" bar (`#dock`) appears after the hero and hides at Contact.
- JSON-LD carries Person + ProfessionalService (services list) + FAQPage. Keep the FAQ text in
  the HTML and the JSON-LD in sync.
- Contact emails: hi.lokeshrm@gmail.com and lokeshrm.work@gmail.com. Four resume variants live in
  `resumes/` (PDF + Word source); the site links only the AI / ML Engineer PDF.
