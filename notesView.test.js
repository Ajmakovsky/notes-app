/**
 * @jest-environment jsdom
 */
const fs = require("fs");

const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

describe("NotesView Class", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("returns the notes", () => {
    const model = new NotesModel();

    const view = new NotesView(model);

    model.addNote("Buy Milk");
    model.addNote("Go to the gym");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("adds a new note and displays this on screen", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();

    const view = new NotesView(model);

    const input = document.querySelector("#add-note");
    input.value = "Walk the dog";

    const showButton = document.querySelector("#add-note-button");
    showButton.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "Walk the dog"
    );
  });

  it("calls the display notes method twice", () => {
    const model = new NotesModel();

    const view = new NotesView(model);

    model.addNote("Buy Milk");
    model.addNote("Go to the gym");
    view.displayNotes();
    view.displayNotes();


    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});
