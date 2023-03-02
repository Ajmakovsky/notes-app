class notesModel {
  constructor() {
    this.notes = []
  }

  getNotes = () => {
    return this.notes
  }

  addNote = (newNote) => {
    this.notes.push(newNote)
  }

  reset = () => {
    this.notes = []
  }

  setNotes = (notes) => {
    this.notes = notes;
  }
}

module.exports = notesModel;