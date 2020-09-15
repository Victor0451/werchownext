import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";
import Link from "next/link";

const ListadoServiciosHistorico = ({ listado }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2 className="mb-4">
        <strong>
          <u>Listado De Servicios</u>
        </strong>
      </h2>
      <div className="list border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                {
                  Header: "Nota Cred",
                  id: "NRO_NOTACR",
                  accessor: (d) => d.NRO_NOTACR,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NRO_NOTACR"] }),
                  filterAll: true,
                },
                {
                  Header: "Fecha",
                  id: "FEC_CREDIT",
                  accessor: (d) => d.FEC_CREDIT,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["FEC_CREDIT"] }),
                  filterAll: true,
                },
                {
                  Header: "Extinto",
                  id: "EXINTO",
                  accessor: (d) => d.EXINTO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["EXINTO"] }),
                  filterAll: true,
                },
                {
                  Header: "DNI",
                  id: "DNI_EXIN",
                  accessor: (d) => d.DNI_EXIN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["DNI_EXIN"] }),
                  filterAll: true,
                },
                {
                  Header: "Edad",
                  id: "EDAD_EXIN",
                  accessor: (d) => d.EDAD_EXIN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["EDAD_EXIN"],
                    }),
                  filterAll: true,
                  width: 80
                },
                {
                  Header: "Lugar",
                  id: "LUGAR",
                  accessor: (d) => d.LUGAR,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["LUGAR"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "Servicio",
                  id: "TIPO_SERV",
                  accessor: (d) => d.TIPO_SERV,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["TIPO_SERV"],
                    }),
                  filterAll: true,
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

export default ListadoServiciosHistorico;
