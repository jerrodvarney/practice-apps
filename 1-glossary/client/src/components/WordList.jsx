import React from 'react';
import WordEntry from './WordEntry.jsx';


const WordList = (props) => (
  <div className="list">
    {props.terms.map((term) => <WordEntry term={term} key={term.term}/>)}
  </div>
);


export default WordList;
