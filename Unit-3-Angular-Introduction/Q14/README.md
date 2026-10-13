# Q14 — Install Angular CLI and Create a Project

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q14:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

To reproduce CLI installation and generation, use a separate empty directory:
```sh
npm install -g @angular/cli@20.3.0
ng version
ng new myapp --standalone=false --routing --style=css --file-name-style-guide=2016
cd myapp
ng serve --open
```
Choose no server-side rendering when prompted. The supplied Q14 project is
already generated and runnable. Capture the CLI version, generation output,
dev-server output and browser. Do not regenerate over the supplied folder.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
