import React from 'react';
const useState = React.useState;


const Confirmation = (props) => {
  let data = props.custData;


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {

    //send data to server

    props.showConfirm(false);
    props.showHome(true);
  };


  return (
    <div className="confirmation form">
      <div className="top long">
        <h1 className="form-title">CONFIRMATION</h1>
      </div>
      <h3 id="email" className="long">{data.email}</h3>
      <h3 id="name" className="half">{data.username}</h3>
      <h3 id="password" className="half">passw***</h3>
      <h3 id="addr1" className="long">{data.addr1}</h3>
      <h3 id="addr2" className="long">{data.addr2}</h3>
      <h3 id="city" className="third">{data.city}</h3>
      <h3 id="state" className="third">{data.st}</h3>
      <h3 id="zip" className="third">{data.zip}</h3>
      <h3 id="phone" className="long">{data.phone}</h3>
      <h3 id="cardNum" className="long">{data.cardNum}</h3>
      <h3 id="exp" className="third">{data.exp}</h3>
      <h3 id="cvv" className="third">{data.cvv}</h3>
      <h3 id="billZip" className="third">{data.billZip}</h3>
      <button id="purchase-btn" onClick={handleClick}>PURCHASE</button>
    </div>
  )
};


export default Confirmation;
