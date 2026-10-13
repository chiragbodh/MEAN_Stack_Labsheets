# Q31 — Routing Module

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q31:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

The admin feature has its own AdminRoutingModule with RouterModule.forChild().
AppModule imports AdminModule. This example is eagerly loaded; Q40 demonstrates
lazy loading. In a separate practice workspace, run `ng g m admin --routing`.
Capture the feature routing module, AppModule and /admin.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
