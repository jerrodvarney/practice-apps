import React from 'react';


const ShippingForm = (props) => {

  return (
    <div className="shipping form">
      <div className="top long">
        <h1 className="form-title">SHIPPING AND CONTACT DETAILS</h1>
      </div>
      <input id="addr1" className="long" placeholder="Address Line 1"></input>
      <input id="addr2" className="long" placeholder="Address Line 2"></input>
      <input id="city" className="third" placeholder="City"></input>
      <input id="state" className="third" placeholder="State"></input>
      <input id="zip" className="third" placeholder="Zip"></input>
      <input id="phone" className="long" placeholder="Phone Number"></input>
    </div>
  )
};


export default ShippingForm;
