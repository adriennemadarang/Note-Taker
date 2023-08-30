const express = require('express');
const path = require('path');
const app = express();
const fs = require ('fs');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require ('./routes/htmlRoutes');
const apiRoutes = require ('./routes/apiRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`API server now listening at http://localhost:${PORT} `)
});