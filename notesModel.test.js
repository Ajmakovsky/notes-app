const notesModel = require('./notesModel')

describe("notesModel Class", () => {
  it("returns an empty list", () => {
    const model = new notesModel();

    expect(model.getNotes()).toEqual([]);
  });
});
