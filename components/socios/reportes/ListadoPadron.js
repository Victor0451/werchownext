import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";

const ListadoPadron = ({ padron, cartera, zona }) => {
  const [tipocartera, guardarTipoCartera] = useState(null);
  const [sucursal, guardarSucursal] = useState(null);

  const morosidad = (padron) => {

    let total = 0;

    for (let i = 0; i < padron.length; i++) {
      total += padron[i].IMPORTE
    }

    return total;
  }

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

  if (!padron) return <Spinner />;

  return (
    <div className="container mt-4 border border-dark ">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>
            Padron {tipocartera} - Sucursal {sucursal}
          </u>
        </strong>
      </h2>
      <div className="border border-dark p-2">

        <div className="mt-4 mb-4 alert alert-info text-center text-uppercase">
          <div className="d-flex justify-content-between">
            <div className="col-md-6"><u>Total de Socios</u>: {padron.length}</div>
            <div className="col-md-6"><u>Morosidad</u>:$ {morosidad(padron)}</div>
          </div>
        </div>

        <ReactTable
          data={padron}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Padron",
              columns: [
                //   {
                //     Header: "Sucursal",
                //     id: "SUCURSAL",
                //     accessor: (d) => d.SUCURSAL,
                //     filterMethod: (filter, rows) =>
                //       matchSorter(rows, filter.value, { keys: ["SUCURSAL"] }),
                //     filterAll: true,
                //     width: 200,
                //   },
                {
                  Header: "Contrato",
                  id: "CONTRATO",
                  accessor: (d) => d.CONTRATO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Apellido",
                  id: "APELLIDOS",
                  accessor: (d) => d.APELLIDOS,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Nombre",
                  id: "NOMBRES",
                  accessor: (d) => d.NOMBRES,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
                  filterAll: true,
                  width: 200,
                },

                {
                  Header: "Telefono",
                  id: "TELEFONO",
                  accessor: (d) => d.TELEFONO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["TELEFONO"] }),
                  filterAll: true,
                  width: 200,
                },

                {
                  Header: "Celular",
                  id: "MOVIL",
                  accessor: (d) => d.MOVIL,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["MOVIL"] }),
                  filterAll: true,
                  width: 200,
                },

                {
                  Header: "Cuota",
                  id: "IMPORTE",
                  accessor: (d) => d.IMPORTE,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                  filterAll: true,
                  width: 100,
                },
              ],
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    </div>
  );
};

export default ListadoPadron;
