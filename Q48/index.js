// Student: Chirag Bodh
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
async function main() {
  try {
    await client.connect();
    const collection = client.db(process.env.DB_NAME || 'college_lab_q48').collection('students');
    const result = await collection.insertOne({name:'Chirag Bodh',course:'MCA',city:'Saharanpur',marks:88});
    console.log('Inserted student ID:', result.insertedId.toHexString());
    console.log('All students:');
    console.table(await collection.find({}).toArray());
  } catch (error) {
    console.error('MongoDB operation failed:', error.message);
    process.exitCode = 1;
  } finally {
    await client.close();
    console.log('Connection closed.');
  }
}
main();
