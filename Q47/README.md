# Q47 — Aggregate Functions

Start the local MongoDB service from Q42, open this question's folder, and run:

```sh
mongosh "mongodb://127.0.0.1:27017" --file aggregation.mongodb.js
```

The script uses `college.students`. It seeds a separate set of ten sample
students tagged `MCFS203P-Q47` and only resets that question's tagged data
when rerun. Other question sets are preserved. Data includes Chirag Bodh.

Task: Use the aggregation pipeline ($match, $group, $sum, $avg, $sort, $project) to find the average marks per course, the number of students per city and the top 3 scorers.

Read the labeled outputs in the terminal and capture the code plus each
operation's actual output. For Q44 you can also enter find() and find().pretty()
interactively. Sample marks are demonstration values only.
