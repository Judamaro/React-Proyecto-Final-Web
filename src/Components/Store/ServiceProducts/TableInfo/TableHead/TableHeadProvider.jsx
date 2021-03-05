import { TableCell, TableRow, TableHead } from "@material-ui/core";
import React from "react";
import ContentText from "../../../../Text/ContentText";
import "./TableHeadProvider.css";

//Cabecera de la tabla, recibe un tipo (Servicio, producto)
function TableHeadProvider({ type }) {
  return (
    //Se establecen los titulos en la cabecera de la tabla
    <TableHead>
      <TableRow>
        {type === "service" ? (
          <TableCell>
            <div className="o-head-title">
              <ContentText text={"SERVICIOS"} colorText={"Black"} />
            </div>
          </TableCell>
        ) : (
          <TableCell>
            <div className="o-head-title">
              <ContentText text={"PRODUCTOS"} colorText={"Black"} />
            </div>
          </TableCell>
        )}
        <TableCell>
          <div className="o-head-title">
            <ContentText text={"VALOR"} colorText={"Black"} />
          </div>
        </TableCell>
        <TableCell>
          <div className="o-head-title">
            <ContentText text={"CANTIDAD"} colorText={"Black"} />
          </div>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeadProvider;
