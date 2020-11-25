import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const Pagos = ({ pagos }) => {
  if (!pagos)
    return (
      <div className="container">
        <div className=" mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
          EL SOCIO NO REGISTRA PAGOS
        </div>
      </div>
    );

  return (
    <div className="container border border-dark alert alert-primary ">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>Pagos Realizados</u>
        </strong>
      </h2>
      <div className="border border-dark p-2 list">
        <ReactTable
          data={pagos}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Pagos Realizados",
              columns: [
                {
                  Header: "Tipo De Pago",

                  Cell: (row) => (
                    <div>
                      {row.original.DIA_PAG ? (
                        <div>Cuota</div>
                      ) : row.original.DIA_PAGO ? (
                        <div>Debito</div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Importe",
                  id: "IMPORTE",
                  accessor: (d) => d.IMPORTE,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Mes",
                  id: "MES",
                  accessor: (d) => d.MES,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["MES"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Año",
                  id: "ANO",
                  accessor: (d) => d.ANO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ANO"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Tipo De Pago",

                  Cell: (row) => (
                    <div>
                      {row.original.DIA_PAG ? (
                        <div>
                          {moment(row.original.DIA_PAG).format("DD/MM/YYYY")}
                        </div>
                      ) : row.original.DIA_PAGO ? (
                        <div>
                          {moment(row.original.DIA_PAGO).format("DD/MM/YYYY")}
                        </div>
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

export default Pagos;
