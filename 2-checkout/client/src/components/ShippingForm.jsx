import React from 'react';
const useState = React.useState;


const ShippingForm = (props) => {
  let data = {};

  ///// STATE DATA /////
  const [addr1, setAddr1] = useState(null);
  const [addr2, setAddr2] = useState(null);
  const [city, setCity] = useState(null);
  const [st, setSt] = useState(null);
  const [zip, setZip] = useState(null);
  const [phone, setPhone] = useState(null);


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {
    // Sets new data within customer object //
    data.addr1 = addr1;
    data.addr2 = addr2;
    data.city = city;
    data.st = st;
    data.zip = zip;
    data.phone = phone;
    props.setCustData(Object.assign(props.custData, data));

    // Displays next form //
    props.showShipping(false);
    props.showPayment(true);
  };


  return (
    <div className="shipping form">
      <div className="top long">
        <h1 className="form-title">SHIPPING AND CONTACT DETAILS</h1>
      </div>
      <input id="addr1" type="text" className="long" placeholder="Address Line 1" onChange={(e) => setAddr1(e.target.value)}></input>
      <input id="addr2" type="text" className="long" placeholder="Address Line 2" onChange={(e) => setAddr2(e.target.value)}></input>
      <input id="city" type="text" className="third" placeholder="City" onChange={(e) => setCity(e.target.value)}></input>
      <input id="state" type="text" className="third" placeholder="State" onChange={(e) => setSt(e.target.value)}></input>
      <input id="zip" type="number" className="third" placeholder="Zip" onChange={(e) => setZip(e.target.value)}></input>
      <input id="phone" type="tel" className="long" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)}></input>
      <button className="next" onClick={handleClick}>NEXT</button>
    </div>
  )
};


export default ShippingForm;
