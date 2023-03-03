class NotesClient {
  loadNotes = (callback, displayError) => {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch(error => {
        console.log('Error:' + error);
        displayError(error)
      });
  };

  createNote = (note, callback, displayError) => {
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
      .then((data) => callback(data))
      .catch(error => {
        console.log('Error:' + error);
        displayError(error)
      });
  };
}

module.exports = NotesClient;
