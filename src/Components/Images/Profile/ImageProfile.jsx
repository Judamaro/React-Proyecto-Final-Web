import React from "react";
import "./ImageProfile.css";

function ImageProfile({ image, alt }) {
  //Imagen de perfil que se muestra en la tienda de un proveedor
  return <img className="o-image-profile" src={image} alt={alt} />;
}

export default ImageProfile;
