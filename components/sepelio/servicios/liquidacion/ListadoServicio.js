import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import FormLiquidarServicio from "./FormLiquidarServicio";
import moment from "moment";
import axios from "axios";

const ListadoServicios = ({
  listado,
  gastos,
  traerGastos,
  servliq,
  liqop,
  liquidarServicio,
  total,
  user,
  aprobarGasto,
  aprobarTodoGasto,
  regLiqGasto,
  ataud,
  parcela,
  cajas,
  acugascaja,
  aculiqop,
  servmes,
}) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark list mt-4 p-4">
      <h2 className=" mb-4">
        <strong>
          <u>Total de servicios Aptos para liquidar:</u> {listado.length}
        </strong>
      </h2>
      <div className="list mt-4 border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                {
                  Header: "#",
                  id: "#",
                  filterAll: false,
                  width: 20,
                  Cell: (row) => <div>{row.index + 1}</div>,
                },
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: (d) => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true,
                  width: 110,
                },
                {
                  Header: "Nombre",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "DNI",
                  id: "dni",
                  accessor: (d) => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni"] }),
                  filterAll: true,
                  width: 85,
                },
                {
                  Header: "Causa de Muerte",
                  id: "motivo",
                  accessor: (d) => d.motivo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["motivo"],
                    }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Servicio",
                  id: "tipo_servicio",
                  accessor: (d) => d.tipo_servicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["tipo_servicio"],
                    }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Fallecimiento",
                  id: "fecha_fallecimiento",
                  accessor: (d) => d.fecha_fallecimiento,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha_fallecimiento"],
                    }),
                  filterAll: true,
                  width: 105,
                },
                {
                  Header: "Sin Aprobar",
                  id: "Sin Aprobar",
                  filterAll: true,
                  Cell: (row) => (
                    <>
                      {row.original.gastos_cargados === 0 ? (
                        <div className="alert alert-success alert-sm text-center">
                          {row.original.gastos_cargados}
                        </div>
                      ) : (
                        <div className="alert alert-danger text-center">
                          {row.original.gastos_cargados}
                        </div>
                      )}
                    </>
                  ),
                },
                {
                  Header: "Acciones",
                  id: "Acciones",
                  filterAll: true,
                  Cell: (row) => (
                    <div>
                      {row.original.liquidado == 1 ? (
                        <div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#liquidar"
                            onClick={() =>
                              traerGastos(row.original.idservicio, row.original)
                            }
                          >
                            Liquidado{" "}
                            {moment(row.original.fecha_liquidacion)
                              .utcOffset("+000")
                              .format("DD/MM/YYYY HH:mm:ss")}
                          </a>
                        </div>
                      ) : (
                        <button
                          className="btn btn-sm btn-info btn-sm mr-1"
                          data-toggle="modal"
                          data-placement="top"
                          title="Ver Liquidacion"
                          data-target="#liquidar"
                          onClick={() =>
                            traerGastos(
                              row.original.idservicio,
                              row.original,
                              row.original.idataud
                            )
                          }
                        >
                          <i className="fa fa-eye" aria-hidden="true">
                            {" "}
                            Ver Liquidacion
                          </i>
                        </button>
                      )}
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
        id="liquidar"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Liquidar Servicio
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormLiquidarServicio
                gastos={gastos}
                servicio={servliq}
                liqop={liqop}
                total={total}
                user={user}
                aprobarGasto={aprobarGasto}
                regLiqGasto={regLiqGasto}
                ataud={ataud}
                parcela={parcela}
                cajas={cajas}
                acugascaja={acugascaja}
                aculiqop={aculiqop}
                servmes={servmes}
                aprobarTodoGasto={aprobarTodoGasto}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={liquidarServicio}
              >
                Liquidar Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoServicios;
