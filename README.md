# San Andreas Aviation Website

Static website scaffolded with **Eleventy** (11ty).

## Quick start

```powershell
npm install
npm run dev
```

Then open the local URL Eleventy prints (usually `http://localhost:8080`).

## Editing text

Edit the page files in `src/`:

- `src/index.md` (Home)
- `src/about-us/index.md`
- `src/application/index.md`
- `src/chain-of-command/index.md`
- `src/structures/index.md`
- `src/structures/plane-structure/index.md`
- `src/structures/uniform-structure/index.md`
- `src/saaf/index.md`

## Adding / changing photos

1. Put images in `src/assets/images/`
2. Reference them in Markdown like:

```md
![Alt text](/assets/images/your-photo.png)
```

## Navigation (tabs / sub-tabs)

Edit `src/_data/site.json` → `nav`.

## Build for hosting

```powershell
npm run build
```

Deploy the `dist/` folder to your host (GitHub Pages, Netlify, etc.).

