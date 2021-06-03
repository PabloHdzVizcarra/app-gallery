import React from "react";
import { Image } from "../../types/types";

type ImageProps = {
  image: Image
}

function ImageComponent({image}: ImageProps) {
  return (
      <div>{image.description}</div>
  );
}

export default ImageComponent;
