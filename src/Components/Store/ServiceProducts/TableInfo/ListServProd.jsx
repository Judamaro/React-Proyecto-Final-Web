import { Table, TableContainer } from "@material-ui/core";
import React from "react";
import "./ListServProd.css";
import TableBodyProvider from "./TableBody/TableBodyProvider";
import TableHeadProvider from "./TableHead/TableHeadProvider";

//La lista de la tabla recibe un tipo (Servicio, producto) y el arreglo de objetos
function ListServProd({ type, elements }) {
  return (
    //Tabla condensada
    <TableContainer>
      <Table size="small">
        {/* Cabecera de la tabla, titulos */}
        <TableHeadProvider type={type} />
        {/* Contenido de la tabla, filas */}
        <TableBodyProvider type={type} elements={elements} />
      </Table>
    </TableContainer>
  );
}

export default ListServProd;
