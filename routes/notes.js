const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {title, text};

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.errored('Error adding note')
    }
});

// DELETE route for deleting a note
notes.delete('/', (req, res) => {
    console.log('note deleted');
})

module.exports = notes;
