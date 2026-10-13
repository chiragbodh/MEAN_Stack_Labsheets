# Q18 — Component with Inline Template and Style

Student: **Chirag Bodh** · Course: **MCA** · Subject: **MCFS203P**

## Run this prepared project

Install Node.js 24 LTS, then open a terminal in Q18:

```sh
npm install
npm start
```

Open http://localhost:4200. Run one Angular question at a time; stop with Ctrl+C
before starting another, or use `npm start -- --port 4201`.

To verify compilation, run `npm run build`. The output is in `dist/lab/browser`.
Each question is a separate Angular workspace with its own configuration.

## Required practical and proof

The ProfileComponent keeps both its template and styles in profile.component.ts.
Generation command for a separate practice project:
```sh
ng g c profile --inline-template --inline-style --standalone=false --type=component
```
public/profile.svg is a sample avatar. For the requested personal-photo output,
add your own profile.jpg to public and change the img src in the inline template.
Capture the .ts file showing template/styles together and the profile card.

Save genuine code and output screenshots in `screenshots/` in this question's
folder. Running-output screenshots are not supplied as if taken on your computer.
