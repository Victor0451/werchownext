import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({ listado, camp }) => {
  const dataSet1 = listado;

  let filename = `Gestion Casos de ${camp} ${moment().locale("es-es").format("MMMM-YYYY")}`;

  return (
    <ExcelFile
      element={
        <button className="ml-1 btn btn-success btn-sm">
          Exportar Excel
        </button>
      }
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="ALTAS">
        <ExcelColumn label="CONTRATO" value="contrato" />
        <ExcelColumn label="APELLIDO" value="apellido" />
        <ExcelColumn label="NOMBRE" value="nombre" />
        <ExcelColumn label="CALLE" value="calle" />
        <ExcelColumn label="N°" value="nro_calle" />
        <ExcelColumn label="BARRIO" value="barrio" />
        <ExcelColumn label="LOCALIDAD" value="localidad" />
        <ExcelColumn label="TELEFONO" value="telefono" />
        <ExcelColumn label="MOVIL" value="movil" />
        <ExcelColumn label="CUOTA" value="cuota" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPadron;
