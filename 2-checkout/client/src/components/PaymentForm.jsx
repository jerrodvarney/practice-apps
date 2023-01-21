import React from 'react';


const PaymentForm = (props) => {

  return (
    <div className="payment form">
      <div className="top long">
        <h1 className="form-title">PAYMENT INFORMATION</h1>
      </div>
      <input id="cardNum" className="long" placeholder="Card Number"></input>
      <input id="exp" className="third" placeholder="Expiration"></input>
      <input id="cvv" className="third" placeholder="CVV"></input>
      <input id="billZip" className="third" placeholder="Billing Zip"></input>
    </div>
  )
};


export default PaymentForm;
