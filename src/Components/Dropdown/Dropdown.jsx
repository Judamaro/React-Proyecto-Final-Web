import React from "react";
import "./Dropdown.css";

function Dropdown({ name, options }) {
  //Dropdown general que se usara en la app, recibe la opciones que listara y un nombre que servira de identificador
  return (
    <select name={name} id={name} className="o-dropdown">
      {options.map((element) => {
        return (
          <option value={element.city} key={element.city}>
            {element.city}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
