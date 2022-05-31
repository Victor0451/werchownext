import React from "react";
import matchSorter from "match-sorter";
import ReactTable from "react-table";
import moment from "moment";

const HistorialActualizaciones = ({ historial }) => {

  if (historial.length === 0)
    return (
      <div className="alert alert-warning text-center text-uppercase border border-dark">
        No existen registros en este historial
      </div>
    );

  return (
    <div className="container list">
      <div className=" mt-4 border border-dark list">
        <ReactTable
          data={historial}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Historial",
              columns: [
                {
                  Header: "Fecha Registro",
                  id: "fecha_carga",
                  accessor: (d) => moment(d.fecha_carga).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha_carga"] }),
                  filterAll: true,
                },
                {
                  Header: "Fecha Recepcion",
                  id: "fecha_recepcion",
                  accessor: (d) =>
                    moment(d.fecha_recepcion).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha_recepcion"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "Stock Anterior",
                  id: "stock_anterior",
                  accessor: (d) => d.stock_anterior,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["stock_anterior"],
                    }),
                  filterAll: true,
                },

                {
                  Header: "Stock Nuevo",
                  id: "stock_nuevo",
                  accessor: (d) => d.stock_nuevo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["stock_nuevo"] }),
                  filterAll: true,
                },

                {
                  Header: "Remito",
                  id: "remito",
                  accessor: (d) => d.remito,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["remito"] }),
                  filterAll: true,
                },

                {
                  Header: "Operador",
                  id: "operador",
                  accessor: (d) => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["operador"] }),
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

export default HistorialActualizaciones;
