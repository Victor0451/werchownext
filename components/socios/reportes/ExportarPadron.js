import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPadron = ({ padron, cartera, zona }) => {
  const [tipocartera, guardarTipoCartera] = useState(null);
  const [sucursal, guardarSucursal] = useState(null);

  const idPadron = () => {
    if (cartera === 1) {
      guardarTipoCartera("Atrasado 1000");
    } else if (cartera === 2) {
      guardarTipoCartera("Atrasado Tarjeta");
    } else if (cartera === 3) {
      guardarTipoCartera("Atrasado Banco");
    } else if (cartera === 4) {
      guardarTipoCartera("Moroso 1001");
    } else if (cartera === 5) {
      guardarTipoCartera("Morosos Tarjetas");
    }

    if (zona === 1) {
      guardarSucursal("Casa Central");
    } else if (zona === 3) {
      guardarSucursal("Palpala");
    } else if (zona === 5) {
      guardarSucursal("Perico");
    } else if (zona === 60) {
      guardarSucursal("San Pedro");
    }
  };

  useEffect(() => {
    idPadron();
  }, []);

  const dataSet1 = padron;
  let filename = `Padron ${tipocartera} ${sucursal} ${moment().format(
    "DD-MM-YYYY"
  )}`;

  return (
    <ExcelFile
      element={<button className="btn btn-primary">Exportar A Excel</button>}
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="PADRON">
        <ExcelColumn label="SUCURSAL" value="SUCURSAL" />
        <ExcelColumn label="CONTRATO" value="CONTRATO" />
        <ExcelColumn label="APELLIDO" value="APELLIDOS" />
        <ExcelColumn label="NOMBRE" value="NOMBRES" />
        <ExcelColumn label="CALLE" value="CALLE" />
        <ExcelColumn label="N°" value="NRO_CALLE" />
        <ExcelColumn label="BARRIO" value="BARRIO" />
        <ExcelColumn label="LOCALIDAD" value="LOCALIDAD" />
        <ExcelColumn label="TELEFONO" value="TELEFONO" />
        <ExcelColumn label="MOVIL" value="MOVIL" />
        <ExcelColumn label="CUOTA" value="IMPORTE" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPadron;
