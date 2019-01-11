// let obj = {
//   name: "Eyder"
// };

// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Eyder", "age": 18}';
// console.log(JSON.parse(personString));

const fs = require('fs');

let originalNote = {
  title: "Some title",
  body: "somebody",
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

