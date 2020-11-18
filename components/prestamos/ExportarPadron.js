import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({ padron, desde, hasta }) => {
  const dataSet1 = padron;
  let filename = `Listado Prestamos Periodo ${desde} - ${hasta}`;

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
          <ExcelColumn label="FECHA" value="ptm_fechasol" />
          <ExcelColumn label="CONTRATO" value="ptm_ficha" />
          <ExcelColumn label="AFILIADO" value="ptm_afi" />
          <ExcelColumn label="RENOVACION" value="ptm_renov" />
          <ExcelColumn label="PRESTAMO" value="ptm_prestamo" />
          <ExcelColumn label="CUOTAS" value="ptm_cuotas" />
          <ExcelColumn label="CUOTA MENSUAL" value="ptm_valcuota" />
          <ExcelColumn label="ESTADO" value="ptm_estado" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default ExportarPadron;
