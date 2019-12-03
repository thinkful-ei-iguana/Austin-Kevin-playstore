const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));

const apps = require('./app-data.js');

app.get('/apps', (req, res)=> {
    res
        .json(apps);
});

app.listen(8000, () => {
    console.log('listening');
});