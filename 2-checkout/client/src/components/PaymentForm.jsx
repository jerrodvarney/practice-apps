import React from 'react';
const useState = React.useState;


const PaymentForm = (props) => {
  let data = {};

  ///// STATE DATA /////
  const [cardNum, setCardNum] = useState(null);
  const [exp, setExp] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [billZip, setBillZip] = useState(null);


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {
    // Sets new data within customer object //
    data.cardNum = cardNum;
    data.exp = exp;
    data.cvv = cvv;
    data.billZip = billZip;
    props.setCustData(Object.assign(props.custData, data));

    // Displays next form //
    props.showPayment(false);
    props.showConfirm(true);
  };


  return (
    <div className="payment form">
      <div className="inputs">
        <h1 className="form-title">PAYMENT INFORMATION</h1>
        <input id="cardNum" type="number" className="long" placeholder="Card Number" onChange={(e) => setCardNum(e.target.value)}></input>
        <div className="justify">
          <input id="exp" type="number" className="third" placeholder="Expiration" onChange={(e) => setExp(e.target.value)}></input>
          <input id="cvv" type="number" className="third" placeholder="CVV" onChange={(e) => setCvv(e.target.value)}></input>
          <input id="billZip" type="number" className="third" placeholder="Billing Zip" onChange={(e) => setBillZip(e.target.value)}></input>
        </div>
        <div className="chevron" onClick={handleClick}>
          <h3 className="next">NEXT</h3>
        </div>
      </div>
    </div>
  )
};


export default PaymentForm;
