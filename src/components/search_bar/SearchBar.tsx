import React from "react";

function SearchBar() {
  return (
      <form className="search-bar">
        <input type="text" placeholder="search any image" className="search-bar__input"/>
        <button className="search-bar__button" type="submit">Search</button>
      </form>
  );
}

export default SearchBar;
