# Dr. Musaad Alruwaili Website

Static engineering publication hub for Dr. Musaad Alruwaili.

## Publish With GitHub Pages

Recommended repository name for a personal GitHub Pages site:

```text
MusaadAlruwaili.github.io
```

After uploading these files to that repository, the site will be available at:

```text
https://musaadalruwaili.github.io/
```

## Files

- `index.html` - short publication-style homepage
- `styles.css` - design system and responsive layout
- `script.js` - mobile navigation, scroll reveal animation, blog filtering, article table of contents, and contact-form behavior
- `research.html`, `publications.html`, `projects.html`, `experience.html`, `education.html`, `teaching.html` - dedicated indexable profile pages
- `biomass-case-study.html` - featured engineering case study
- `blog/` - article index and expanded engineering article pages
- `resources/` - engineering resource library page
- `about-this-site.html`, `editorial-policy.html`, `privacy-policy.html` - publisher transparency and trust pages
- `assets/` - profile and banner images
- `ads.txt` - Google AdSense publisher declaration
- `robots.txt`, `sitemap.xml`, and `feed.xml` - search engine and RSS discovery helpers
- `.nojekyll` - tells GitHub Pages to publish the static files directly

## Current Structure

- Short homepage with hero, audience pathways, featured case study, latest articles, proof strip, and contact call-to-action.
- Three audience pathways for engineers, researchers, and industry visitors.
- Arabic reading button in the header; it enables a site-wide Arabic mode using Google Translate and keeps the preference while visitors browse pages.
- Dedicated pages for long CV material so the homepage no longer behaves like one continuous resume.
- Blog article pages for searchable engineering content.
- Blog search and category filters.
- Article metadata, table of contents, related reading, canonical URLs, Open Graph metadata, RSS, and JSON-LD.
- Resource library and learning paths for downloadable future material.
- Biomass gasifier case study with challenge, role, architecture, LabVIEW interface, hardware, results, and lessons learned.
- AdSense script and AdSense ownership meta tag across HTML pages.
- Publisher transparency, editorial policy, and privacy pages linked in the footer.
- Scroll-reveal animation for sections and cards, with reduced-motion support.
- Mobile navigation drawer.

## Contact Form

The homepage contact form submits through FormSubmit:

```text
https://formsubmit.co/ajax/eng.musaad1@gmail.com
```

The first live submission may trigger a FormSubmit activation email. Confirm that email so future messages are delivered. If the form service rejects a message, the page shows a direct email fallback.

## AdSense Resubmission Notes

- Upload all files directly into the repository root, not inside an extra folder.
- Confirm `https://musaadalruwaili.github.io/ads.txt` is still reachable after upload.
- Confirm the live homepage no longer shows the old visitor counter or outdated contact button text.
- Confirm the contact form can submit after the FormSubmit activation email is approved.
- After the updated site is live, return to AdSense, tick `I confirm I have fixed the issues`, and request review.

## Future Maintenance

- Add new original engineering articles regularly.
- Add downloadable templates or code files only when they are complete and useful.
- Update domain settings if using a custom domain.

## Reader and resource improvements (October 29, 2026)

- Six English articles now include learning objectives, prerequisites, worked teaching examples, takeaways, primary references, and estimated reading times (200 words/minute).
- Blog cards show difficulty, reading time, and revision date. Static HTML lists newest publication dates first; the sort control also supports revision date and title. Category buttons expose aria-pressed state.
- `blog/scada-basics-ar.html` and `blog/esp32-relay-ar.html` are standalone Arabic articles with RTL layout and reciprocal language links. Reading estimates use 180 words/minute. Other pages retain the existing optional Google Translate behavior.
- `resources/downloads/` contains a relay sketch with wiring/test notes, an illustrative alarm CSV, a manuscript-review worksheet, and synthetic forecast data with a standard-library Python scorer. The sketch and notes are also packaged as `esp32-relay-demo.zip`.
- Examples are explicitly illustrative; the ESP32 project has not been physically tested. No field results or deployment claims were added.
- Privacy disclosures now describe direct FormSubmit submission, the email fallback, language storage, and Metricool. Metricool and AdSense snippets remain in place on every existing page and are included on the new Arabic pages.
- Rebuild the relay ZIP if its source sketch or README changes; keep the folder and `.ino` names identical for Arduino IDE.

### Local preview

Run `python -m http.server 8765` from the repository root, then open `http://localhost:8765/blog/`. No build step or application login is required. Do not submit the contact form during automated checks; it points to the live FormSubmit recipient.
