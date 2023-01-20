import React from 'react';
const useState = React.useState;

const WordEntry = (props) => {
  let term = props.term.term;
  let def = props.term.definition;

  ///// STATE DATA /////
  const [edit, setEdit] = useState(false);
  const [newDef, setNewDef] = useState('');
  const [newTerm, setNewTerm] = useState('');


  ///// EVENT HANDLERS /////
  const handleDelete = (event) => {
    props.remove({ term: term });
  };

  const handleEdit = (event) => {
    if (newDef.length || newTerm.length) {
      let update = {
        oldTerm: term,
      };
      newTerm.length ? update.newTerm = newTerm : update.newTerm = term;
      newDef.length ? update.definition = newDef : update.definition = def;
      props.edit(update);
    }
    setNewDef('');
    setNewTerm('');
    setEdit(false);
  };

  const handleCancel = (event) => {
    setEdit(false);
    setNewDef('');
  };

  return (
    <div className="term-entry">
      {edit ?
        <div>
          <div className="edit-container"></div>
          <div className="edit-form">
            <h1 className="edit-title">Need To Make Changes?</h1>
            <input className="term-change" placeholder="Update this term..." onChange={(e) => setNewTerm(e.target.value)}></input>
            <input className="def-change" placeholder="Make changes to this definition..." onChange={(e) => setNewDef(e.target.value)}></input>
            <button className="edit-btns" onClick={handleCancel}>Cancel</button>
            <button className="edit-btns" onClick={handleEdit}>Submit</button>
          </div>
        </div>
      : null}
      <div className="top">
        <h1 className="term">{term}</h1>
        <div>
          <i className="icons fa-regular fa-pen-to-square" onClick={() => setEdit(true)}></i>
          <i className="icons fa-solid fa-x" onClick={handleDelete}></i>
        </div>
      </div>
      <div className="bottom">
        <p className="definition">{def}</p>
      </div>
    </div>
  )
};


export default WordEntry;
