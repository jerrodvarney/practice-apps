import React from 'react';


const Confirmation = (props) => {

  return (
    <div className="end">
      <div className="confirmation form">
        <div className="top long">
          <h1 className="form-title">CONFIRMATION</h1>
        </div>
        <h3 id="email" className="long" placeholder="Email"></h3> //props.data.email
        <h3 id="name" className="half" placeholder="Name"></h3>  //props.data.name
        <h3 id="password" className="half" placeholder="Password"></h3>  //etc etc.
        <h3 id="addr1" className="long" placeholder="Address Line 1"></h3>
        <h3 id="addr2" className="long" placeholder="Address Line 2"></h3>
        <h3 id="city" className="third" placeholder="City"></h3>
        <h3 id="state" className="third" placeholder="State"></h3>
        <h3 id="zip" className="third" placeholder="Zip"></h3>
        <h3 id="phone" className="long" placeholder="Phone Number"></h3>
        <h3 id="cardNum" className="long" placeholder="Card Number"></h3>
        <h3 id="exp" className="third" placeholder="Expiration"></h3>
        <h3 id="cvv" className="third" placeholder="CVV"></h3>
        <h3 id="billZip" className="third" placeholder="Billing Zip"></h3>
      </div>
      <div className="purchase">
        <button id="purchase-btn">PURCHASE</button>
      </div>
    </div>
  )
};


export default Confirmation;
