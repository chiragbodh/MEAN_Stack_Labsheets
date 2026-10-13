# Q43 — MongoDB Compass

1. Install Compass from https://www.mongodb.com/try/download/compass.
2. Connect to `mongodb://localhost:27017`.
3. Create database `college` and collection `students`, or open them if Q42
   already created them.
4. Use Add Data → Insert Document and insert the three objects from
   students.import.json **one by one through the GUI**, as the task asks.
   The file is input data, not proof of an export.
5. Apply filter `{"labSet":"MCFS203P-Q43","name":"Chirag Bodh"}`.
6. Edit Chirag's marks to 92 and save. Delete the sample Aman Kumar record
   with `_id` `MCFS203P-Q43-2`. Keep all other questions' records unchanged.
7. Filter `{"labSet":"MCFS203P-Q43"}` and use Compass's export action to
   export the displayed query results as JSON to `students.export.json`.

Capture the connection, initial three documents, filter, edit, deletion and
export dialog/file. The export must come from your actual Compass operation;
an invented result file is not included.
