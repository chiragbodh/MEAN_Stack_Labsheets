# Q48 — Connect with Node.js Driver

Student: **Chirag Bodh**

Start the local MongoDB service, open Q48, then run:

```sh
npm install
npm start
```

The default connection is `mongodb://127.0.0.1:27017`; this practical uses its
own `college_lab_q48` database and `students` collection. If needed, copy
`.env.example` to `.env` and edit the connection locally. Do not commit .env.
These scripts require Node.js 22.12+; Node.js 24 LTS is the documented setup.

Task: Create a project, run npm install mongodb, connect using MongoClient, insert a document, find all documents and print them. Close the connection properly.

The script prints the inserted ID and all records, then closes the connection
in finally. Each run adds one sample record. Capture the source and real
terminal output, including Connection closed.
