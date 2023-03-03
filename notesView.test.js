/**
 * @jest-environment jsdom
 */
const fs = require("fs");
require('jest-fetch-mock').enableMocks()



const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require('./notesClient')

jest.mock("./notesClient")

describe("NotesView Class", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    model = new NotesModel();
    client = new NotesClient()
    view = new NotesView(model, client)

    NotesClient.mockClear();

  });

  it("returns the notes", () => {

    model.addNote("Buy Milk");
    model.addNote("Go to the gym");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it.skip("adds a new note and displays this on screen", () => {
    const mockClient = new NotesClient();
    view = new NotesView(model, mockClient);

    mockClient.createNote = jest.fn((note, callback) => 
    callback([note]));

    const input = document.querySelector("#add-note");
    input.value = "Walk the dog";

    const showButton = document.querySelector("#add-note-button");
    showButton.click();

    // const mockModel = new NotesModel();
    

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "Walk the dog"
    );
  });

  it("calls the display notes method twice", () => {

    model.addNote("Buy Milk");
    model.addNote("Go to the gym");
    view.displayNotes();
    view.displayNotes();


    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it('returns the notes from the API', () => {
    const mockClient = {loadNotes: (callback) => callback(['This note is coming from the server'])}

    let view = new NotesView(model, mockClient)

    view.displayNotesFromApi()

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      'This note is coming from the server'
    );

  })

  it('addsa new note and returns the notes from the API', async () => {

    // const input = document.querySelector("#add-note");
    // input.value = "Walk the dog";

    // const showButton = document.querySelector("#add-note-button");
    // showButton.click();

    const mockClient = {loadNotes: (callback) => callback(['This note is coming from the server'])}

    let view = new NotesView(model, mockClient)

    await new Promise((resolve) => {
      mockClient.loadNotes(() => {
        resolve();
      });
    });

    view.displayNotesFromApi()

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      'This note is coming from the server'
    );
  })




  it('adds a new note through an API call', (done) => {
    const mockClient = new NotesClient();
    // const mockModel = new NotesModel();
    view = new NotesView(model, mockClient);
    mockClient.createNote = jest.fn((note, callback) => 
    callback([note]));

    // mockClient.createNote.mockImplementation()

    view.addnewNote('Walk the dog')

    expect(mockClient.createNote).toHaveBeenCalledWith('Walk the dog', expect.anything(), expect.anything())
    // const pageContent = document.querySelector('div#note');
    // console.log(pageContent)
    expect(document.querySelector('div.note').textContent).toEqual('Walk the dog');
    done();
  })

  it('displays an error message', () => {
    view.displayError()

    expect(document.querySelector('div.error').textContent).toEqual("Oops, something went wrong!")
  })
});
