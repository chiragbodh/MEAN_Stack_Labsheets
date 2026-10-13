// Student: Chirag Bodh
const { MongoClient } = require('mongodb');
async function createStudent(collection, student) {
  return collection.insertOne(student);
}
async function readStudents(collection) {
  return collection.find({}).toArray();
}
async function updateStudent(collection, id, changes) {
  return collection.updateOne({_id:id}, {$set:changes});
}
async function deleteStudent(collection, id) {
  return collection.deleteOne({_id:id});
}
async function main() {
  const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', {serverSelectionTimeoutMS:5000});
  try {
    await client.connect();
    const students = client.db(process.env.DB_NAME || 'college_lab_q49').collection('students');
    const created = await createStudent(students, {name:'Chirag Bodh',course:'MCA',city:'Saharanpur',marks:80});
    console.log('CREATE:', created);
    console.log('READ:'); console.table(await readStudents(students));
    console.log('UPDATE:', await updateStudent(students, created.insertedId, {marks:92}));
    console.table(await readStudents(students));
    console.log('DELETE:', await deleteStudent(students, created.insertedId));
    console.log('AFTER DELETE:'); console.table(await readStudents(students));
  } catch (error) {
    console.error('CRUD failed:', error.message); process.exitCode = 1;
  } finally {
    await client.close(); console.log('Connection closed.');
  }
}
if (require.main === module) main();
module.exports = {createStudent,readStudents,updateStudent,deleteStudent};
