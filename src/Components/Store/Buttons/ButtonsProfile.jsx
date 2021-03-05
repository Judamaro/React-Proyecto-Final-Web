import React from "react";
import "./ButtonsProfile.css";
import Button from "../../Button/Button";

//Botones de la tienda para domicilio y en el local
function ButtonsProfile() {
  return (
    <div className="o-buttons-container">
      <Button
        colorBackground={"Blue"}
        colorText={"White"}
        text={"A domicilio"}
        onClick={""}
        icon={""}
      />

      <Button
        colorBackground={"Background"}
        colorBorder={"Blue"}
        colorText={"Blue"}
        text={"En el local"}
        onClick={""}
        icon={""}
      />
    </div>
  );
}

export default ButtonsProfile;
