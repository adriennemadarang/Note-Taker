const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'))
});

router.get('/notes', (req, res) => {
    console.log('');
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'))
});

module.exports = router;