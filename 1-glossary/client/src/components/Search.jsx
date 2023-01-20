import React from 'react';


const Search = ({ onClick }) => {

  return (
    <div className="search">
      <input className="search-field" placeholder="Search for a term..."></input>
      <button className="find" onClick={onClick}>
        Search
        {/* A magnifying glass icon will go here. */}
      </button>
    </div>
  );
};


export default Search;
