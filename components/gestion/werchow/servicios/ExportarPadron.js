import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({
  listado,
  desde,
  hasta,
}) => {
  const dataSet1 = listado;

  let filename = `Liquidacion Mendez Mara, periodo: ${moment(desde).format("DD/MM/YYYY")} - ${moment(hasta).format("DD/MM/YYYY")}`;

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
        <ExcelColumn label="CONTRATO" value="CONTRATO" />
        <ExcelColumn label="50%" value="VSIST" />
        <ExcelColumn label="100%" value="VNOM" />
        <ExcelColumn label="75%" value="VLIQ" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPadron;
