// Student: Chirag Bodh. Only this question's tagged lab records are reset.
const college = db.getSiblingDB('college');
const students = college.getCollection('students');
const tag = 'MCFS203P-Q45';
students.deleteMany({labSet:tag});
const records = [
  {
    "_id": "MCFS203P-Q45-1",
    "name": "Chirag Bodh",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 88,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-2",
    "name": "Aman Kumar",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 78,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-3",
    "name": "Priya Sharma",
    "course": "BCA",
    "city": "Delhi",
    "marks": 91,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-4",
    "name": "Neha Verma",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 82,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-5",
    "name": "Rohan Singh",
    "course": "BCA",
    "city": "Delhi",
    "marks": 55,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-6",
    "name": "Isha Gupta",
    "course": "MCA",
    "city": "Dehradun",
    "marks": 68,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-7",
    "name": "Arjun Mehta",
    "course": "BCA",
    "city": "Jaipur",
    "marks": 74,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-8",
    "name": "Ananya Rao",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 95,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-9",
    "name": "Karan Patel",
    "course": "BCA",
    "city": "Mumbai",
    "marks": 39,
    "labSet": "MCFS203P-Q45"
  },
  {
    "_id": "MCFS203P-Q45-10",
    "name": "Meera Joshi",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 62,
    "labSet": "MCFS203P-Q45"
  }
];

students.insertMany(records);
function show(label) { print('\n' + label); students.find({labSet:tag}).sort({_id:1}).forEach(doc => printjson(doc)); }
show('Initial records');
printjson(students.updateOne({_id:tag+'-1'},{$set:{city:'Jaipur'}}));
show('After updateOne with $set');
printjson(students.updateMany({labSet:tag,course:'MCA'},{$inc:{marks:1},$set:{reviewed:true}}));
show('After updateMany with $inc and $set');
printjson(students.replaceOne({_id:tag+'-2'},{_id:tag+'-2',labSet:tag,name:'Aman Kumar',course:'MCA',city:'Jaipur',marks:85}));
show('After replaceOne');
printjson(students.deleteOne({_id:tag+'-9'}));
show('After deleteOne');
printjson(students.deleteMany({labSet:tag,marks:{$lt:60}}));
show('After deleteMany of tagged students scoring below 60');
