import { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function Search({fetchOnClick, handleOnChange}) {
  return (
    <div className="search-section">
      Search for your favorite shows
      <div className="search-input">
        <input className="search-box" type="text" placeholder="Search" onChange={handleOnChange}/>
        <button className="btn-search" onClick={fetchOnClick}>Search</button>
      </div>
    </div>
  );
}

export default Search;
