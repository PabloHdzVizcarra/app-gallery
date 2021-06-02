import React from "react";
import "./index.css";
import Header from "./header/Header";
import SearchBar from "./search_bar/SearchBar";
import Main from "./main/Main";
import { ImagesApi } from "../http/ImagesApi";

function AppGallery() {
  const images = new ImagesApi();

  images.getImages()
      .then(console.log)
      .catch(console.log)

  return (
      <div className="main-container">
        <Header title={"App Gallery"}/>
        <SearchBar/>
        <Main/>
      </div>
  );
}

export default AppGallery;
