const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET request
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    res.json(dbJson);
});

// POST request
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(v4)
    };
    dbJson.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;