import React from 'react';


const WordEntry = (props) => (
  <div className="term-entry">
    <div className="top">
      <h1 className="term">{props.term.term}</h1>
      {/* edit and delete icons will go here */}
    </div>
    <div className="bottom">
      <p className="definition">{props.term.definition}</p>
    </div>
  </div>
);


export default WordEntry;
