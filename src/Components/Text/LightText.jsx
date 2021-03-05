import React from "react";
import "./Text.css";

//Texto secundario de la app con estilo light, recibe contenido
function LightText({ text }) {
  return <p className="o-light-text">{text}</p>;
}

export default LightText;
