const router = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require('fs');

router.get('/api/notes', async(req, res) => {
    const note = await JSON.parse(fs.readFileSync('db/db.json'))
    res.json(note);
});

