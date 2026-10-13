# Q35 — Share a Service in Multiple Components

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q35:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

Add an item in ProductComponent and observe CartComponent update immediately.
Then clear the cart. Both inject the same root-provided CartService; the async
pipe observes its BehaviorSubject. Capture both components together.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
