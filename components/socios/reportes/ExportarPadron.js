import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({ padron, tipocartera, sucursal }) => {

  const dataSet1 = padron;
  let filename = `Padron ${tipocartera} ${sucursal} ${moment().format(
    "DD-MM-YYYY"
  )}`;

  return (
    <ExcelFile
      element={<button className="btn btn-success">Exportar A Excel</button>}
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="PADRON">
        <ExcelColumn label="SUCURSAL" value="SUCURSAL" />
        <ExcelColumn label="CONTRATO" value="CONTRATO" />
        <ExcelColumn label="APELLIDO" value="APELLIDOS" />
        <ExcelColumn label="NOMBRE" value="NOMBRES" />
        <ExcelColumn label="CALLE" value="CALLE" />
        <ExcelColumn label="N°" value="NRO_CALLE" />
        <ExcelColumn label="BARRIO" value="BARRIO" />
        <ExcelColumn label="LOCALIDAD" value="LOCALIDAD" />
        <ExcelColumn label="TELEFONO" value="TELEFONO" />
        <ExcelColumn label="MOVIL" value="MOVIL" />
        <ExcelColumn label="CUOTA" value="IMPORTE" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPadron;
