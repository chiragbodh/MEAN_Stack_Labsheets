# Q46 — Query Operators

Start the local MongoDB service from Q42, open this question's folder, and run:

```sh
mongosh "mongodb://127.0.0.1:27017" --file query-operators.mongodb.js
```

The script uses `college.students`. It seeds a separate set of ten sample
students tagged `MCFS203P-Q46` and only resets that question's tagged data
when rerun. Other question sets are preserved. Data includes Chirag Bodh.

Task: Query the collection using $gt, $lt, $in, $and, $or, $regex, sort(), limit(), skip() and projection. Example: students from Jaipur with marks above 70, sorted by name.

Read the labeled outputs in the terminal and capture the code plus each
operation's actual output. For Q44 you can also enter find() and find().pretty()
interactively. Sample marks are demonstration values only.
