const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));

const apps = require('./app-data.js');

app.get('/apps', (req, res)=> {
  const { search = '', sort, genre } = req.query;

  if (sort) {
    if(!['App', 'Rating'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of title or rank');
    }
  }

  let results = apps.filter(app => app.App.toLowerCase().includes(search.toLowerCase()));

  if (sort) {
    results.sort((a,b) => {
      return a[sort] > b[sort] ? 1: a[sort] < b[sort] ? -1 : 0;
    });
  }

  if (genre) {
    if(!['Genres'].includes(genre)) {
      return res
        .status(400)
        .send('Please select an extant genre');
    }
  }

  let genres = apps.filter(app => app.Genres.toLowerCase().includes(search.toLowerCase()));

  if (genre) {
    genres.sort((a,b) => {
      return a[sort] > b[sort] ? 1: a[sort] < b[sort] ? -1 : 0;
    });
  }

  res
    .json(results);
});

app.listen(8000, () => {
  console.log('listening at port 8000');
});