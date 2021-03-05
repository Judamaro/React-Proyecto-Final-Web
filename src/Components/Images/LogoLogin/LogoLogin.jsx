import React from "react";
import "./LogoLogin.css";

function LogoLogin({ image, alt }) {
  //Imagen del logo que se muestra en el login
  return <img className="o-logo" src={image} alt={alt} />;
}

export default LogoLogin;
