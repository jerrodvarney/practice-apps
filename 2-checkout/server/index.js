require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use (express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

///// HTTP ROUTES /////
app.get('/submit', (req, res) => {
  db.query("SELECT * FROM responses", (err, data) => {
    if (err) {
      console.log('error retrieving responses from database: ', err);
      res.sendStatus(500)
      return;
    }
    res.send(JSON.stringify(data));
  });
});

app.post('/submit', (req, res) => {
  let data = req.body;
  let query = `INSERT INTO responses VALUES (null, "${req.session_id}", "${data.email}", "${data.username}", "${data.pass}", "${data.addr1}", "${data.addr2}", "${data.city}", "${data.st}", ${data.zip}, ${data.phone}, "${data.cardNum}", ${data.exp}, ${data.cvv}, ${data.billZip})`;
  db.query(query, (err) => {
    if (err) {
      console.log('error saving new response to database: ', err);
      res.sendStatus(500);
      return;
    }
    res.status(201).send("success");
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
