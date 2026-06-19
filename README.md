# KINETIC Website

Static promotional website for KINETIC / 心跃.

## Files

- `index.html`: page markup and metadata
- `styles.css`: responsive visual design
- `app.js`: language switching, download URL, and local QR rendering
- `assets/`: app icon and feature graphic

## Deploy

Upload the full `website` directory contents to the existing GAI Times static site under `/kinetic/`.

Current intended public URLs:

- Product site: `https://gaitimes.com/kinetic/`
- Privacy policy: `https://gaitimes.com/kinetic/privacy.html`
- Terms: `https://gaitimes.com/kinetic/terms.html`
- Health notice: `https://gaitimes.com/kinetic/health-data.html`
- Support: `https://gaitimes.com/kinetic/support.html`

The Android download URL is configured at the top of `app.js`:

```js
const DOWNLOAD_URL = "https://play.google.com/store/apps/details?id=com.gaitimes.heartbeat";
```

Change that value if the app uses a different final store, APK, or universal download page.
