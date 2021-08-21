const express = require('express');
const path = require('path');

const app = express();

app.get('/api', (req, res) => {
  res.send('hello chicken');
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(80);
