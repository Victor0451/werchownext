import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarListadoUsosPorPrestador = ({
  listado,
  rango
}) => {
  const dataSet1 = listado;

  let filename = `Listado de control usos por prestador: periodo: ${moment(rango.desde).format("DD/MM/YYYY")} - ${moment(rango.hasta).format("DD/MM/YYYY")}`;

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
        <ExcelColumn label="SUCURSAL" value="SUC" />
        <ExcelColumn label="PRESTADOR" value="NOMBRE" />
        <ExcelColumn label="USOS" value="USOS" />
        <ExcelColumn label="IMPORTE" value="IMPORTE" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarListadoUsosPorPrestador;
