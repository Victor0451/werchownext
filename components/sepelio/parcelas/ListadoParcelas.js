import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

import axios from "axios";

const ListadoParcelas = ({ selcasoparcela }) => {
  const [parcelas, guardarParcelas] = useState(null);

  const mostrarParcelas = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/parcelas/parcelaslibres`)
      .then((res) => {
        guardarParcelas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    mostrarParcelas();
  }, []);

  if (!parcelas)
    return (
      <div className="container mt-4 alert alert-danger p-4 border border-dark">
        No Hay Stock De Parcelas
      </div>
    );

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <div className="row mt-4 mb-4 border border-dark p-4">
        <div className="col-md-12">
          <h4 className="">
            <strong>
              <u>Total de parcelas Disponibles:</u> {parcelas.length}
            </strong>
          </h4>
        </div>
      </div>

      <div className="list border border-dark ">
        <ReactTable
          data={parcelas}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Parcelas",
              columns: [
                {
                  Header: "#",
                  filterAll: false,
                  width: 50,
                  Cell: (row) => <div>{row.index}</div>,
                },
                {
                  Header: "Parcela",
                  id: "parcela",
                  accessor: (d) => d.parcela,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["parcela"] }),
                  filterAll: true,
                },
                {
                  Header: "Manzana",
                  id: "mza",
                  accessor: (d) => d.mza,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mza"] }),
                  filterAll: true,
                },
                {
                  Header: "Lote",
                  id: "lote",
                  accessor: (d) => d.lote,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lote"] }),
                  filterAll: true,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Actualizar Stock"
                        onClick={() => selcasoparcela(row)}
                        data-dismiss="modal"
                      >
                        <i class="fa fa-pencil-square" aria-hidden="true"></i>
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
    </div>
  );
};

export default ListadoParcelas;
