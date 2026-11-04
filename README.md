# Pesito a Pesito — v0.3

A personal-use, offline-capable financial tracking web app. Built for GitHub Pages. The source repository and site are public; financial data is stored locally in the browser, not sent to GitHub.

## What is in this build
- Compact Rosita Elegante Mi Cartera dashboard, grouped collapsible accounts, balance privacy switch, and net worth details.
- Individual account ledgers, month navigation, summary, editable and deletable expenses/income/refunds, notes and categories, plus linked transfers.
- Four transaction types, automatic-cents keypad, autocomplete descriptions, default spending account, optional categories/notes.
- Compra Rápida multi-purchase entry, Smart Search with sorting and filters.
- Settings: account management/archive, editable categories, export and restore JSON backups.
- Original piggy home-screen icon and detective illustration; standalone PWA with offline cache.

## Important limitations
- This is a substantial prototype, **not a production-grade financial app**. No encryption or sign-in. Use fictional data until testing and a verified backup/restore workflow are complete.
- Data is browser-local, separated by browser profile and origin, not user accounts. Clearing site data or uninstalling can delete records. Backup files contain readable financial data.
- Features still needing refinement: seamless in-place transaction editing, per-type form draft retention, rich category picker, batch per-row date picker, sophisticated duplicate detection, guaranteed offline install behavior on every Android device, and full automated regression testing.
- Existing `pesito-a-pesito-v01` localStorage key is preserved to retain previous data. Back up before replacing files. Service-worker cache version is updated.

## Deploy
Upload the files **inside** this folder to the repository root, replacing matching files. Verify GitHub Pages deployment, then reload the installed app. Avoid uninstalling before making a backup.
