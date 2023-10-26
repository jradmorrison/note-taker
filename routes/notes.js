const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {title, text};
        newNote.id = uuid();
        
        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.errored('Error adding note');
    }
});

// DELETE route for deleting a note
notes.delete('/:id', (req, res) => {
    
    
    readFromFile('./db/db.json').then((data) => JSON.parse(data));
    const db = data;


    // for (const note of db) {
    //     if (note.id == req.params.id) {
    //         db.splice(note);
    //     }
    // }

    // writeToFile('./db/db.json', db);

    res.json(`${req.params.id} deleted`);
})

module.exports = notes;
