import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";


function ModalHistorial({ historial }) {
  return (
    <div
      class="modal fade"
      id="ModalHistorial"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Historial Parcelas
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ReactTable
              data={historial}
              filterable
              defaultFilterMethod={(filter, row) =>
                row[filter.id] === filter.value
              }
              columns={[
                {
                  Header: "Historial Parcelas",
                  columns: [
                    {
                      Header: "#",
                      filterAll: false,
                      width: 50,
                      Cell: (row) => <div>{row.index}</div>,
                    },
                    {
                      Header: "Fecha",
                      id: "fecha",
                      accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                      filterAll: true,
                    },
                    {
                      Header: "N° Servicio",
                      id: "idservicio",
                      accessor: (d) => d.idservicio,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, {
                          keys: ["idservicio"],
                        }),
                      filterAll: true,
                    },
                    {
                      Header: "HC",
                      id: "contrato",
                      accessor: (d) => d.contrato,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["contrato"] }),
                      filterAll: true,
                    },
                    {
                      Header: "DNI",
                      id: "dni",
                      accessor: (d) => d.dni,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["dni"] }),
                      filterAll: true,
                    },
                    {
                      Header: "Lugar",
                      id: "lugar",
                      accessor: (d) => d.lugar,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["lugar"] }),
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
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalHistorial;
