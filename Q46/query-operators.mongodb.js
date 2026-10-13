// Student: Chirag Bodh. Only this question's tagged lab records are reset.
const college = db.getSiblingDB('college');
const students = college.getCollection('students');
const tag = 'MCFS203P-Q46';
students.deleteMany({labSet:tag});
const records = [
  {
    "_id": "MCFS203P-Q46-1",
    "name": "Chirag Bodh",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 88,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-2",
    "name": "Aman Kumar",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 78,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-3",
    "name": "Priya Sharma",
    "course": "BCA",
    "city": "Delhi",
    "marks": 91,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-4",
    "name": "Neha Verma",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 82,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-5",
    "name": "Rohan Singh",
    "course": "BCA",
    "city": "Delhi",
    "marks": 55,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-6",
    "name": "Isha Gupta",
    "course": "MCA",
    "city": "Dehradun",
    "marks": 68,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-7",
    "name": "Arjun Mehta",
    "course": "BCA",
    "city": "Jaipur",
    "marks": 74,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-8",
    "name": "Ananya Rao",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 95,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-9",
    "name": "Karan Patel",
    "course": "BCA",
    "city": "Mumbai",
    "marks": 39,
    "labSet": "MCFS203P-Q46"
  },
  {
    "_id": "MCFS203P-Q46-10",
    "name": "Meera Joshi",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 62,
    "labSet": "MCFS203P-Q46"
  }
];

students.insertMany(records);
function show(label, cursor) { print('\n' + label); cursor.forEach(doc => printjson(doc)); }
show('$gt',students.find({labSet:tag,marks:{$gt:70}}));
show('$lt',students.find({labSet:tag,marks:{$lt:60}}));
show('$in',students.find({labSet:tag,city:{$in:['Jaipur','Delhi']}}));
show('$and: Jaipur and marks above 70',students.find({$and:[{labSet:tag},{city:'Jaipur'},{marks:{$gt:70}}]}).sort({name:1}));
show('$or',students.find({labSet:tag,$or:[{city:'Delhi'},{marks:{$gt:90}}]}));
show('$regex: names beginning with A',students.find({labSet:tag,name:{$regex:'^A',$options:'i'}}));
show('sort and limit: top three',students.find({labSet:tag}).sort({marks:-1,name:1}).limit(3));
show('skip and limit: second page of three',students.find({labSet:tag}).sort({name:1}).skip(3).limit(3));
show('projection',students.find({labSet:tag},{_id:0,name:1,marks:1}));
