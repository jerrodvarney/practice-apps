import React from 'react';
const useState = React.useState;


const AccountForm = (props) => {
  let data = {};

  ///// STATE DATA /////
  const [email, setEmail] = useState(null);
  const [username, setName] = useState(null);
  const [pass, setPass] = useState(null);


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {
    // Sets new data within customer object //
    data.email = email;
    data.username = username;
    data.pass = pass;
    props.setCustData(Object.assign(props.custData, data));

    // Displays next form //
    props.showAccount(false);
    props.showShipping(true);
  };


  return (
    <div className="account form">
      <div className="inputs">
        <h1 className="form-title">CREATE YOUR ACCOUNT</h1>
        <input id="email" type="email" className="long" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <div className="justify">
          <input id="username" type="text" className="half" placeholder="Username" onChange={(e) => setName(e.target.value)}></input>
          <input id="password" type="password" className="half" placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
        </div>
        <div className="chevron" onClick={handleClick}>
          <h3 className="next">NEXT</h3>
        </div>
      </div>
    </div>
  )
};


export default AccountForm;
