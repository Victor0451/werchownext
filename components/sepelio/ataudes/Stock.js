import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import axios from "axios";

// Import React Table
import ReactTable from "react-table";

const Stock = ({ selcaso }) => {
  const [ataudes, guardarAtaudes] = useState(null);

  const mostrarAtaudes = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/ataudes/cantidad`)
      .then((res) => {
        let ataudes = res.data;
        guardarAtaudes(ataudes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    mostrarAtaudes();
  }, []);

  if (!ataudes)
    return (
      <div className="alert alert-danger p-4 border border-dark">
        No Hay Stock De Ataudes
      </div>
    );
  return (
    <div className="container">
      <ReactTable
        data={ataudes}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "STOCK DE ATAUDES",
            columns: [
              {
                Header: "Ataud",
                id: "nombre",
                accessor: (d) => d.nombre,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["nombre"] }),
                filterAll: true,
              },
              {
                Header: "Medidas",
                id: "medidas",
                accessor: (d) => d.medidas,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["medidas"] }),
                filterAll: true,
              },

              {
                Header: "Uso",
                id: "uso",
                accessor: (d) => d.uso,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["uso"] }),
                filterAll: true,
              },

              {
                Header: "Fabricante",
                id: "fabricante",
                accessor: (d) => d.fabricante,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["fabricante"] }),
                filterAll: true,
              },

              {
                Header: "Stock",
                id: "stock",
                accessor: (d) => d.stock,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["stock"] }),
                filterAll: true,
              },

              {
                Header: "Estado",
                id: "estado",
                accessor: (d) => d.estado,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["estado"] }),
                filterAll: true,
              },

              {
                Header: "Acciones",

                Cell: (row) => (
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lgfmn"
                      onClick={() => selcaso(row)}
                      data-dismiss="modal"
                    >
                      Seleccionar
                    </button>
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
  );
};

export default Stock;
