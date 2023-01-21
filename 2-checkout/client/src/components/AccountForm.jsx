import React from 'react';


const AccountForm = (props) => {

  return (
    <div className="account form">
      <div className="top long">
        <h1 className="form-title">CREATE YOUR ACCOUNT</h1>
      </div>
      <input id="email" className="long" placeholder="Email"></input>
      <input id="name" className="half" placeholder="Name"></input>
      <input id="password" className="half" placeholder="Password"></input>
    </div>
  )
};


export default AccountForm;
