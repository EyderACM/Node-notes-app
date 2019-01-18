console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const arvg = yargs.argv;
let command = arvg._[0];
console.log('Command: ', command);
console.log('Yargs' , arvg);

if (command === 'add') {
  let note = notes.addNote(arvg.title, arvg.body);
  if(note){
    console.log("Note created", note.title, note.body);
  } else {
    console.log("That note already exists");
  }
} else if (command === 'list') {
  let myNotes = notes.getAll();
  myNotes.forEach(note => {
    console.log(`Note title: ${note.title} Note body: ${note.body}`);
  });
} else if (command === 'read'){  
  let noteRead = notes.getNote(arvg.title);
  console.log(noteRead);
  debugger;
  notes.logNote(noteRead[0]);
} else if (command === 'remove') {
  notes.removeNote(arvg.title);
} else {
  console.log('Invalid command');
}