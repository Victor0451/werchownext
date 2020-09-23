import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";

const ListadoServiciosSinImpactar = ({ listado }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <div className="row  mb-4 border border-dark p-4">
        <div className="col-md-6">
          <h4 className="">
            <strong>
              <u>Total de servicios:</u> {listado.length}
            </strong>
          </h4>
        </div>
      </div>

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
                  Header: "#",
                  filterAll: false,
                  width: 50,
                  Cell: (row) => <div>{row.index}</div>,
                },
                {
                  Header: "Empresa",
                  id: "empresa",
                  accessor: (d) => d.empresa,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["empresa"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Ficha",
                  id: "contrato",
                  accessor: (d) => d.contrato,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["contrato"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Difunto",
                  id: "difunto",
                  accessor: (d) => d.difunto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["difunto"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Estado Ficha",
                  id: "estado_ficha",
                  accessor: (d) => d.estado_ficha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["estado_ficha"],
                    }),
                  filterAll: true,
                },

                {
                  Header: "Fecha de Fallecimiento",
                  id: "fecha_fallecimiento",
                  accessor: (d) => d.fecha_fallecimiento,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha_fallecimiento"],
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

export default ListadoServiciosSinImpactar;
