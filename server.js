const express = require('express');
const path = require('path');
const app = express();
const fs = require ('fs');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + 'public'));

require('./routes/apiRoutes')(app);


app.listen(PORT, () => {
    console.log(`API server now listening at http://localhost:${PORT} `)
});