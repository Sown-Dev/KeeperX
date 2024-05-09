const express = require('express');
const router = express.Router();
const Note = require('../models/Note'); // Adjust the path as needed to where your Note model is defined

// Endpoint to retrieve all notes
router.get('/', (req, res) => {
  Note.find()
    .then(notes => res.json(notes)) // Sends all notes as JSON
    .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint to add a new note
router.post('/add', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });

  newNote.save()
    .then(() => res.json('Note added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
