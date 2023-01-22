import React from 'react';


const Home = (props) => {


  ///// EVENT HANDLERS /////
  const handleClick = (event) => {
    props.showHome(false);
    props.showAccount(true);
  };

  return (
    <div className="home">
      <button id="home-btn" onClick={handleClick}>CHECKOUT</button>
    </div>
  )
};

export default Home;
