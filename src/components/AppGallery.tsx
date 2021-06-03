import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./header/Header";
import SearchBar from "./search_bar/SearchBar";
import Main from "./main/Main";
import { ImagesService } from "../use_cases/ImagesService";
import { Image } from "../types/types";

function AppGallery() {
  const [imagesList, setImagesList] = useState<Image[]>([]);
  const imagesService = new ImagesService();
  useEffect(() => {
    imagesService.getImages()
    .then(images_list => {
        setImagesList(images_list)
    })
    .catch(console.log);
    //eslint-disable-next-line
  }, [])

  console.log(imagesList);
  return (
      <div className="main-container">
        <Header title={"App Gallery"}/>
        <SearchBar/>
        <Main imagesList={imagesList}/>
      </div>
  );
}

export default AppGallery;
