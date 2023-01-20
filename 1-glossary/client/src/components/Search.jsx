import React from 'react';


const Search = ({ onClick }) => {

  return (
    <div className="search">
      <input className="search-field" placeholder="Search for a term..."></input>
      <button className="find" onClick={onClick}>
        <i className="search-icon fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};


export default Search;
