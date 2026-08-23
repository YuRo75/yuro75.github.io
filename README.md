# yuro75.github.io

Personal GitHub Pages site for Yuri Roos.

## Structure

- `index.html` — landing page (`https://yuro75.github.io/`)
- `pdm-prompt-book/` — Channel Sales PDM Prompt Book (`/pdm-prompt-book/`)
- `assets/` — shared brand assets used across pages
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, icons — site metadata

See `pdm-prompt-book/README.md` for the Prompt Book's own documentation.

## Local run

The Prompt Book loads `data/prompts.json` over fetch, so it needs a static server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080/` for the landing page or
`http://localhost:8080/pdm-prompt-book/` for the Prompt Book.
