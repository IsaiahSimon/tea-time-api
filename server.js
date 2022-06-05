const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

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

app.get('/api/:name', (req, res) => {
  const teaName = req.params.name.toLowerCase(); // log the name of the tea requested from the url
  if (tea[teaName]) {
    res.json(tea[teaName]);
  } else {
    res.json(tea['unknown']);
  };
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}! Better Go Catch It!`);
});