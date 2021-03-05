import React from "react";
import "./LogoAppBar.css";

function LogoAppBar({ img, alt }) {
  //Imagen del logo que se muestra en el appBar
  return <img className="o-logo-appbar" src={img} alt={alt} />;
}

export default LogoAppBar;
