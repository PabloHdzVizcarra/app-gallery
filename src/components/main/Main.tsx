import React from "react";
import { Image } from "../../types/types";
import ImageComponent from "./ImageComponent";

type MainProps = {
  imagesList: Image[]
}

function Main({ imagesList }: MainProps) {
  return (
      <main className="images">
        {imagesList.map((image) =>
          image ? <ImageComponent image={image} key={image.id} /> : null
        )}
      </main>
  );
}

export default Main;
