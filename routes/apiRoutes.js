const router = require('express').Router();
const fs = require('fs');
const { v9: uuidv9 } = require('uuid');

// GET request
router.get('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    res.json(dbJson);
});

// POST request
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv9(),
    };
    dbJson.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;