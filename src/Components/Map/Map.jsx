import React from "react";
import "./Map.css";

function Map() {
  //Sección del mapa que se muestra el la card de la tienda del proveedor
  return (
    <iframe
      className="o-map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5632.648396032865!2d-76.52495534497226!3d3.3785457000321246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1604421250410!5m2!1ses!2sco"
      title="Store map"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  );
}

export default Map;
