const express = require('express');
const router = express.Router();
const Note = require('../models/note');

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

router.delete('/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id)
        .then(() => res.json('Note deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
