import React from 'react';
import WordEntry from './WordEntry.jsx';


const WordList = (props) => (
  <div className="list">
    {props.terms.slice().reverse().map((term) => <WordEntry term={term} key={term.term} remove={props.remove} edit={props.edit} />)}
  </div>
);


export default WordList;
