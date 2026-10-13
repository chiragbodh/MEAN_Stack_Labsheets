# Q20 — Create and Use a Module

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q20:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

ProductsModule declares and exports ProductListComponent and imports CommonModule.
AppModule imports ProductsModule; the home template uses app-product-list.
In a separate practice project: `ng g m products`, then
`ng g c products/product-list --standalone=false --module=products --type=component`.
Capture both modules and the visible product list.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
