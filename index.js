const notesModel = require("./notesModel")
const notesView = require("./notesView")


console.log("The notes app is running")

const noteModel = new notesModel
const noteView = new notesView(noteModel)


// noteModel.addNote('Buy Milk')
// noteModel.addNote('Go to the gym')


// noteView.displayNotes()

// console.log(noteModel.getNotes())