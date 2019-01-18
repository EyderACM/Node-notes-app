console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  } 
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body,    
  };  
  let duplicateNotes = notes.filter(note => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = (title) => {
  let noteGot = fetchNotes().filter(note => note.title === title);
  return noteGot;
}

let removeNote = (title) => {  
  let notes = fetchNotes().filter(note => (note.title !== title));
  console.log(notes);
  if(notes.length < fetchNotes().length){
    saveNotes(notes);
    console.log("Successfully deleted!");
  } else {
    console.log(`That note doesn't exist`);
  }
}

let logNote = (note) => {
  debugger;
  console.log(note);
  if(note){
    console.log("Note:", note.title, note.body);
  } else {
    console.log("That note doesn't exists");
  }
}

module.exports = { addNote, getAll, getNote, removeNote, logNote };