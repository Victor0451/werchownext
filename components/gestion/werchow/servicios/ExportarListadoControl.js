import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarListadoControl = ({
  listado,
  rango
}) => {
  const dataSet1 = listado;

  let filename = `Listado de control de ordenes, periodo: ${moment(rango.desde).format("DD/MM/YYYY")} - ${moment(rango.hasta).format("DD/MM/YYYY")}`;

  return (
    <ExcelFile
      element={
        <button className="btn btn-success">
          Exportar Excel
        </button>
      }
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="PRACTICAS">
        <ExcelColumn label="FECHA" value="FECHA" />
        <ExcelColumn label="HORA" value="HORA" />
        <ExcelColumn label="N° ORDEN" value="ORDEN" />
        <ExcelColumn label="SERVICIO" value="SERVICIO" />
        <ExcelColumn label="CONTRATO" value="CONTRATO" />
        <ExcelColumn label="PLAN" value="PLAN" />
        <ExcelColumn label="IMPORTE" value="IMPORTE" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarListadoControl;
