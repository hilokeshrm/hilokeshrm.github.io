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
about + ANVE → experience → skills/education → FAQ → contact + project brief form.

- The brief form (`#brief`) opens the visitor's email app with the brief filled in (see `script.js`).
  To store submissions instead, point it at Formspree / Netlify Forms.
- On phones a "Start a project / WhatsApp" bar (`#dock`) appears after the hero and hides at Contact.
- JSON-LD carries Person + ProfessionalService (services list) + FAQPage. Keep the FAQ text in
  the HTML and the JSON-LD in sync.
- Contact email: hi.lokeshrm@gmail.com (also fixed inside the resume PDF; original kept in
  `../portfolio-original/resume-before-email-fix.pdf`).
