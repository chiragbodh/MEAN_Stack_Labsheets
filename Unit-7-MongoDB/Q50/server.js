// Student: Chirag Bodh — MCFS203P Q50
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

function validateStudent(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return 'A JSON object is required.';
  for (const field of ['name','course','city']) {
    if (typeof body[field] !== 'string' || !body[field].trim()) return `${field} must be a non-empty string.`;
  }
  if (typeof body.marks !== 'number' || !Number.isFinite(body.marks) || body.marks < 0 || body.marks > 100) {
    return 'marks must be a number between 0 and 100.';
  }
  return null;
}

function createApp(database) {
  const app = express();
  const students = database.collection('students');
  app.use(express.json({limit:'100kb'}));
  app.param('id', (req, res, next, id) => {
    if (!/^[a-fA-F0-9]{24}$/.test(id)) return res.status(400).json({error:'Invalid student ID.'});
    req.studentId = new ObjectId(id); next();
  });
  app.get('/api/students', async (req, res) => {
    res.json(await students.find({}).sort({name:1}).toArray());
  });
  app.get('/api/students/:id', async (req, res) => {
    const student = await students.findOne({_id:req.studentId});
    if (!student) return res.status(404).json({error:'Student not found.'});
    res.json(student);
  });
  app.post('/api/students', async (req, res) => {
    const error = validateStudent(req.body);
    if (error) return res.status(400).json({error});
    const {name,course,city,marks} = req.body;
    const student = {name:name.trim(),course:course.trim(),city:city.trim(),marks};
    const result = await students.insertOne(student);
    res.status(201).json({...student,_id:result.insertedId});
  });
  app.put('/api/students/:id', async (req, res) => {
    const error = validateStudent(req.body);
    if (error) return res.status(400).json({error});
    const {name,course,city,marks} = req.body;
    const student = await students.findOneAndUpdate({_id:req.studentId},{$set:{name:name.trim(),course:course.trim(),city:city.trim(),marks}},{returnDocument:'after'});
    if (!student) return res.status(404).json({error:'Student not found.'});
    res.json(student);
  });
  app.delete('/api/students/:id', async (req, res) => {
    const result = await students.deleteOne({_id:req.studentId});
    if (!result.deletedCount) return res.status(404).json({error:'Student not found.'});
    res.json({message:'Student deleted.',deletedCount:result.deletedCount});
  });
  app.use((req,res) => res.status(404).json({error:'Route not found.'}));
  app.use((error,req,res,next) => {
    if (error.type === 'entity.parse.failed') return res.status(400).json({error:'Invalid JSON body.'});
    if (error.type === 'entity.too.large') return res.status(413).json({error:'Request body too large.'});
    console.error(error.message);
    res.status(500).json({error:'Database or server error.'});
  });
  return app;
}

async function start() {
  const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', {serverSelectionTimeoutMS:5000});
  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME || 'college_lab_q50');
    const port = Number(process.env.PORT || 3000);
    const server = createApp(database).listen(port,'127.0.0.1',() => console.log(`Q50 API: http://127.0.0.1:${port}/api/students`));
    server.on('error', async error => { console.error(error.message); await client.close(); process.exitCode = 1; });
    let closing = false;
    const shutdown = () => {
      if (closing) return; closing = true;
      server.close(() => { client.close().then(() => process.exit(0)).catch(() => process.exit(1)); });
    };
    process.on('SIGINT',shutdown); process.on('SIGTERM',shutdown);
  } catch (error) {
    console.error('Could not start API:', error.message); await client.close(); process.exitCode = 1;
  }
}
if (require.main === module) start();
module.exports = {createApp,validateStudent};
