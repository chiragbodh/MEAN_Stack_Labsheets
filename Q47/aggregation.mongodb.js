// Student: Chirag Bodh. Only this question's tagged lab records are reset.
const college = db.getSiblingDB('college');
const students = college.getCollection('students');
const tag = 'MCFS203P-Q47';
students.deleteMany({labSet:tag});
const records = [
  {
    "_id": "MCFS203P-Q47-1",
    "name": "Chirag Bodh",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 88,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-2",
    "name": "Aman Kumar",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 78,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-3",
    "name": "Priya Sharma",
    "course": "BCA",
    "city": "Delhi",
    "marks": 91,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-4",
    "name": "Neha Verma",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 82,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-5",
    "name": "Rohan Singh",
    "course": "BCA",
    "city": "Delhi",
    "marks": 55,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-6",
    "name": "Isha Gupta",
    "course": "MCA",
    "city": "Dehradun",
    "marks": 68,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-7",
    "name": "Arjun Mehta",
    "course": "BCA",
    "city": "Jaipur",
    "marks": 74,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-8",
    "name": "Ananya Rao",
    "course": "MCA",
    "city": "Saharanpur",
    "marks": 95,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-9",
    "name": "Karan Patel",
    "course": "BCA",
    "city": "Mumbai",
    "marks": 39,
    "labSet": "MCFS203P-Q47"
  },
  {
    "_id": "MCFS203P-Q47-10",
    "name": "Meera Joshi",
    "course": "MCA",
    "city": "Jaipur",
    "marks": 62,
    "labSet": "MCFS203P-Q47"
  }
];

students.insertMany(records);
function show(label, pipeline) { print('\n' + label); students.aggregate(pipeline).forEach(doc => printjson(doc)); }
show('Average marks per course',[
 {$match:{labSet:tag}},
 {$group:{_id:'$course',averageMarks:{$avg:'$marks'},studentCount:{$sum:1}}},
 {$sort:{_id:1}},
 {$project:{_id:0,course:'$_id',averageMarks:1,studentCount:1}}
]);
show('Number of students per city',[
 {$match:{labSet:tag}},{$group:{_id:'$city',count:{$sum:1}}},
 {$sort:{count:-1,_id:1}},{$project:{_id:0,city:'$_id',count:1}}
]);
show('Top three scorers',[
 {$match:{labSet:tag}},{$sort:{marks:-1,name:1}},{$limit:3},
 {$project:{_id:0,name:1,course:1,marks:1}}
]);
