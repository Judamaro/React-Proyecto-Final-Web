import React, { Component } from "react";
import CategoryText from "../../Text/CategoryText";
import "./CategoriesList.css";

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_ct: 0,
    };
  }

  sendIdToCategories = (textCateg) => {
    if (textCateg === "Cortes de cabello") {
      this.props.sendIdC(1);
    } else if (textCateg === "Cuidado de barba") {
      this.props.sendIdC(2);
    } else if (textCateg === "Tinturados") {
      this.props.sendIdC(3);
    } else if (textCateg === "Aplanchados") {
      this.props.sendIdC(4);
    } else if (textCateg === "Depilación de cejas") {
      this.props.sendIdC(5);
    } else if (textCateg === "Lavado de cabello") {
      this.props.sendIdC(6);
    } else if (textCateg === "Extensiones") {
      this.props.sendIdC(7);
    } else {
      this.props.sendIdC(0);
    }
  };

  render() {
    //Listado de categorias que se muestran en la sección de categorias
    return (
      <div className="o-category-list-container">
        <CategoryText
          text={"Cortes de cabello"}
          checkText={this.sendIdToCategories}
        />
        <CategoryText
          text={"Cuidado de barba"}
          checkText={this.sendIdToCategories}
        />
        <CategoryText text={"Tinturados"} checkText={this.sendIdToCategories} />
        <CategoryText
          text={"Aplanchados"}
          checkText={this.sendIdToCategories}
        />
        <CategoryText
          text={"Depilación de cejas"}
          checkText={this.sendIdToCategories}
        />
        <CategoryText
          text={"Lavado de cabello"}
          checkText={this.sendIdToCategories}
        />
        <CategoryText
          text={"Extensiones"}
          checkText={this.sendIdToCategories}
        />
      </div>
    );
  }
}

export default CategoriesList;
