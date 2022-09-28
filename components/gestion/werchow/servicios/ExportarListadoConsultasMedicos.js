import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarListadoConsultasMedicos = ({
  listado,
  rango
}) => {
  const dataSet1 = listado;

  let filename = `Listado de control prestador: ${rango.medico}, periodo: ${moment(rango.desde).format("DD/MM/YYYY")} - ${moment(rango.hasta).format("DD/MM/YYYY")}`;

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
        <ExcelColumn label="SERVICIO" value="SERVICIO" />
        <ExcelColumn label="N° ORDEN" value="ORDEN" />
        <ExcelColumn label="NOMBRE" value="NOMBRE" />
        <ExcelColumn label="VALOR CONSULTA" value="VALOR" />
        <ExcelColumn label="COSEGURO" value="COSEGURO" />
        <ExcelColumn label="WERCHOW" value="WERCHOW" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarListadoConsultasMedicos;
