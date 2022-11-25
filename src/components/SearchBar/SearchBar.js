import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const handleSearchClick = () => {
    props.setOutSearchValue(searchValue);
  };

  const shouldDisplayClearButton = searchValue.length > 0;
  const shouldDisplaySearchButton = searchValue.length >= 3;

  return (
    <div>
      <div className="row1">
        <input type="text" value={searchValue} onChange={handleInputChange} />
        {shouldDisplaySearchButton && (
          <button onClick={handleSearchClick}>
            <i>search</i>
          </button>
        )}
      </div>
      <div className="row2">
        {shouldDisplayClearButton && (
          <button onClick={handleClearClick}>clear</button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
