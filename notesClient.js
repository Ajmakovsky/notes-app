class NotesClient {
  loadNotes = (callback) => {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data));
  };

  createNote = (note, callback) => {
    const data = { content: note };
    // method should send a POST request to the notes backend to create a new note.
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => callback(data));
  };
}

module.exports = NotesClient;
