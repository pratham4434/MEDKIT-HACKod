import React from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className="search-bar-div">
      <input
        className="search-bar"
        type="text"
        placeholder="What are you searching for?"
      ></input>
      <div className="search-icon">
        <FaSearch className="search-icon-search" />
      </div>
    </div>
  );
};

export default SearchBar;
