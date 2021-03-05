import React from "react";
import "./ImagenLogin.css";

function ImageLogin({ image, alt }) {
  //Imagen mostrada en el login que se muestra grande al lado izquierdo
  return (
    <div className="o-image-login-container">
      <img className="o-image-login" src={image} alt={alt} />
    </div>
  );
}

export default ImageLogin;
