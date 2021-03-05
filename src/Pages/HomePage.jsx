import React, { Component } from "react";
import AppBar from "../Components/AppBar/AppBar";
import Categories from "../Components/Categories/Categories";
import Cards from "../Components/Cards/Cards";

import "./HomePage.css";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id_ct: ""
    }
  }

  sendIdToCards=(idFromCategories) => {
    console.log(Object.values(idFromCategories));
    this.setState({id_ct:Object.values(idFromCategories)});
  }

  componentDidUpdate(){
    console.log("El id de la categoria es:" + this.state.id_ct);
  }

  render() {
    return (
      <div className="o-home-container">
        {/* Se llama el appbar en la parte superior */}
        <AppBar />
        <div className="o-home-content-container">
          {/* Parte inferior de la página, con la tarjeta de categorias y cards de proveedores */}
          <Categories sendId={this.sendIdToCards.bind(this)}/>
          <Cards idFromCateg={this.state.id_ct}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
