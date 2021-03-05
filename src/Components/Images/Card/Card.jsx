import React from 'react'
import './Card.css'

function CardImage({image}){
    //Imagen circular mostrada en la card
    return(
        <img src={image} alt="Proveedor" className="o-image"/>
    )   
}

export default CardImage;