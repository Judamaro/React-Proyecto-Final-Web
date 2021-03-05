import React from "react";
import "./Text.css";

//Titulo principal de la app, recibe contenido
function PrincipalTitle({ text }) {
  return <h2 className="o-principal-title">{text}</h2>;
}

export default PrincipalTitle;
