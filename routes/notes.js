const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
// Todo:

module.exports = notes;

