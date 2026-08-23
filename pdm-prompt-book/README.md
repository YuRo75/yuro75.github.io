# Frontier PDM Prompt Book

Static prompt library for the Frontier PDM team.

## Innovations added

- Filter presets (save/apply/delete locally)
- Random prompt picker
- Export filtered prompts as JSON or CSV
- Compare mode (select 2 prompts and view side-by-side)
- Recent prompts list
- Dynamic tag cloud
- Usage insights panel
- Related prompt suggestions in the details dialog
- Command palette (`Ctrl/Cmd+K`)
- Persistent sort preference

## Project structure

- `index.html`: app shell + dialogs + accessibility markup
- `assets/styles.css`: UI styling
- `assets/app.js`: app logic (search/filter/sort/dialog flows)
- `assets/cp-controls.css` and `assets/cp-controls.js`: universal controls
- `assets/bootstrap-theme.js`: initial light/dark theme bootstrap
- `assets/pb-config.js`: environment-level config (mail bridge + recipient)
- `data/prompts.json`: prompt catalog data

## Local run

Serve the repo as static files (required for loading `data/prompts.json`):

```powershell
python -m http.server 8080
```

Then open: `http://localhost:8080`.

## Data format (`data/prompts.json`)

Each entry is an object with fields used by the UI, including:
`slug`, `title`, `agent`, `prompt`, `tags`, `variables`, `created`, `lastUsed`, `rating`, `usage`, `sortDate`, `multi`.

## Configuration

Edit `assets/pb-config.js` for environment-specific values:

- `mail.to`
- `mail.bridgeUrl`
- `mail.healthUrl`
- `mail.requestTimeoutMs` (1s–30s)
- `mail.enabled`

Use `assets/pb-config.example.js` as reference.

## Quality automation

- HTML linting
- Formatting checks
- JSON schema validation for prompt data
- Duplicate slug/title checks
- Link checks in CI
- Cross-browser smoke tests (Chromium, Firefox, WebKit) in CI

Run locally:

```powershell
npm ci
npm run lint
npm run smoke:e2e
```
