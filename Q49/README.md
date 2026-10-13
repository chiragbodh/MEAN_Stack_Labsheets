# Q49 — CRUD with Node.js

Student: **Chirag Bodh**

Start the local MongoDB service, open Q49, then run:

```sh
npm install
npm start
```

The default connection is `mongodb://127.0.0.1:27017`; this practical uses its
own `college_lab_q49` database and `students` collection. If needed, copy
`.env.example` to `.env` and edit the connection locally. Do not commit .env.
These scripts require Node.js 22.12+; Node.js 24 LTS is the documented setup.

Task: Write a Node.js script with separate functions for create, read, update and delete on the students collection, using async/await and try/catch. Call each function and print the result.

The script calls separate create, read, update and delete functions. It updates
and deletes only the document it just created. Capture all four results and
the final read. The connection closes even when an operation fails.
