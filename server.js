const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now listening at http://localhost:${PORT} `)
});