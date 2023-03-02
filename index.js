const notesModel = require("./notesModel")
const notesView = require("./notesView")
const notesClient = require("./notesClient")


console.log("The notes app is running")

const noteModel = new notesModel()
const noteClient = new notesClient()
const noteView = new notesView(noteModel, noteClient)


// noteModel.addNote('Buy Milk')
// noteModel.addNote('Go to the gym')


// noteView.displayNotes()

// console.log(noteModel.getNotes())