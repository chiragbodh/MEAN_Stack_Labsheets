// Run: mongosh "mongodb://127.0.0.1:27017" --file setup.mongodb.js
const college = db.getSiblingDB('college');
print('MongoDB version: ' + db.version());
print('Databases:');
printjson(db.adminCommand({listDatabases:1}).databases);
if (!college.getCollectionNames().includes('students')) {
  printjson(college.createCollection('students'));
}
print('Collections in college:');
printjson(college.getCollectionNames());
