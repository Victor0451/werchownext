import React from "react";
import matchSorter from "match-sorter";
import Link from "next/link";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
// Import React Table
import ReactTable from "react-table";

const TablaPrestamosCaratula = ({
  data,
  capitalprest,
  intereses,
  cantprest,
  capconint,
  codigo,
}) => {
  const aprobarPrestamos = async (row) => {
    const id = row.original.ptm_id;

    await axios
      .put(`http://190.231.32.232:5002/api/sgi/prestamos/aprobarprestamo/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);

          //Router.push("/prestamos/aprobarprestamos");
          toastr.success("Se aprobo el prestamo con exito", "Atencion");

          //window.location.reload();

          setTimeout(() => {
            Router.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-4 mb-4">
      <hr />

      <div className=" jumbotron d-fex justify-content-between alert alert-primary border border-dark p-4">
        <h4 className="mb-4 ">
          <strong>
            <u>Resumen:</u>
          </strong>
        </h4>
        <div className="row">
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
                  width: 150,
                },
                {
                  Header: "Contrato",
                  id: "ptm_ficha",
                  accessor: (d) => d.ptm_ficha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_ficha"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Renovacion",
                  id: "ptm_renov",
                  accessor: (d) => d.ptm_renov,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_renov"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Capital Prestado",
                  id: "ptm_prestamo",
                  accessor: (d) => d.ptm_prestamo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_prestamo"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Cuotas",
                  id: "ptm_cuotas",
                  accessor: (d) => d.ptm_cuotas,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_cuotas"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "Interes",
                  id: "ptm_valcuota",
                  accessor: (d) => d.ptm_valcuota,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_valcuota"] }),
                  filterAll: true,
                  width: 85,
                },

                {
                  Header: "Estado",
                  id: "ptm_estado",
                  accessor: (d) => d.ptm_estado,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_estado"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Operador",
                  id: "ptm_op",
                  accessor: (d) => d.ptm_op,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_op"] }),
                  filterAll: true,
                  width: 120,
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
                {
                  Header: "Aciones",
                  id: "ptm_op",
                  accessor: (d) => d.ptm_op,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptm_op"] }),
                  filterAll: true,
                  width: 260,
                  Cell: (row) => (
                    <div>
                      {codigo === 1 ? (
                        <button
                          className="btn btn-success mr-1"
                          onClick={() => aprobarPrestamos(row)}
                        >
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </button>
                      ) : null}

                      <Link
                        href={{
                          pathname: "/prestamos/caratula",
                          query: {
                            id: row.original.ptm_id,
                          },
                        }}
                      >
                        <button
                          className="btn btn-primary mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Imprimir Caratula"
                        >
                          <i className="fa fa-print" aria-hidden="true"></i>
                        </button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/prestamos/legajovirtual/legajo",
                          query: {
                            id: `${row.original.ptm_ficha}-${row.original.ptm_fechasol}`,
                            contrato: row.original.ptm_ficha,
                            idprest: row.original.ptm_id,
                          },
                        }}
                      >
                        <button
                          className="btn btn-warning mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Legajo Virtual"
                        >
                          <i
                            className="fa fa-folder-open"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/prestamos/legajovirtual/subirarchivos",
                          query: {
                            ficha: row.original.ptm_ficha,
                          },
                        }}
                      >
                        <button
                          className="btn btn-info mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Subir Archivos"
                        >
                          <i className="fa fa-upload" aria-hidden="true"></i>
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
