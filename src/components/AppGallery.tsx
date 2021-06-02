import React from "react";
import "./index.css";
import Header from "./header/Header";
import SearchBar from "./search_bar/SearchBar";

function AppGallery() {
  return (
      <div className="main-container">
        <Header title={"App Gallery"}/>
        <SearchBar/>
      </div>
  );
}

export default AppGallery;
