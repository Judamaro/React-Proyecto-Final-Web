import Rating from "@material-ui/lab/Rating";
import React from "react";
import CardImage from "../../Images/Card/Card";
import Map from "../../Map/Map";
import ContentText from "../../Text/ContentText";
import LightText from "../../Text/LightText";
import "./ProviderInfo.css";

//Sección lateral con la información principal del proveedor
//Recibe la imagen, nombre, profesion, estrellas, descripción y dirección
function ProviderInfo({ img, name, profesion, numStars, description, adress }) {
  return (
    <div className="o-provider-container">
      {/* Imagen del proveedor circular */}
      <div className="o-image-container">
        <CardImage image={img} />
      </div>
      {/* Información personal del proveedor */}
      <div className="o-personal-info">
        <ContentText text={name} colorText={"BlueLight"} />
        <ContentText text={profesion} colorText={"Black"} />
        <Rating name="read-only" value={numStars} readOnly />
      </div>
      {/* Descripcion del proveedor */}
      <div className="o-buissnes-info">
        <ContentText text={"¿Quién soy?"} colorText={"BlueLight"} />
        <LightText text={description} />
        {/* Ubicación del proveedor */}
        <div className="o-position-info">
          <ContentText text={adress} colorText={"Black"} />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ProviderInfo;
