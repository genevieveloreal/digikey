const express = require('express');
const path = require('path');
const restrictions = require("./api/data/restrictions");
const qldContactTracking = require('./api/data/qld-contact-tracing-sites.json')
const qldwastewater = require('./api/data/qld-positive-testing-sites.json')
const qldTestingSites = require('./api/data/qld-testing-locations.json')
const vicTestingSites = require('./api/data/vic-testing-locations.json')
const mapQldTestingSites = require('./api/helpers/mapQldTestingSites')
const mapVicTestingSites = require('./api/helpers/mapVicTestingSites')

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

app.get('/api/tracing/qld/:suburb?', express.json(), (req, res) => {
  if (req.params.suburb) {
    console.log(req.params.suburb)
    const results = qldContactTracking.filter((item) => {
      return item['Suburb'].toLowerCase().indexOf(req.params.suburb.toLowerCase()) > -1
    })
    res.send(results)
  }
  else {
    return qldContactTracking
  }
})

app.get('/api/wastewater/qld', express.json(), (req, res) => {
  res.send(qldwastewater)
})

app.get('/api/testing-locations/qld', express.json(), (req, res) => {
  const result = qldTestingSites.map((site) => {return mapQldTestingSites(site)})
  res.send(result);
})

app.get('/api/testing-locations/vic', express.json(), (req, res) => {
  const result = vicTestingSites.map((site) => {return mapVicTestingSites(site)})
  res.send(result);
})


app.use('/static', express.static(path.join(__dirname, './build/static')))


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(80);
