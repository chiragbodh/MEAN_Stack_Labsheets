# Q50 — CRUD REST API with Express and MongoDB

Student: **Chirag Bodh**

Start the local MongoDB service, open Q50, then run:

```sh
npm install
npm start
```

The default connection is `mongodb://127.0.0.1:27017`; this practical uses its
own `college_lab_q50` database and `students` collection. If needed, copy
`.env.example` to `.env` and edit the connection locally. Do not commit .env.
These scripts require Node.js 22.12+; Node.js 24 LTS is the documented setup.

Task: Create an Express server with GET /api/students, GET /api/students/:id, POST, PUT and DELETE routes connected to MongoDB. Test every endpoint in Postman and attach screenshots.

Stop Q7 first if it is using port 3000. This lab API listens on localhost only.

Import `MCFS203P-Q50.postman_collection.json` in the Postman desktop app. Run
requests in numbered order. The POST test automatically saves studentId for
GET, PUT and DELETE. baseUrl defaults to http://127.0.0.1:3000.

| Action | Method and path | Expected status |
|---|---|---|
| Create | POST /api/students | 201 |
| List | GET /api/students | 200 |
| Find one | GET /api/students/:id | 200 |
| Update | PUT /api/students/:id | 200 |
| Delete | DELETE /api/students/:id | 200 |
| Get deleted record | GET /api/students/:id | 404 |
| Invalid ID or marks | GET or POST test requests | 400 |

POST and PUT require a JSON body with name, course, city and numeric marks
between 0 and 100. Sample request bodies are already in the collection.
Capture every endpoint's method, URL, JSON body when applicable, response and
status in Postman. Also capture the source and running server terminal.
