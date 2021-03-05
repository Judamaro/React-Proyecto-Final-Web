import React from "react";
import "./Text.css";

//Constante de los colores disponibles
const colors = {
  BlueLight: "#00D4D8",
  Black: "#333333,",
};

//Se busca en el objeto de colores el color enviado
function GetColor(color) {
  let colorCss = colors[color] ? colors[color] : "#333333";
  return colorCss;
}

//Texto del contenido dentro de la app, recibe el contenido y un color para el texto
function ContentText({ text, colorText }) {
  return (
    <p
      className="o-content-text"
      style={{
        color: GetColor(colorText),
      }}
    >
      {text}
    </p>
  );
}

export default ContentText;
