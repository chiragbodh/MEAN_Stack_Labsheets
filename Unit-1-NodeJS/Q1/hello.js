// Student: Chirag Bodh
const name = 'Chirag Bodh';
const today = new Intl.DateTimeFormat('en-IN', {
  dateStyle: 'full', timeZone: 'Asia/Kolkata'
}).format(new Date());
console.log(`Hello! My name is ${name}.`);
console.log(`Today's date: ${today}`);
