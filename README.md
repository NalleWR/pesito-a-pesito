# Pesito a Pesito — v0.1 starter

A personal, offline-capable expense tracker prototype. This is **not** a production-ready financial vault.

## Included
- Mi Cartera dashboard, account groups, local accounts, expenses and income
- Fictional sample data (no real user financial information)
- Local browser storage, JSON export and restore
- Basic offline cache after first successful load

## Not yet included
- The approved mascot artwork and icon (replace when assets are available)
- Transfers, refunds, Compra Rápida, Smart Search, editable transactions, encryption, biometric lock
- Robust backup validation and migration, account editing, signed builds

## Run locally
Serve the folder over localhost (for example, `python -m http.server 8000`) and open `http://localhost:8000`. Service workers require localhost or HTTPS.

## Security
Never commit real financial data or exported backups to GitHub. This app uses `localStorage`, which is not encrypted. A publicly hosted site is accessible by anyone who knows the URL, even if the source repository is private. Don't enter sensitive financial records until deployment and storage protections are reviewed. Export backups regularly and protect exported files.
