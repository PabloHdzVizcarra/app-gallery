import React from "react";
import "./index.css";
import Header from "./header/Header";
import SearchBar from "./search_bar/SearchBar";
import Main from "./main/Main";

function AppGallery() {
  return (
      <div className="main-container">
        <Header title={"App Gallery"}/>
        <SearchBar/>
        <Main/>
      </div>
  );
}

export default AppGallery;
