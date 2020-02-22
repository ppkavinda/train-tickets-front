//Install express server
const express = require('express');
const path = require('path');
const PORT = process.env.PORT ||  8080;

var bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  console.log(req.url, " : ", req.method);

  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/train-schedule'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/train-schedule/index.html'));
});


app.get('/companies', (req, res) => {
  const companies = [
    { "id": 1, "name": "Company One" },
    { "id": 2, "name": "Company Two" }
  ]

  return res.json(companies)
});

app.post('/login', (req, res) => {
  const user = {
    "id": 1,
    "firstname": "prasad",
    "lastname": "kavinda",
    "email": "pp.kaidvna@gmail.com",
    "token": "Bearer asdlfkjasdlkfjsdfkljdasfkldjsafkljkljlksj"
  }
  return res.json(user)
});

app.post('/register', (req, res) => {
  const user = {
    "id": 1,
    "firstname": "prasad",
    "lastname": "kavinda",
    "email": "pp.kaidvna@gmail.com",
    "token": "Bearer asdlfkjasdlkfjsdfkljdasfkldjsafkljkljlksj"
  }
  return res.json(user)
});

app.post('/train/search', (req, res) => {
  const trains = [
    {
      "id": 1,
      "from": "colombo",
      "to": "matara",
      "classes":
        [
          { "2": { "price": 140, "name": "2nd class" } },
          { "3": { "price": 70, "name": "3rd class" } }
        ]
    },
    {
      "id": 2,
      "from": "maradana",
      "to": "beliatta",
      "classes":
        [
          { "2": { "price": 290, "name": "2nd class" } },
          { "3": { "price": 180, "name": "3rd class" } }
        ]
    }
  ]
  return res.json(trains)
});


// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});