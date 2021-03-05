import React, { Component } from "react";
import axios from "axios";
import qs from 'qs';
import AppBar from "../Components/AppBar/AppBar";
import DatePicker from "../Components/Store/DatePicker/DatePicker";
import Profile from "../Components/Store/Profile/Profile";
import ProviderInfo from "../Components/Store/ProviderInfo/ProviderInfo";
import StoreProdServ from "../Components/Store/ServiceProducts/StoreServProd";
import "./StorePage.css";

class StorePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tienda: [],
      estilista: [],
      listae: true,
      lista: true
    }
  }

  id = {

  };

  idEstilista = {

  }

  componentDidMount() {
    console.log(this.props.location.state.id);
    console.log(this.props.location.state.idS);
    this.getDataStore(this.props.location.state.id);
    this.getEstilistas(this.props.location.state.idS);
  }

  getDataStore = (id_t) => {
    console.log(id_t);

    this.id = {
      id_t: this.props.location.state.id
    }

    axios.post('http://localhost:3000/tienda', qs.stringify(this.id)).then((res) => {
        
      this.setState({
        tienda: res.data,
        lista: false
      });

      console.log(res.data);
  
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getEstilistas = (id_et) => {
    console.log(id_et);
    this.idEstilista = {
      idS: this.props.location.state.idS
    }

    axios.post("http://localhost:3000/getEstilista", qs.stringify(this.idEstilista)).then((res) => {
        
        this.setState({
          estilista: res.data,
          listae: false
        });

        console.log(res.data);
        console.log(this.state.estilista.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    
    if(this.state.lista){
      return <h2>cargando</h2>
    }
    if(this.state.listae){
      return <h2>cargando</h2>
    }

    console.log(this.state.estilista.data[0].nomb_et);
    return (
      <div>
        {/* Se llama el appbar en la parte superior */}
        <AppBar />
        <div className="o-store-page-content">
          {/* Información principal del proveedor, lateral izquierdo*/}
          <ProviderInfo
            img={this.state.estilista.data[0].img_et}
            name={this.state.estilista.data[0].nomb_et}
            profesion={this.state.estilista.data[0].titulo_et}
            numStars={this.state.estilista.data[0].puntaje_et}
            description={this.state.estilista.data[0].info_et}
            adress={this.state.tienda.data[0].dir_t}
          />
          <div className="o-store-container">
            {/* Contenedor principal de la tienda */}
            <div>
              {/* Perfil de la tienda, con portada y horario */}
              <Profile img_dir={this.state.tienda.data[0].img_t} idTienda={this.state.tienda.data[0].id_t} nameTienda={this.state.tienda.data[0].nomb_t}/>
            </div>
            <div className="o-body-store-container">
              {/* Información de productos y servicios de la tienda */}
              <StoreProdServ idTienda={this.state.tienda.data[0].id_t}/>
              <div className="o-reserve-store">
                {/* Información de reserva de los productos o servicios de la tienda */}
                <DatePicker />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StorePage;
