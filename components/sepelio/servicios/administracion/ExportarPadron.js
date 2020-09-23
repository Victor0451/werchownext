import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({ padron }) => {
  const dataSet1 = padron;
  let filename = `Servicios No Impactados - ${moment().format("DD-MM-YYYY")}`;

  return (
    <div>
      <ExcelFile
        element={
          <button className="btn btn-block btn-success">
            Exportar A Excel
          </button>
        }
        filename={filename}
      >
        <ExcelSheet data={dataSet1} name="PADRON">
          <ExcelColumn label="EMPRESA" value="empresa" />
          <ExcelColumn label="CONTRATO" value="contrato" />
          <ExcelColumn label="DIFUNTO" value="difunto" />
          <ExcelColumn label="ESTADO FICHA" value="estado_ficha" />
          <ExcelColumn
            label="FECHA FALLECIMIENTO"
            value="fecha_fallecimiento"
          />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default ExportarPadron;
