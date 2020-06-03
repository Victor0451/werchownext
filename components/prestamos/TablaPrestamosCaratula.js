import React from "react";
import matchSorter from "match-sorter";
import Link from "next/link";

// Import React Table
import ReactTable from "react-table";

const TablaPrestamosCaratula = ({
  data,
  capitalprest,
  intereses,
  cantprest,
  capconint,
}) => {

  return (
    <div className="mt-4 mb-4">
      <hr />

      <div className="row jumbotron d-fex justify-content-between border border-dark p-2">
        <div className="col-md-4">
          <strong>
            <u>Cantidad de Prestamos</u>: {cantprest}
          </strong>
        </div>

        <div className="col-md-4">
          <strong>
            <u>Capital Prestado</u>: {capitalprest}
          </strong>
        </div>

        <div className="col-md-4">
          <strong>
            <u>Intereses Generados</u>: {intereses}
          </strong>
        </div>

        <div className="col-md-4 mt-4">
          <strong>
            <u>Capital Con Intereses</u>: {capconint}
          </strong>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      <div className="mt-4 mb-4 border border-dark">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Prestamos",
              columns: [
                {
                  Header: "Fecha De Solicitud",
                  id: "ptm_fechasol",
                  accessor: (d) => d.ptm_fechasol,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_fechasol"] }),
                  filterAll: true,
                },
                {
                  Header: "Contrato",
                  id: "ptm_ficha",
                  accessor: (d) => d.ptm_ficha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_ficha"] }),
                  filterAll: true,
                },
                {
                  Header: "Renovacion",
                  id: "ptm_renov",
                  accessor: (d) => d.ptm_renov,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_renov"] }),
                  filterAll: true,
                },
                {
                  Header: "Capital Prestado",
                  id: "ptm_prestamo",
                  accessor: (d) => d.ptm_prestamo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_prestamo"] }),
                  filterAll: true,
                },
                {
                  Header: "N° de Cuotas",
                  id: "ptm_cuotas",
                  accessor: (d) => d.ptm_cuotas,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_cuotas"] }),
                  filterAll: true,
                },
                {
                  Header: "Cuota Mensual",
                  id: "ptm_valcuota",
                  accessor: (d) => d.ptm_valcuota,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_valcuota"] }),
                  filterAll: true,
                },

                {
                  Header: "Estado",
                  id: "ptm_estado",
                  accessor: (d) => d.ptm_estado,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_estado"] }),
                  filterAll: true,
                },
                {
                  Header: "Operador",
                  id: "ptm_op",
                  accessor: (d) => d.ptm_op,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_op"] }),
                  filterAll: true,
                  Cell: (row) => (
                    <div>
                      <Link
                        href={{
                          pathname: "/prestamos/caratula",
                          query: {
                            id: row.original.ptm_id,
                          },
                        }}
                      >
                        <button className="btn btn-primary">
                          Imprimir Caratula
                        </button>
                      </Link>
                    </div>
                  ),
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

export default TablaPrestamosCaratula;
