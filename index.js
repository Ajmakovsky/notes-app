const notesModel = require("./notesModel")
const notesView = require("./notesView")
const notesClient = require("./notesClient")


console.log("The notes app is running")

const noteModel = new notesModel()
const noteClient = new notesClient()
const noteView = new notesView(noteModel, noteClient)

noteClient.loadNotes((notes) => {
  // This will be executed if notes are loaded correctly from the server
  noteModel.setNotes(notes);
  noteView.displayNotes();
}, () => {
  // This will be executed if there's an error
  noteView.displayError();
});

// noteModel.addNote('Buy Milk')
// noteModel.addNote('Go to the gym')


// noteView.displayNotes()

// console.log(noteModel.getNotes())