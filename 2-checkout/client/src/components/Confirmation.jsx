import React from 'react';
const useState = React.useState;


const Confirmation = (props) => {
  let data = props.custData;


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {
    //send data to server
    props.send(data)
  };


  return (
    <div className="confirmation form">
      <div className="inputs">
        <h1 className="form-title">CONFIRMATION</h1>
        <h3 className="last long">{data.email || 'EMAIL'}</h3>
        <div className="justify">
          <h3 className="last half">{data.username || 'USERNAME'}</h3>
          <h3 className="last half">{data.pass || 'PASSWORD'}</h3>
        </div>
        <h3 className="last long">{data.addr1 || 'ADDRESS LINE 1'}</h3>
        <h3 className="last long">{data.addr2 || 'ADDRESS LINE 2'}</h3>
        <div className="justify">
          <h3 className="last third">{data.city || 'CITY'}</h3>
          <h3 className="last third">{data.st || 'STATE'}</h3>
          <h3 className="last third">{data.zip || 'ZIP'}</h3>
        </div>
          <h3 className="last long">{data.phone || 'PHONE NUMBER'}</h3>
          <h3 className="last long">{data.cardNum || 'CARD NUMBER'}</h3>
        <div className="justify">
          <h3 className="last third">{data.exp || 'EXP'}</h3>
          <h3 className="last third">{data.cvv || 'CVV'}</h3>
          <h3 className="last third">{data.billZip || 'BILLING ZIP'}</h3>
        </div>
        <button className="purchase-btn" onClick={handleClick}>PURCHASE!</button>
      </div>
    </div>
  )
};


export default Confirmation;
