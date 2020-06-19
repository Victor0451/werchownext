import React from "react";
import matchSorter from "match-sorter";

// Import React Table
import ReactTable from "react-table";

const TablaPrestamos = ({
  data,
  capitalprest,
  intereses,
  cantprest,
  capconint,
}) => {
  return (
    <div className="mt-4 container">
      <hr className="mt-4 mb-4" />

      <div className="alert alert-primary border border-dark p-4">
        <h2 className="mb-4">
          <strong>
            <u>Resumen</u>
          </strong>
        </h2>

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
      </div>

      <hr className="mt-4 mb-4"/>

      <div className="border border-dark p-4">
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
                      {row.original.ptm_op === 4 ? (
                        <div>Maria Galian</div>
                      ) : row.original.ptm_op === 97 ? (
                        <div>Gisela Gimenez</div>
                      ) : row.original.ptm_op === 8 ? (
                        <div>Vanesa Gorosito</div>
                      ) : row.original.ptm_op === 7 ? (
                        <div>Marisa Carrizo</div>
                      ) : row.original.ptm_op === 77 ? (
                        <div>Silvia Juarez</div>
                      ) : row.original.ptm_op === 3 ? (
                        <div>Alejandra Tejerina</div>
                      ) : null}
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

export default TablaPrestamos;
