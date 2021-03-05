import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import CardImage from "../../../../Images/Card/Card";
import ContentText from "../../../../Text/ContentText";
import LightText from "../../../../Text/LightText";
import "./TableBodyProvider.css";
import Icon from "@material-ui/core/Icon";

//Contenido de la tabla principal
function  TableBodyProvider({ type, elements }) {
  return (
    <TableBody>
      {/* Se recorre el arreglo de objetos que se envia y se crean las filas */}
      {elements.map((element) => (
        <TableRow key={element.name}>
          <TableCell component="th" scope="row">
            {/* En caso de ser un producto, se estructura una imagen */}
            {type === "product" ? (
              <div className="o-body-content">
                <div className="o-image-product-container">
                  <div className="o-image-product">
                    <CardImage image={element.img} />
                  </div>
                  <LightText text={element.name} />
                </div>
              </div>
            ) : (
              <div className="o-body-content">
                <LightText text={element.name} />
              </div>
            )}
          </TableCell>

          <TableCell align="center">
            <div className="o-body-content">
              <ContentText
                text={`$ ${element.value} COP`}
                colorText={"Black"}
              />
            </div>
          </TableCell>
          <TableCell align="center">
            <div className="o-body-content">
              <div className="o-quantity-container">
                <Icon className="o-quantity-icon">remove_circle_outline</Icon>
                <LightText text={0} />
                <Icon className="o-quantity-icon">add_circle_outline</Icon>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableBodyProvider;
