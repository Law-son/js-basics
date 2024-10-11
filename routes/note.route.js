const router = require('express').Router();

const noteController = require('../controllers/note.controller');

router.get('/notes', noteController.getNotes);
router.post('/notes', noteController.createNote);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;

//todo: https://notes.app.codegym.com/notes/25