const notesModel = require('./notesModel')

describe("notesModel Class", () => {
  it("returns an empty list", () => {
    const model = new notesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it("adds a note and returns the notes list", () => {
    const model = new notesModel();
    model.addNote('Buy Milk')
    expect(model.getNotes()).toEqual(['Buy Milk']);
  });

  it("adds 2 notes and returns the notes list", () => {
    const model = new notesModel();
    model.addNote('Buy Milk')
    model.addNote('Go to the gym')
    expect(model.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);
  });

  it("resets theh list and returns an empty list", () => {
    const model = new notesModel();
    model.addNote('Buy Milk')
    model.addNote('Go to the gym')
    expect(model.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);

    model.reset()
    expect(model.getNotes()).toEqual([]);
  });
});
