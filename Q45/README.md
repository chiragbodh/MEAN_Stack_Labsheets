# Q45 — CRUD: Update and Delete

Start the local MongoDB service from Q42, open this question's folder, and run:

```sh
mongosh "mongodb://127.0.0.1:27017" --file crud-update-delete.mongodb.js
```

The script uses `college.students`. It seeds a separate set of ten sample
students tagged `MCFS203P-Q45` and only resets that question's tagged data
when rerun. Other question sets are preserved. Data includes Chirag Bodh.

Task: Use updateOne, updateMany ($set, $inc), replaceOne, deleteOne and deleteMany on the students collection. Show the collection after each operation.

Read the labeled outputs in the terminal and capture the code plus each
operation's actual output. For Q44 you can also enter find() and find().pretty()
interactively. Sample marks are demonstration values only.
