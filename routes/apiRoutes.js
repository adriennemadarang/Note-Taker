const router = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require('fs');

// GET request
router.get('/api/notes', async(req, res) => {
    const notes = await JSON.parse(fs.readFileSync('db/db.json'))
    res.json(note);
});

// POST request
router.post('/api/notes', (req,res) => {
    const notes = JSON.parse(fs.readFileSync('db/db.json'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    };
    notes.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;