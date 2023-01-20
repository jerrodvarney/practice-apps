import React from 'react';
const useState = React.useState;


const NewTermForm = (props) => {

  ///// STATE DATA /////
  const [form, setDisplay] = useState(false);
  const [term, setTerm] = useState('');
  const [def, setDef] = useState('');


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {
    let button = event.target;
    if (!form) {
      setDisplay(!form);
      button.innerHTML = 'Submit';
      return;
    }
    if (term.length && def.length) {
      for (let word of props.allTerms) {
        if (word.term === term.toLowerCase()) {
          alert(`TERMinator already has ${term} stored!`);
          return;
        }
      }
      props.addNew({ term: term, definition: def});
    }
    button.innerHTML = 'Add A New Term';
    setDisplay(!form);
    setTerm('');
    setDef('');
  }


  return (
    <div className="new-term-form">
      {form ?
        <div className="input-container">
          <input id="new-term" onChange={event => setTerm(event.target.value)} placeholder="Enter a new term..."></input>
          <textarea id="new-def" onChange={event => setDef(event.target.value)} placeholder="Define your new term!"></textarea>
        </div>
      : null}
      <button className="add-term" onClick={handleClick}>Add A New Term</button>
    </div>
  )
};


export default NewTermForm;
