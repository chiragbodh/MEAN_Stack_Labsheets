# Q41 — Lazy Loading with Service

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q41:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

ProductsModule is lazy-loaded and provides its own ProductService. Its routing
module uses forChild(). Navigate from /home to /products; capture the lazy JS
request followed by the public Fake Store API /products request. Internet access
and API availability are required. Run `npm run build` and capture the separate
products lazy chunk in the output and dist/lab/browser directory.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
