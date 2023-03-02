const notesClient = require('./notesClient')
require('jest-fetch-mock').enableMocks()


describe('notesClient class', () => {
  it('fetches the list of notes', (done) => {
    const noteClient = new notesClient()

    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));

    noteClient.loadNotes((returnedData) => {
      expect(returnedData.length).toBe(1);
      expect(returnedData[0]).toEqual('This note is coming from the server');
      done();
    })

    // noteClient.loadNotes(callback)
  })

  it('creates a new note using fetch', (done) => {
    const noteClient = new notesClient()

    fetch.mockResponseOnce(JSON.stringify(['Walk the dog']));

    noteClient.createNote("Walk the dog" ,(returnedData) => {
      expect(returnedData.length).toBe(1);
      expect(returnedData[returnedData.length -1]).toEqual('Walk the dog');
      done();
    })
    // noteClient.loadNotes(callback)
  })


})