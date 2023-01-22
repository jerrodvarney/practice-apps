import React from "react";
import { render } from "react-dom";
import Home from './components/Home.jsx';
import AccountForm from './components/AccountForm.jsx';
import ShippingForm from './components/ShippingForm.jsx';
import PaymentForm from './components/PaymentForm.jsx';
import Confirmation from './components/Confirmation.jsx';
import axios from 'axios';
const useState = React.useState;
const useEffect = React.useEffect;


const App =() => {

  ///// STATE DATA /////
  const [home, showHome] = useState(true);
  const [account, showAccount] = useState(false);
  const [shipping, showShipping] = useState(false);
  const [payment, showPayment] = useState(false);
  const [confirm, showConfirm] = useState(false);
  ///// CUSTOMER STATE DATA /////
  const [custData , setCustData] = useState({});


  ///// HTTP REQUESTS HANDLERS /////
  let url = 'http://127/.0.0.1/';

  const send = (allCustomerData) => {
    console.log('finalized product: ', allCustomerData);

  };




  return (
    <div id="app">
      <h2><code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code></h2>
      { home ? <Home showHome={showHome} showAccount={showAccount} setCustData={setCustData} /> : null }
      { account ? <AccountForm showAccount={showAccount} showShipping={showShipping} custData={custData} setCustData={setCustData} /> : null }
      { shipping ? <ShippingForm showShipping={showShipping} showPayment={showPayment} custData={custData} setCustData={setCustData} /> : null }
      { payment ? <PaymentForm showPayment={showPayment} showConfirm={showConfirm} custData={custData} setCustData={setCustData} /> : null }
      { confirm ? <Confirmation showConfirm={showConfirm} showHome={showHome} custData={custData} /> : null }
    </div>
  )
};


render(<App />, document.getElementById("root"));
