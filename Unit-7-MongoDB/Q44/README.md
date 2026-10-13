# Q44 — CRUD: Create and Read

Start the local MongoDB service from Q42, open this question's folder, and run:

```sh
mongosh "mongodb://127.0.0.1:27017" --file crud-create-read.mongodb.js
```

The script uses `college.students`. It seeds a separate set of ten sample
students tagged `MCFS203P-Q44` and only resets that question's tagged data
when rerun. Other question sets are preserved. Data includes Chirag Bodh.

Task: In mongosh, insert 10 student documents (name, course, city, marks) using insertOne and insertMany. Display them using find(), findOne() and find().pretty().

Read the labeled outputs in the terminal and capture the code plus each
operation's actual output. For Q44 you can also enter find() and find().pretty()
interactively. Sample marks are demonstration values only.
