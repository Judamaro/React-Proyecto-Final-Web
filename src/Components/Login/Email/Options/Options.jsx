import React from "react";
import "./Options.css";

function OptionsLogin({ text }) {
  //Opcion de la seccion de email
  return (
    <a className="o-option" href="/">
      {text}
    </a>
  );
}

export default OptionsLogin;
