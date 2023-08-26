const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// add routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// add routes

app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}`);
});