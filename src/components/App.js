import React, { useState, useEffect } from "react";
import axios from "axios";
// import MyButton from "./MyButton/MyButton";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
    );
    setProducts(response.data.items);
    console.log(response.data.items);
  };

  useEffect(() => {
    if (searchValue.length >= 3) {
      console.log(searchValue);
      fetchData();
    }
  }, [searchValue]);

  const hasMatchResults = products.length > 0

  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>BookIt</h1>
          <div className="search">
            <SearchBar setOutSearchValue={setSearchValue} />
          </div>
        </div>
        <div className="row2">
        {hasMatchResults &&
      <ul>
        {products.map((product) => {
          return <li key={product}>{product.volumeInfo.title}</li>;
        })}
      </ul>}
        </div>
      </div>
    </div>
  );
};

export default App;
