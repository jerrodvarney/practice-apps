import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Search from './components/Search.jsx';
import WordList from './components/WordList.jsx';
const useState = React.useState;
const useEffect = React.useEffect;

const App = () => {

  ///// STATE DATA /////
  const [terms, setTerms] = useState([]);


  ///// EVENT HANDLERS /////



  ///// HTTP REQUEST HANDLERS /////
  const url = 'http://127.0.0.1:3000/terms';

  const getAll = () => {
    axios.get(url)
      .then(({ data }) => setTerms(data))
      .catch(err => console.log('error getting all terms: ', err));
  };

  const getOne = (termObj) => {
    //gets a single word, used after a search event
  };

  const addNew = (termObj) => {
    //adds a single new term object to database, after add new from submission
  };

  const edit = (termObj) => {
    //changes one term or definition, after change submit
  };

  const remove = (termObj) => {
    //deletes one term from database, after user clicks 'X'
  };

  useEffect(getAll, []);

  return (
    <div id="app">
      <div className="header">
        <h1 className="title">TERMinator</h1>
        {/* Search component will go here. */}
      </div>
      <div className="content">
        <button className="add-term">Add A New Term</button>
        <WordList terms={terms} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
