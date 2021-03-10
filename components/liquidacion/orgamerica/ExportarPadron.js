import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({ listado }) => {
  const dataSet1 = listado;

  let filename = `Pagos Org. America ${moment()
    .locale("es-es")
    .format("MMMM-YYYY")}`;

  return (
    <ExcelFile
      element={
        <button className="btn btn-success">
          Exportar Excel
        </button>
      }
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="ALTAS">
        <ExcelColumn label="CONTRATO" value="CONTRATO" />
        <ExcelColumn label="APELLIDO" value="APELLIDOS" />
        <ExcelColumn label="NOMBRE" value="NOMBRES" />
        <ExcelColumn label="CALLE" value="CALLE" />
        <ExcelColumn label="N°" value="NRO_CALLE" />
        <ExcelColumn label="BARRIO" value="BARRIO" />
        <ExcelColumn label="TELEFONO" value="TELEFONO" />
        <ExcelColumn label="MOVIL" value="MOVIL" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPadron;
