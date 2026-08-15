# Juan Diego — Technical Product Book

Cleaned static export of the definitive approved Canva version.

This migration intentionally preserves the original visual composition, content,
navigation behavior, images, typography references, and existing styling.

Only Canva editor-specific remnants were removed:
- telemetry SDK
- editing SDK
- data SDK
- resizing SDK
- Canva-specific data attributes
- Canva-only utility class names

No visual redesign was applied.

## Structure

- `index.html` — current complete site and views
- `assets/css/main.css` — original exported style blocks
- `assets/css/fonts.css` — original font stylesheet
- `assets/js/app.js` — original portfolio navigation/interaction logic
- `assets/js/vendor/tailwind-runtime.js` — runtime used by the export
- `assets/js/vendor/lucide.min.js` — icon runtime
- `assets/images/` — all local image assets
- `projects/` — reserved for future project separation
- `videos/` — reserved for future videos
- `docs/` — reserved for future technical documents

## Cloudflare Pages

Static site; no framework build is required.
Use Framework preset: None.
