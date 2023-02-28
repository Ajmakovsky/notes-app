class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");

    this.showButton = document.querySelector("#add-note-button")
    this.showButton.addEventListener("click", () => {
      const newNote = document.querySelector("#add-note").value;
      this.addnewNote(newNote);
    });
  }

  displayNotes = () => {

    document.querySelectorAll('.note').forEach(element => {
    element.remove();
    });
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });

    document.querySelector('#add-note').value = ""
    // get the list of notes from the model.
    // for each note, create a new div element on the page (with an HTML class "note").
  };

  addnewNote = (newNote) => {
    // const note = document.createElement("div")
    // note.id = 'note'
    // note.innerText = document.querySelector('#add-note').value

    // this.mainContainerEl.append(note)

    this.model.addNote(newNote);
    this.displayNotes();
  };
}

module.exports = NotesView;
