import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Legajo from "../../../components/socios/ficha/Legajo";
import Pagos from "../../../components/socios/ficha/Pagos";
import axios from "axios";

const ListadoSocio = ({ listado, flag }) => {
  const traerPagos = async (contrato) => {
    await axios
      .get(`http://190.231.32.232:5002/api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagosBco = async (contrato) => {
    await axios
      .get(`http://190.231.32.232:5002/api/werchow/pagobco/pagobco/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagosM = async (contrato) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/werchow/pagos/pagosmutual/${contrato}`
      )
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagosBcoM = async (contrato) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/werchow/pagobco/pagobcom/${contrato}`
      )
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);

  const buscarTitular = async (row) => {
    // guardarFicha(null);
    // guardarPagos(null);
    document.getElementById("exampleModal").hidden = false;

    if (flag === "W") {
      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titular/${row.original.CONTRATO}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          console.log(ficha);
          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagos(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBco(ficha.CONTRATO);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "M") {
      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titularm/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagosM(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBcoM(ficha.CONTRATO);
          }
          document.getElementById("exampleModal").remove("show");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const hideModal = () => {
    document.getElementById("exampleModal")[0]
  };

  if (!listado) return <Spinner />;

  return (
    <div className="container mt-4 border border-dark ">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>Padron</u>
        </strong>
      </h2>
      <div className="border border-dark p-2">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Padron",
              columns: [
                // {
                //   Header: "Sucursal",
                //   id: "SUCURSAL",
                //   accessor: (d) => d.SUCURSAL,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, { keys: ["SUCURSAL"] }),
                //   filterAll: true,
                //   width: 200,
                // },
                {
                  Header: "Contrato",
                  id: "CONTRATO",
                  accessor: (d) => d.CONTRATO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Apellido",
                  id: "APELLIDOS",
                  accessor: (d) => d.APELLIDOS,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Nombre",
                  id: "NOMBRES",
                  accessor: (d) => d.NOMBRES,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
                  filterAll: true,
                  width: 200,
                },

                {
                  Header: "Cuota",
                  id: "IMPORTE",
                  accessor: (d) => d.IMPORTE,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Acciones",
                  width: 150,
                  Cell: (row) => (
                    <div>
                      <button
                        className="btn  btn-primary"
                        onClick={() => buscarTitular(row)}
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Ver Ficha
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header alert alert-primary">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Legajo Del Socio</u>
                </strong>
              </h2>
              <button
                type="button"
                className="close"
                //data-dismiss="modal"
                //aria-label="Close"
                onClick={hideModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <div id="solicitud" className="mt-4 container ">
                <div>
                  <Legajo ficha={ficha} />

                  <hr className="mt-4 mb-4" />

                  <Pagos pagos={pagos} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoSocio;
