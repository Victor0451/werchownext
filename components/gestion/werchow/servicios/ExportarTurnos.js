import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarTurnos = ({
  listado,
}) => {
  const dataSet1 = listado;

  let filename = `Listado de turnos`;

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
        <ExcelColumn label="FECHA" value="fecha" />
        <ExcelColumn label="HORA" value="hora" />
        <ExcelColumn label="PACIENTE" value="paciente" />
        <ExcelColumn label="TELEFONO" value="telefono" />
        <ExcelColumn label="OBRA SOCIAL" value="obra_soc" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarTurnos;
