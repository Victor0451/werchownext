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
                Header: "Cod. Articulo",
                id: "COD_ART",
                accessor: (d) => d.COD_ART,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["COD_ART"] }),
                filterAll: true,
              },
              {
                Header: "Descripcion",
                id: "DESCRI_ART",
                accessor: (d) => d.DESCRI_ART,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["DESCRI_ART"] }),
                filterAll: true,
              },

              {
                Header: "Tamaño",
                id: "TAMA_LARGO",
                accessor: (d) => d.TAMA_LARGO,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["TAMA_LARGO"] }),
                filterAll: true,
              },

              {
                Header: "Stock ACT",
                id: "STOCK_ACT",
                accessor: (d) => d.STOCK_ACT,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["STOCK_ACT"] }),
                filterAll: true,
              },

              {
                Header: "Stock SRL",
                id: "STOCK_SRL",
                accessor: (d) => d.STOCK_SRL,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["STOCK_SRL"] }),
                filterAll: true,
              },

              {
                Header: "Caracteristica",
                id: "CARACT",
                accessor: (d) => d.CARACT,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["CARACT"] }),
                filterAll: true,
              },

              {
                Header: "Modelos",
                id: "MODELOS",
                accessor: (d) => d.MODELOS,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["MODELOS"] }),
                filterAll: true,
              },

              // {
              //   Header: "Precio",
              //   id: "PRECIO_ART",
              //   accessor: (d) => d.PRECIO_ART,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, { keys: ["PRECIO_ART"] }),
              //   filterAll: true,
              // },
              // {
              //   Header: "Fecha de Alta",
              //   id: "FECHA_ALTA",
              //   accessor: (d) => d.FECHA_ALTA,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, { keys: ["FECHA_ALTA"] }),
              //   filterAll: true,
              // },
              // {
              //   Header: "Fecha de Baja",
              //   id: "FECHA_BAJA",
              //   accessor: (d) => d.FECHA_BAJA,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, { keys: ["FECHA_BAJA"] }),
              //   filterAll: true,
              // },
              {
                Header: "Fecha de Actualizacion de Stock",
                id: "FECHA_UPDATE_STOCK",
                accessor: (d) => d.FECHA_UPDATE_STOCK,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["FECHA_UPDATE_STOCK"],
                  }),
                filterAll: true,
              },
              // {
              //   Header: "Operador",
              //   id: "NOMB_OPER",
              //   accessor: (d) => d.NOMB_OPER,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, {
              //       keys: ["NOMB_OPER"],
              //     }),
              //   filterAll: true,
              // },
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
