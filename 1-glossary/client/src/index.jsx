import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Search from './components/Search.jsx';
import NewTermForm from './components/NewTermForm.jsx';
import WordList from './components/WordList.jsx';
const useState = React.useState;
const useEffect = React.useEffect;

const App = () => {

  ///// STATE DATA /////
  const [allTerms, setAllTerms] = useState([]);
  const [terms, setTerms] = useState([]);
  const [form, setDisplayForm] = useState(false);


  ///// EVENT HANDLERS /////
  const search = (event) => {
    let searchTerm = event.target.previousSibling.value;
    if (searchTerm.length) {
      let matches = [];
      for (let term of allTerms) {
        if (term.term.includes(searchTerm)) {
          matches.push(term);
        }
      }
      event.target.previousSibling.value = '';
      setTerms(matches);
    }
  };

  const displayForm = (event) => {
    let button = event.target;

    // displays form and changes button to say submit ------ add below commented funtionality next
    if (!form) {
      button.innerHTML = 'Submit';
      setDisplayForm(!form)
    } else {
      button.innerHTML = 'Add A New Term';
      setDisplayForm(!form);
    }
///////////// START HERE ////////////////

    // get text from term and definition inputs

    //if one or both is missing a value
     //tell user to fill out both forms

    // if length for both

    // if term is in all terms
      // tell user its already there
    // otherwise send new term and definition to addNew function and
      // hide form and change button text back to 'Add A New Term'
  };



  ///// HTTP REQUEST HANDLERS /////
  const url = 'http://127.0.0.1:3000/terms';

  const getAll = () => {
    axios.get(url)
      .then(({ data }) => {
        setTerms(data);
        setAllTerms(data);
      })
      .catch(err => console.log('error getting all terms: ', err));
  };

  const addNew = (termObj) => {
    axios.post(url, termObj)
      .then(() => getAll())
      .catch(err => console.log('error adding a new term: ', err));
  };

  const edit = (termObj) => {
    axios.put(url, termObj)
      .then(() => getAll())
      .catch(err => console.log('error editing term: ', err));
  };

  const remove = (termObj) => {
    axios.post(url + '/delete', termObj)
      .then(() => getAll())
      .catch(err => console.log('error deleting term: ', err));
  };

  useEffect(getAll, []);

  return (
    <div id="app">
      <div className="header">
        <h1 className="title">TERMinator</h1>
        <Search onClick={search} />
      </div>
      <div className="content">
        {form ? <NewTermForm /> : null}
        <button className="add-term" onClick={displayForm}>Add A New Term</button>
        <WordList terms={terms} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
