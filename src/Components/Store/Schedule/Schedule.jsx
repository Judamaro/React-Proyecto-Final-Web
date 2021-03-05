import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import ContentText from "../../Text/ContentText";
import LightText from "../../Text/LightText";
import "./Schedule.css";

//Horario de la tienda
class Schedule extends Component {

  constructor() {
    super();
    this.state = {
      horario: [],
      lista: true,
      horario1: "",
      horario2: "",
      horario3: ""
    }


  }

  componentDidMount() {
    console.log(this.props.idTienda);
    this.getHorario(this.props.idTienda);
  }

  getHorario(id) {

    this.id = {
      id_tienda: this.props.idTienda
    }

    axios.post('http://localhost:3000/jornadas', qs.stringify(this.id)).then((res) => {
        
      this.setState({
        horario: res.data,
        lista: false
      });

      console.log(res.data);
      /* console.log(res.data.length); */

      this.parseHorario();
  
    })
    .catch((error) => {
      console.log(error);
    });
  }

  parseHorario(datos) {
    console.log(this.state.horario.data.length);
    if(this.state.horario.data.length === 2){
      this.setState({
        horario1: "No Disponible",
        horario2: "",
        horario3: ""
      });
    }else if(this.state.horario.data.length === 3){
      this.setState({
        horario1: "Sábado: " + this.state.horario.data[2].horario,
        horario2: "No disponible",
        horario3: ""
      });
    }else if(this.state.horario.data.length === 4){
      this.setState({
        horario1: "Sábado: " + this.state.horario.data[2].horario,
        horario2: "Domingo: " + this.state.horario.data[3].horario,
        horario3: ""
      });
    }else if(this.state.horario.data.length === 5){
      this.setState({
        horario1: "Sábado: " + this.state.horario.data[2].horario,
        horario2: "Domingo: " + this.state.horario.data[3].horario,
        horario3: "Festivo: " + this.state.horario.data[4].horario
      });
    }else{
      this.setState({
        horario1: "No Disponible",
        horario2: "",
        horario3: ""
      });
    }
  }

  render() {
    if(this.state.lista){
      return <h2>cargando</h2>
    }
    console.log(this.state.horario1 + this.state.horario2 + this.state.horario3);

    return (
      //Se establece el horario del salon de belleza en sus determinados dias
      <div className="o-schedule-container">
        <ContentText text={this.props.nameTienda} colorText="BlueLight" />
        <div className="o-titles-container">
          <ContentText text="HORARIO" colorText="BlueLight" />
          <div className="o-hours-container">
            <div className="o-hours">
              <ContentText text="Lunes - Viernes" colorText="Blue" />
              <LightText text={this.state.horario.data[0].horario + " AM"} />
              <LightText text={this.state.horario.data[1].horario + " PM"} />
            </div>

            <div>
              <ContentText
                text="Otros dias"
                colorText="Blue"
              />
              <LightText text={this.state.horario1} />
              <LightText text={this.state.horario2} />
              <LightText text={this.state.horario3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
