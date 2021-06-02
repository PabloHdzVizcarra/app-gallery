import React, { useState } from "react";
import "./index.css";
import Header from "./header/Header";
import SearchBar from "./search_bar/SearchBar";
import Main from "./main/Main";
import { Image, ImagesService } from "../use_cases/ImagesService";

function AppGallery() {
  const [imagesList, setImagesList] = useState<Image[]>();
  const imagesService = new ImagesService();

  imagesService.getImages()
  .then(images_list => {
      setImagesList(images_list)
  })
  .catch(console.log);

  return (
      <div className="main-container">
        <Header title={"App Gallery"}/>
        <SearchBar/>
        <Main/>
      </div>
  );
}

export default AppGallery;
