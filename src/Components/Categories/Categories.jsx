import React, { Component } from "react";
import PrincipalTitle from "../Text/PrincipalTitle";
import CategoriesList from "./CategoriesList/CategoriesList";
import "./Categories.css";

class Categories extends Component {

  constructor(props) {
    super(props);
  }
  
  sendIdToHome=(idFromList) => {
    this.props.sendId({idFromList});
  }

  render() {
    //Seccion lateral izquierda donde estan las categorias relacionadas con peluqueria
    return (
      <div className="o-category-container">
        <PrincipalTitle text={"Categorías"} />
        <CategoriesList sendIdC={this.sendIdToHome.bind(this)}/>
      </div>
    );
  }
}

export default Categories;
