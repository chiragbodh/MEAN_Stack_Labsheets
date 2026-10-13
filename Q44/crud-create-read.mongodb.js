// Student: Chirag Bodh. Only this question's tagged lab records are reset.
const college = db.getSiblingDB('college');
const students = college.getCollection('students');
const tag = 'MCFS203P-Q44';
students.deleteMany({labSet:tag});
const records = [
  {
    "_id": "MCFS203P-Q44-1",
    "name": "Chirag Bodh",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 88,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-2",
    "name": "Aman Kumar",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 78,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-3",
    "name": "Priya Sharma",
    "course": "BCA",
    "city": "Delhi",
    "marks": 91,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-4",
    "name": "Neha Verma",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 82,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-5",
    "name": "Rohan Singh",
    "course": "BCA",
    "city": "Delhi",
    "marks": 55,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-6",
    "name": "Isha Gupta",
    "course": "MCA",
    "city": "Dehradun",
    "marks": 68,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-7",
    "name": "Arjun Mehta",
    "course": "BCA",
    "city": "Jaipur",
    "marks": 74,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-8",
    "name": "Ananya Rao",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 95,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-9",
    "name": "Karan Patel",
    "course": "BCA",
    "city": "Mumbai",
    "marks": 39,
    "labSet": "MCFS203P-Q44"
  },
  {
    "_id": "MCFS203P-Q44-10",
    "name": "Meera Joshi",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 62,
    "labSet": "MCFS203P-Q44"
  }
];

print('insertOne result:'); printjson(students.insertOne(records[0]));
print('insertMany result:'); printjson(students.insertMany(records.slice(1)));
print('find():'); students.find({labSet:tag}).forEach(doc => printjson(doc));
print('findOne():'); printjson(students.findOne({labSet:tag,name:'Chirag Bodh'}));
print('find().pretty():'); students.find({labSet:tag}).pretty().forEach(doc => printjson(doc));
print('Tagged record count: ' + students.countDocuments({labSet:tag}));
