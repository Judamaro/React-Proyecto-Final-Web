import React, { Component } from "react";
import ImageProfile from "../../Images/Profile/ImageProfile";
import Schedule from "../Schedule/Schedule";
import "./Profile.css";

//Perfil del usuario con un banner del establecimiento
class Profile extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="o-profile-container">
        <div className="o-image-profile-container">
          {/* Banner de la tienda */}
          <ImageProfile image={this.props.img_dir} alt="Salon de belleza" />
        </div>
        {/* Horario laboral del proveedor */}
        <div className="o-schedule-container">
          <Schedule idTienda={this.props.idTienda} nameTienda={this.props.nameTienda}/>
        </div>
      </div>
    );
  }
}

export default Profile;
