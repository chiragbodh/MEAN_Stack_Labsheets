# Q40 — Implement Lazy Loading

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q40:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

Open DevTools Network, disable cache and reload /home. Filter for JS and clear
the log. Click Admin, then Customer and capture each newly fetched lazy bundle.
Run `npm run build`; the output lists separate admin and customer lazy chunks.
Neither feature module is statically imported in AppModule.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
