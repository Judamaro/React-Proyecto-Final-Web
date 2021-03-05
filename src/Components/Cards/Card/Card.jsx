import React from "react";
import Rating from '@material-ui/lab/Rating';
import CardImage from "../../Images/Card/Card";
import LightText from "../../Text/LightText";
import ContentText from "../../Text/ContentText";
import "./Card.css";

function Card({ type, name, profesion, numStars, image, onClick }) {
  //Estilo de las card mostradas en las tiendas, recibe el numero de estrellas el tipo de la tienda, el nombre del proveedor, la profesión, la calificación una imagen y un onClick
  return (
    <div className="o-card-container" onClick={onClick}>
      <div className="o-card-info">
        <LightText text={type} />
        <ContentText text={name} colorText={"BlueLight"} />
        <ContentText text={profesion} colorText={"Black"} />
        <Rating name="read-only" value={numStars} readOnly />
      </div>
      <div className="o-card-image">
        <CardImage image={image} />
      </div>
    </div>
  );
}

export default Card;
