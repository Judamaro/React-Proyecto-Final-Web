import React from "react";
import Button from "../../Button/Button";
import "./Social.css";

function SocialLogin() {
  //Botones de redes sociales
  return (
    <div className="o-social-login-container">
      <Button
        colorBackground={"White"}
        colorText={"White"}
        text={"Ingresar"}
        onClick={""}
        icon={"Gmail"}
      />

      <Button
        colorBackground={"White"}
        colorText={"White"}
        text={"Ingresar"}
        onClick={""}
        icon={"Facebook"}
      />
      <Button
        colorBackground={"White"}
        colorText={"White"}
        text={"Ingresar"}
        onClick={""}
        icon={"Phone"}
      />
    </div>
  );
}

export default SocialLogin;
