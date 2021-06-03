import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./header/Header";
import SearchBar from "./search_bar/SearchBar";
import Main from "./main/Main";
import { ImagesService } from "../use_cases/ImagesService";
import { Image } from "../types/types";

function AppGallery() {
  const [imagesList, setImagesList] = useState<Image[]>([]);
  const [inputValue, setInputValue] = useState("");
  const imagesService = new ImagesService();
  useEffect(() => {
    imagesService.getImages().then(images_list => {
      setImagesList(images_list);
    }).catch(console.log);
    //eslint-disable-next-line
  }, []);


  function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    if (inputValue === "") return;
    console.log(inputValue);
    imagesService.searchImage(inputValue).then((data) => {
      console.log(data);
      setImagesList(data);
      setInputValue("");
    }).catch(console.log);
  }

  return (
      <div className="main-container">
        <Header title={"App Gallery"}/>
        <SearchBar
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}/>
        <Main imagesList={imagesList}/>
      </div>
  );
}

export default AppGallery;
