import React from "react";
import { Image } from "../../types/types";

type ImageProps = {
  image: Image
}

function ImageComponent({image}: ImageProps) {
  return (
      <div className="image">
        <h3 className="image__title">{image.user.name ? image.user.name : "Default title"}</h3>
        <img src={image.urls.small} alt={image.alt_description} className="image__picture"/>
        <div className="image__info">
          <small className="image__sub">{image.alt_description}</small>
          <p className="image__creator">Created at <small>{image.created_at.slice(0, 10)}</small></p>
        </div>
      </div>
  );
}

export default ImageComponent;
