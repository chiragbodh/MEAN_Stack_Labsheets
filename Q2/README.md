# Q2 — Node CLI and NPM setup

The complete project is in `node-lab/`.

```sh
cd node-lab
npm install
npm start
npm run dev
```

While `npm run dev` is running, change the last message in `index.js` and save.
Nodemon should print `restarting due to changes` and run the new message.
Stop it with Ctrl+C.

To reproduce the initial setup in a separate empty practice folder:

```sh
mkdir node-lab
cd node-lab
npm init -y
npm install lodash
npm install --save-dev nodemon
```

Add `"start": "node index.js"` and `"dev": "nodemon index.js"` under
`scripts` in package.json, using the included file as the example.

**Proof to capture:** package.json, program, and the live terminal before and
after saving the edit. Dependency folders are recreated by npm install.
