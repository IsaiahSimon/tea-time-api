const express = require('express');
const app = express();
const PORT = 8000;

const tea = {
  'oolong': {
    'type': 'black',
    'origin': 'China',
    'waterTemp': '210',
    'steepTime': '180',
    'caffinated': true,
    'flavor': 'sweet'
  },
  'matcha': {
    'type': 'green',
    'origin': 'China',
    'waterTemp': '200',
    'steepTime': '180',
    'caffinated': true,
    'flavor': 'delicious'
  },
  'unknown': {
    'type': 'unknown',
    'origin': 'unknown',
    'waterTemp': '0',
    'steepTime': '0',
    'caffinated': false,
    'flavor': 'unknown'
  }

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  res.json(tea);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}! Better Go Catch It!`);
});