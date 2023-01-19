const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');
mongoose.connection.once('open', () => console.log('connected to database'));

const termSchema = mongoose.Schema({
  term: { unique: true, type: String },
  definition: String
});

const Terms = mongoose.model('Terms', termSchema);

const models = {

  getAll: () => {
    return Terms.find();
  },

  getOne: ({ term }) => {
    return Terms.findOne({ term: term.toLowerCase() })
  },

  save: (termObj) => {
    termObj.term = termObj.term.toLowerCase();
    return Terms.create(termObj);
  },

  edit: (termObj) => {
    let oldTerm = termObj.oldTerm;
    let query = { term: oldTerm.toLowerCase() };
    let newTermObj = {
      term: termObj.newTerm.toLowerCase(),
      definition: termObj.definition
    };
    return Terms.findOneAndUpdate(query, newTermObj);
  },

  delete: ({ term }) => {
    return Terms.deleteOne({ term: term.toLowerCase() });
  }

};

module.exports.models = models;
