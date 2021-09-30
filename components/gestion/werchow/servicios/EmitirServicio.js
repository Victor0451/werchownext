import React from "react";
import Spinner from "../../../layout/Spinner";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import OpcionesServicios from "./OpcionesServicios";

const EmitirServicio = ({ pagos, adhs, ficha, socio, selectSocio }) => {
  if (!ficha) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary p-4 mt-4">
      <div className="row">
        <div className="col-md-8">
          <h3>
            <strong>
              <u>Afiliado</u>: {ficha[0].CONTRATO} - {ficha[0].APELLIDOS},{" "}
              {ficha[0].NOMBRES}
            </strong>
          </h3>
        </div>
        <div className="col-md-4">
          <a
            className="btn btn-block btn-danger btn-sm"
            href="/gestion/werchow/servicios/emision"
          >
            Cancelar
          </a>
        </div>
      </div>

      <div className="border border-dark mt-4 p-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4 text-center">
              <strong>
                <u>Historial de Pagos</u>
              </strong>
            </h4>

            {pagos ? (
              <div className="list">
                <ReactTable
                  data={pagos}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    row[filter.id] === filter.value
                  }
                  columns={[
                    {
                      Header: "Pagos",
                      columns: [
                        {
                          Header: "Mes",
                          id: "MES",
                          accessor: (d) => d.MES,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["MES"],
                            }),
                          filterAll: true,
                          width: 50,
                        },
                        {
                          Header: "Año",
                          id: "ANO",
                          accessor: (d) => d.ANO,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["ANO"],
                            }),
                          filterAll: true,
                        },
                        {
                          Header: "Importe",
                          id: "IMPORTE",
                          accessor: (d) => d.IMPORTE,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["IMPORTE"],
                            }),
                          filterAll: true,
                          width: 80,
                        },
                        {
                          Header: "Serie",
                          id: "SERIE",
                          accessor: (d) => d.SERIE,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["SERIE"],
                            }),
                          filterAll: true,
                          width: 50,
                        },
                        {
                          Header: "Recibo",
                          id: "NRO_RECIBO",
                          accessor: (d) => d.NRO_RECIBO,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["NRO_RECIBO"],
                            }),
                          filterAll: true,
                        },
                        {
                          Header: "Fecha",
                          id: "DIA_PAG",
                          accessor: (d) => d.DIA_PAG,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["DIA_PAG"],
                            }),
                          filterAll: true,
                        },
                      ],
                    },
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
              </div>
            ) : null}
          </div>

          <div className="col-md-6">
            <h4 className="mb-4 text-center">
              <strong>
                <u>Adherentes Registrados</u>
              </strong>
            </h4>

            {adhs ? (
              <div className="list">
                <ReactTable
                  data={ficha.concat(adhs)}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    row[filter.id] === filter.value
                  }
                  columns={[
                    {
                      Header: "Integrantes de la Ficha",
                      columns: [
                        {
                          Header: "Apellido",
                          id: "APELLIDOS",
                          accessor: (d) => d.APELLIDOS,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["APELLIDOS"],
                            }),
                          filterAll: true,
                          width: 100,
                        },
                        {
                          Header: "NOMBRE",
                          id: "NOMBRES",
                          accessor: (d) => d.NOMBRES,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["NOMBRES"],
                            }),
                          filterAll: true,
                        },
                        {
                          Header: "DNI",
                          id: "NRO_DOC",
                          accessor: (d) => d.NRO_DOC,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["NRO_DOC"],
                            }),
                          filterAll: true,
                          width: 100,
                        },
                        {
                          Header: "Perfil",
                          id: "perfil",
                          accessor: (d) => d.perfil,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["perfil"],
                            }),
                          filterAll: true,
                          width: 60,
                        },
                        {
                          Header: "Acciones",
                          id: "acciones",
                          filterAll: true,
                          width: 50,
                          Cell: (row) => (
                            <div>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() => selectSocio(row.original)}
                              >
                                <i
                                  className="fa fa-arrow-left"
                                  aria-hidden="true"
                                ></i>
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
            ) : null}
          </div>
        </div>
      </div>

      {!socio ? (
        <div className="mt-4 alert alert-info border border-dark text-center text-uppercase">
          Debes seleccionar un socio
        </div>
      ) : (
        <OpcionesServicios socio={socio} />
      )}
    </div>
  );
};

export default EmitirServicio;
