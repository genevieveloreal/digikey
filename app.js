const express = require('express');
const path = require('path');
const restrictions = require("./api/data/restrictions");

const app = express();

app.get('/api', (req, res) => {
  res.send('hello chicken');
})

app.get('/api/restrictions/:state?', express.json(), (req, res) => {
  if (req.params.state) {
    res.send(restrictions[req.params.state])
  }
  else {
    res.send(restrictions)
  }
})

app.use('/static', express.static(path.join(__dirname, './build/static')))


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(80);
