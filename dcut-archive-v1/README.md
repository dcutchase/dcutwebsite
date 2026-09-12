# DCUT Archive Website

A no-build static website designed for direct GitHub -> Vercel deployment.

## Deploy to Vercel
1. Upload every file in this folder to the root of your GitHub repository.
2. In Vercel, import the repository.
3. Framework preset: **Other** (or leave auto-detect).
4. Build Command: leave blank.
5. Output Directory: leave blank.
6. Deploy.

There is no Node/Next build step and no `public` output folder requirement.

## Customize
Open `site-data.js`.

Each project supports:
- `title`
- `subtitle`
- `year`
- `type`
- `source`
- `href`
- `image`

### Add real media
You can either:
- upload images into this repo (example: `media/lord-dandre.jpg`) and set `image: "media/lord-dandre.jpg"`, or
- use a direct hosted image URL.

The pixel/16-bit interface stays stylized; media images are rendered clean and full-resolution.

## Main social links already included
- Instagram: @dcut.chase
- YouTube: @dcut.mp4
- Website: dcut.website
