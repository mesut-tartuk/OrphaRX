# OrphaRx Pharmaceuticals — Corporate Website

Static, bilingual (EN/TR) brochure site. No build step — every file under
`en/` and `tr/` is a complete, deployable static HTML page.

## Structure

- `index.html` — redirects visitors to `/en/` or `/tr/` based on browser language.
- `en/`, `tr/` — six pages each: Home, About, Our Focus, Partnerships, Founders, Contact.
- `assets/css/style.css` — single shared stylesheet.
- `assets/js/main.js` — mobile nav toggle + contact form AJAX submit.
- `assets/images/logo.svg`, `assets/images/favicon.svg` — brand master artwork and its favicon crop.

## Finishing the contact form

The contact form (`en/contact.html`, `tr/contact.html`) posts to Formspree
but ships with a placeholder endpoint. To activate it:

1. Create a free account at https://formspree.io using `fatmatartuk@gmail.com`.
2. Create a new form and confirm the verification email.
3. Copy just the form's ID from the endpoint — the short code after the last `/` (e.g., `xxxxxxxx` in `https://formspree.io/f/xxxxxxxx`).
4. Replace `REPLACE_WITH_FORMSPREE_ID` in **both** `en/contact.html` and
   `tr/contact.html`'s `<form action="...">` with that ID.
5. Submit a test enquiry on the live site and confirm it arrives by email.

## Local preview

```bash
python -m http.server 8010 --directory OrphaRx
```

Then open `http://localhost:8010/`.

## Deployment

Deployable as-is to any static host (GitHub Pages, Netlify, a plain web
server) — no server-side processing is required.
