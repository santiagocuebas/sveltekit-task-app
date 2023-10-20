# Notes App with Nodejs and Mysql
Notes App is a Multi Page Application using Nodejs and Mysql.

## Installation
```
git clone https://github.com/santiagocuebas/sveltekit-task-app
cd svelte-links
cd backend
pnpm install
npm start
cd frontend
pnpm install
npm start
```

## Environment Variables
### Client
- `PORT`, the http client port, default is `3000`.
- `PUBLIC_DIR`, the http server port.
- `SECRET`, secret JWT key.
### Server
- `PORT`, the http server port, default is `4200`.
- `DB_HOST`, the MySQL database host.
- `DB_PORT`, the MySQL database port.
- `DB_USER`, the MySQL database username.
- `DB_PASS`, the MySQL database password.
- `DB_DATABASE`, the MySQL database.
- `SECRET`, secret JWT key.
- `ORIGIN`, the http client port.

## Tools
- Node.js
- Express
- MySQL
- TypeScript
- SvelteKit
