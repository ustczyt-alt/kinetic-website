# KINETIC Website

Static promotional website and policy pages for KINETIC.

## Files

- `index.html`: page markup and metadata
- `styles.css`: responsive visual design
- `app.js`: language switching, download URL, and local download card rendering
- `assets/`: app icon and feature graphic

## Deploy

Publish the full `website` directory contents to GitHub Pages from the repository root.

Current intended public URLs:

- Product site: `https://ustczyt-alt.github.io/kinetic-website/`
- Privacy policy: `https://ustczyt-alt.github.io/kinetic-website/privacy.html`
- Terms: `https://ustczyt-alt.github.io/kinetic-website/terms.html`
- Health notice: `https://ustczyt-alt.github.io/kinetic-website/health-data.html`
- Support: `https://ustczyt-alt.github.io/kinetic-website/support.html`

The Android download URL is configured at the top of `app.js`:

```js
const DOWNLOAD_URL = "https://play.google.com/store/apps/details?id=com.gaitimes.heartbeat";
```

Change that value if the app uses a different final store, APK, or universal download page.
