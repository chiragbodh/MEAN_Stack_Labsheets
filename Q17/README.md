# Q17 — Angular CLI Commands

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q17:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

The included header, data service, SharedModule, title-case pipe and highlight
directive are wired into the app. To reproduce the generation commands, use
the separate practice workspace made in Q14, not this completed folder:
```sh
ng generate component header --standalone=false --type=component
ng generate service data --type=service
ng generate module shared
ng generate pipe shared/title-case --standalone=false --module=shared
ng generate directive shared/highlight --standalone=false --module=shared
ng build
```
In this Q17 folder, run `npm test` (equivalent to `ng test --watch=false`).
The configured Angular 20 experimental Vitest runner executes the pipe tests
in jsdom. Capture generated filenames, running component, build output and
the actual passing test output.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
