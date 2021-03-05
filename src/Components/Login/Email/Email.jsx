import React, { Component } from 'react';
import qs from 'qs';
import axios from "axios";
import Textfield from "../../Textfield/Textfield";
import OptionsLogin from "./Options/Options";
import "./Email.css";
import Button from "../../Button/Button";
import history from './../../../Pages/history';

class EmailLogin extends Component {

  client = {};

  clientE;
  clientC;

  constructor() {
    super();
    this.state = {
      emailC: "",
      passC: ""
    };
  }

  getData = (evt, type) => {

    if(type==='text'){
      this.setState({
        emailC: evt.target.value,
      })
    }else if(type==='password'){
      this.setState({
        passC: evt.target.value
      })
    }

    console.log(this.state.emailC);
    console.log(this.state.passC);

  }

  login = (e) => {

    if (this.state.emailC === "" && this.state.passC === "") {
      alert("Datos no válidos");
    } else {

      
      this.client = {
        emailc: this.state.emailC,
        contrac: this.state.passC
      };

      console.log(this.client);
      axios.post('http://localhost:3000/loginCliente', qs.stringify(this.client)).then(res => {
        if (res.data.sesion === 'loged') {
          alert('Bienvenido');
          history.push('/home');
        } else if (res.data.sesion === 'Error'){
            alert('Error al logear');
        } else {
          console.log(res.data.message);
        }
      }).catch(error => {
        console.log(this.state.emailC + " " + this.state.passC);
        console.log(error);
      });

    }

  }

  render() {
    //Campos de texto donde el usuario escribira el email, la contraseña y el boton de ingresar
    return (
      <div className="o-email-container">
        <div className="o-input-login">
          <div className="o-input-container">
            <Textfield label={"Email"} type={"text"}  dataInsert={this.getData} change={this.getData}/>
          </div>
          <div className="o-input-container">
            <Textfield label={"Contraseña"} type={"password"} dataInsert={this.getData} change={this.getData}/>
          </div>
        </div>

        <div className="o-options-login">
          <OptionsLogin text={"Olvidé mi contraseña"} />
          <OptionsLogin text={"Regístrate"} />
        </div>

        <Button
          colorBackground={"Blue"}
          colorText={"White"}
          text={"Ingresar"}
          onClick={this.login}
          icon={""}
        />

      </div>
    );
  }
}

export default EmailLogin;
