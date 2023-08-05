import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
