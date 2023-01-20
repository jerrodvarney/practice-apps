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


  ///// EVENT HANDLERS /////
  const search = (event) => {
    let searchTerm = event.target.previousSibling.value;
    if (searchTerm.length) {
      let matches = [];
      for (let term of allTerms) {
        if (term.term.includes(searchTerm.toLowerCase())) {
          matches.push(term);
        }
      }
      event.target.previousSibling.value = '';
      setTerms(matches);
    }
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
        <h1 className="title" onClick={() => setTerms(allTerms)}>TERMinator</h1>
        <Search onClick={search} />
      </div>
      <div className="content">
        <NewTermForm addNew={addNew} allTerms={allTerms} />
        <WordList terms={terms} remove={remove} edit={edit} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
