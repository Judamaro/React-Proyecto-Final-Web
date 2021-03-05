import { Icon } from "@material-ui/core";
import React, { Component } from "react";
import "./Textfield.css";
/* import { Email, Password } from "../Const/Const"; */

const icons = {
  search: "search",
};

function GetIcon(icon) {
  let iconImg = icons[icon] ? icons[icon] : "search";
  return iconImg;
}

//Input de texto, se especifica el label, tipo de input y si posee o no un icono
class Textfield extends Component {
  
  constructor() {
    super();
    this.state = {
      tipe: "",
      data: ""
    };
  }

  render() {
    
    const {label, type, icon} = this.props;

    return icon ? (
      <div className="o-input-icon-container">
        {/* En caso de tener icono se retorna un input con icon sobrepuesto */}
        <Icon className="o-icon-input">{GetIcon(icon)}</Icon>
        <input
          type={type}
          placeholder={label}
          className="o-input-text"
          style={{ paddingLeft: 32 }}
        />
      </div>
    ) : (
      //Input de texto generico
      <input type={type} placeholder={label} className="o-input-text" onChange={evt => this.props.change(evt, type)} />
    );
  }

  /* getData(evt) {

    this.setState({
      tipe: this.props.type,
      data: evt.target.value
    });

    this.setProp();

    console.log(evt.target.value);
    console.log(this.props.type);
    console.log(this.state);
  } */

  /* setProp = (e) => {
    this.props.dataInsert(this.state);
  } */
}
export default Textfield;
