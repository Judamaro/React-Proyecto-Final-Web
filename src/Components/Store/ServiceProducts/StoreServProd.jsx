import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import ContentText from "../../Text/ContentText";
import ListServProd from "./TableInfo/ListServProd";
import "./StoreServProd.css";
import ButtonsProfile from "../Buttons/ButtonsProfile";

//Contenido principal de los productos y servicios de la tienda
class StoreProdServ extends Component {

  constructor(){
    super();
    this.state = {
      productos: [],
      servicios: [],
      lista: true,
      listae: true
    }
  }


  componentDidMount() {
    console.log(this.props);
    this.getDataServicios(this.props.idTienda);
    this.getDataProductos(this.props.idTienda);
  }

  getDataServicios = (id_t) => {
    console.log(id_t);

    this.id = {
      id_t: this.props.idTienda
    }

    axios.post('http://localhost:3000/serviciosTienda', qs.stringify(this.id)).then((res) => {
        
      this.setState({
        servicios: res.data,
        lista: false
      });

      console.log(res.data);
  
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getDataProductos = (id_t) => {
    console.log(id_t);

    this.id = {
      id_t: this.props.idTienda
    }

    axios.post('http://localhost:3000/productosTienda', qs.stringify(this.id)).then((res) => {
        
      this.setState({
        productos: res.data,
        listae: false
      });

      console.log(res.data);
  
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {

    const {idTienda} = this.props;

    if(this.state.lista){
      return <h2>cargando</h2>
    }
    if(this.state.listae){
      return <h2>cargando</h2>
    }

    return (
      <div className="o-store-prodserv">
        <div>
          {/* Titulo principal de los servicios de la tienda */}
          <ContentText text={"Mis servicios"} colorText={"BlueLight"} />
          <div className="o-options-buttons">
            {/* Botones de a domicilio o en el local */}
            <ButtonsProfile />
          </div>
          {/* Tabla con los productos o servicios de la tienda */}
          <div className="o-list-table">
            <ListServProd type={"service"} elements={this.state.servicios.data} />
          </div>
          <ContentText text={"Mis productos"} colorText={"BlueLight"} />
          <div className="o-list-table">
            <ListServProd type={"product"} elements={this.state.productos.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default StoreProdServ;
