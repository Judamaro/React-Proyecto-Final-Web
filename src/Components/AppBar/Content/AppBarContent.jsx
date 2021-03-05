import { Icon } from "@material-ui/core";
import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import LogoAppBar from "../../Images/LogoAppBar/LogoAppBar";
import Textfield from "../../Textfield/Textfield";
import "./AppBarContent.css";
import history from './../../../Pages/history';

const cities = [
  { city: "Cali" },
  { city: "Bogotá" },
  { city: "Medellín" },
  { city: "Cartagena" },
  { city: "Palmira" },
];

function AppBarContent() {
  //App bar con el logo y los campos para busqueda y cerrar sesión
  return (
    <div className="o-content-container">
      <div className="o-logo-container">
        <LogoAppBar
          alt={"Logo barberia horizontal"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/meegoapptest-98b27.appspot.com/o/logoApp.png?alt=media&token=a2396f7f-a8c4-4145-964c-b0310abab916"
          }
        />
      </div>

      <Textfield label={"Buscar proveedor"} type={"text"} icon={"search"} />
      <div className="o-search-container">
        <Dropdown className="o-dropdown" name={"city"} options={cities} />
      </div>
      <a onClick={() => { history.push('/') }}><Icon className="o-exit-icon">exit_to_app</Icon></a>      
    </div>
  );
}

export default AppBarContent;
