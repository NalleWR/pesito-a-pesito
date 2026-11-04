# Pesito a Pesito — v1.0 working foundation

A personal, phone-first finance progressive web app built for GitHub Pages. No accounts, servers, bank logins, analytics, or third-party libraries.

## What works
- First-run setup: create your own accounts or explore fictional sample balances.
- Mi Cartera: available money, debt, savings/retirement, net worth, expandable groups, hide balances.
- Account ledger: current balance, previous months, monthly money in/out/net change, real empty-month Add button.
- Expense, Income, Refund, and linked Transfer entries with integer-cent arithmetic, edit/delete and undo for delete.
- Compra Rápida: save multiple expenses together, per-purchase account/date, skip blank rows, reject partial rows.
- Smart Search: search all accounts, filter by account/type/category/date and sort.
- Settings: edit/archive accounts, set default spending account, edit/add/delete categories, backup/restore JSON, clear test data.
- App icons, manifest, offline shell caching, network-first updates.

## Important limitations
- Browser localStorage is not encrypted. Anyone who can access the same browser profile may see records. Use a screen lock and keep JSON backups private.
- No cloud sync. Each browser/device has its own separate records; reinstalling or clearing site data can erase them.
- No bank connections, receipt attachments, scheduled future bills, or automatic recurring transactions.
- Some previously planned fine details (inline edit within ledger, native calendar override in Compra Rápida, full duplicate detection, detailed account balance adjustments, richer category icon picker) are not implemented yet.
- This version was tested using a headless Chromium DOM harness for account balances, expenses, transfers, batch purchases, editing and search. It has NOT been verified on the user's Samsung; test with sample data before entering real information.

## GitHub Pages deployment
Upload all files in this folder to the ROOT of the `main` branch of your existing repository. Keep Pages deployed from `main / (root)`. The `index.html` includes versioned CSS and JS links and the service worker uses network-first updates. If the previous service worker is caching an old page, open the URL once with `?build=100` appended; this bypasses the old cached root URL. Wait for deployment to finish and refresh once more. Do not clear browser storage to force updates.

## Security
The GitHub Pages website is public; data is stored only in the user's browser localStorage. This is not a secure vault and no end-to-end encryption is provided. Never put passwords or personal financial records into the repository.


## v1.2 Rosita Elegante update
- Two bottom navigation destinations: Mi Cartera and Settings.
- Smart Search is available inside Settings.
- Added antique-gold floral accents to dashboard.
- Full installation name set in manifest; Android may still truncate its label.
- Preserves existing local data key and transaction behavior.
