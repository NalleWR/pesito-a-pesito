# Pesito a Pesito v0.2 🐷

A personal, browser-local budgeting prototype with a proper installable PWA shell.

## Install on Samsung
Upload the **contents** of this folder to the root of the existing GitHub repository (replace matching files). Wait for GitHub Pages deployment, refresh the website, then remove the old home-screen shortcut / installed entry and install the refreshed app from Chrome. If the old app remains installed, uninstall that entry first.

## Important
- This release uses the **same** `pesito-a-pesito-v01` localStorage key as v0.1, so existing browser records are not deliberately reset.
- Export a backup before installing or uninstalling. Browser/installed PWA storage can be affected by uninstalling, clearing data, or changing browser contexts.
- Data is **not encrypted**. Do not enter sensitive financial information until storage, backup, and security have been tested.
- The GitHub Pages website and public repository are publicly accessible. No bank credentials or private information belong in this repo.
- v0.2 adds branding, app icons, standalone manifest, offline shell, and a simple account ledger. More advanced approved features are not implemented yet.
