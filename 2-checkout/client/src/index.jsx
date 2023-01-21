import React from "react";
import { render } from "react-dom";
import Home from './components/Home.jsx';
import AccountForm from './components/AccountForm.jsx';
import ShippingForm from './components/ShippingForm.jsx';
import PaymentForm from './components/PaymentForm.jsx';
import Confirmation from './components/Confirmation.jsx';
const useState = React.useState;
const useEffect = React.useEffect;


const App =() => {

  ///// STATE DATA /////
  const [home, showHome] = useState(true);
  const [account, showaccount] = useState(true);
  const [shipping, showShipping] = useState(true);
  const [payment, showPayment] = useState(true);
  const [confirm, showConfirm] = useState(true);


  ///// EVENT HANDLERS /////


  ///// HTTP REQUESTS HANDLERS /////
  let url = 'http://127/.0.0.1/';






  return (
    <div id="app">
      <h2><code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code></h2>
      { home ? <Home /> : null }
      { account ? <AccountForm /> : null }
      { shipping ? <ShippingForm /> : null }
      { payment ? <PaymentForm /> : null }
      { confirm ? <Confirmation /> : null }
    </div>
  )
};


render(<App />, document.getElementById("root"));
