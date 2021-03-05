import React from "react";
import "./Text.css";

//Texto enlace de los textos de las categorias
function CategoryText({ text, checkText}) {

  return (
    <a className="o-light-text o-category-text" href="#" onClick={() => checkText(text)}>
      {text}
    </a>
  );
}

export default CategoryText;
