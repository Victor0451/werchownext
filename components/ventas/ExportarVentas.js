import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarVentas = ({ padron }) => {
  const dataSet1 = padron;
  let filename = `Listado Ventas ${moment().format("DD-MM-YYYY")}`;
  return (
    <ExcelFile
      element={<button className="btn btn-primary">Exportar A Excel</button>}
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="PADRON">
        <ExcelColumn label="EMPRESA" value="prod_empre" />
        <ExcelColumn label="CONTRATO" value="prod_afiliado" />
        <ExcelColumn label="APELLIDO" value="prod_apeafi" />
        <ExcelColumn label="NOMBRE" value="prod_nomafi" />
        <ExcelColumn label="DNI" value="prod_dniafi" />
        <ExcelColumn label="TIPO PAGO" value="prod_pago" />
        <ExcelColumn label="RECIBO" value="prod_recibo" />
        <ExcelColumn label="CUOTA" value="prod_monto" />
        <ExcelColumn label="ESTADO VENTA" value="prod_estado" />
        <ExcelColumn label="CARGA FOX" value="carga" />
        <ExcelColumn label="PAGO FOX" value="pago" />
        <ExcelColumn label="ASESOR" value="usu_nick" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarVentas;
