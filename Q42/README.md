# Q42 — Install MongoDB and use mongosh

Student: **Chirag Bodh**

1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community.
   On Windows, run its MSI and choose installation as a Windows service.
2. Install MongoDB Shell separately from https://www.mongodb.com/try/download/shell.
3. Start MongoDB from Windows Services if it is not already running. Open a new
   terminal and run `mongosh "mongodb://127.0.0.1:27017"`.
4. Enter the interactive commands in commands.txt. Use the `college` database.
   If `students` already exists, skip the collection-creation command.

The equivalent repeatable JavaScript is in setup.mongodb.js:

```sh
mongosh "mongodb://127.0.0.1:27017" --file setup.mongodb.js
```

Capture the installed MongoDB service, shell connection, show dbs, use college,
collection creation and db.version(). Installation and service status must be
verified on the machine where you actually perform the assignment.
