require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require('morgan');
const cors = require('cors');
const models = require('./db').models;

const app = express();

///// MIDDLE_WARE /////
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

///// ROUTES /////
app.get('/terms', (req, res) => {
  models.getAll()
    .then(terms => res.status(200).send(JSON.stringify(terms)))
    .catch(err => {
      console.log('error getting all terms: ', err);
      res.status(500).send();
    });
});

app.post('/terms/one', (req, res) => {
  models.getOne(req.body)
    .then(term => res.status(201).send(JSON.stringify(term)))
    .catch(err => {
      console.log('error getting searched term: ', err);
      res.status(500).send();
    });
});

app.post('/terms', (req, res) => {
  models.save(req.body)
    .then(() => res.status(201).send("success"))
    .catch(err => {
      console.log('error saving new term: ', err);
      res.status(500).send("failed to save new term");
    })
});

app.put('/terms', (req, res) => {
  models.edit(req.body)
    .then(() => res.status(204).send("success"))
    .catch(err => {
      console.log(`error updating term - "${req.body.oldTerm}": `, err);
      res.status(500).send("failed to update term");
    });
});

app.delete('/terms', (req, res) => {
  models.delete(req.body)
    .then(() => res.status(204).send("success"))
    .catch(err => {
      console.log(`error deleting term - "${req.body.term}": `, err);
      res.status(500).send("failed to delete term");
    });
});

////////////////////////////
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
