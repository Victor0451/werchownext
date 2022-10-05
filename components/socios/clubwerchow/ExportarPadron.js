import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({
  listado,
  titulo
}) => {
  const dataSet1 = listado;

  let filename = `${titulo}: ${moment().format("DD/MM/YYYY")}`;

  return (
    <ExcelFile
      element={
        <button className="btn btn-success">
          Exportar Excel
        </button>
      }
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="SOLICITUDES DEL SORTEO">
        <ExcelColumn label="FECHA SOLICITUD" value="fecha_solicitud" />
        <ExcelColumn label="APELLIDO" value="apellido" />
        <ExcelColumn label="NOMBRE" value="nombre" />
        <ExcelColumn label="DNI" value="dni" />
        <ExcelColumn label="MAIL" value="mail" />
        <ExcelColumn label="TELEFONO" value="telefono" />
        <ExcelColumn label="OBRA SOCIAL" value="obra_soc" />
        <ExcelColumn label="SOCIO" value="socio" />
        <ExcelColumn label="NO SOCIO" value="nosocio" />
        <ExcelColumn label="REFERIDO" value="referido" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPadron;
