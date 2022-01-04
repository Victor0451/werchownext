import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import moment from "moment-timezone";
import EditarGuardias from "./EditarGuardias";

const ListadoPlanificacion = ({
  plani,
  mes,
  lugarERef,
  siERef,
  noERef,
  hsInicioERef,
  hsFinERef,
  operadorERef,
  error,
  operadorsep,
  selcaso,
  delCaso,
  editarPlanificacion,
  planiID
}) => {

  if (!plani) return <div>No Hay Planificacion Aun</div>;

  return (
    <div className="container mt-4 border border-dark p-4 list">
      <h2 className=" mb-4">
        <strong>
          <u>Planificacion de {mes}</u>
        </strong>
      </h2>

      <div className="list border border-dark p-4">
        <ReactTable
          data={plani}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Planificacion",
              columns: [

                {
                  Header: "Operador",
                  id: "operador",
                  accessor: (d) => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["operador"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Inicio",
                  id: "inicio",
                  accessor: (d) => moment(d.inicio).utcOffset("+000").locale('es').format('llll'),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["inicio"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Fin",
                  id: "fin",
                  accessor: (d) => moment(d.fin).utcOffset("+000").locale('es').format('llll'),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fin"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Horas",
                  id: "horas",
                  accessor: (d) => d.horas,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["horas"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Lugar",
                  id: "lugar",
                  accessor: (d) => d.lugar,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["lugar"],
                    }),
                  filterAll: true,
                  //   width: 120,
                  Cell: (row) => (
                    <div>
                      {row.original.lugar === "cc" ? (
                        <div>
                          <strong>Casa Central</strong>
                        </div>
                      ) : row.original.lugar === "sv" ? (
                        <div>
                          <strong>Sala Velatoria</strong>
                        </div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Tipo Guardia",
                  id: "feriado",
                  accessor: (d) => d.feriado,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["feriado"],
                    }),
                  filterAll: true,
                  //   width: 120,
                  Cell: (row) => (
                    <div>
                      {row.original.feriado === 1 ? (
                        <div>
                          <strong>Feriado</strong>
                        </div>
                      ) : row.original.feriado === 0 ? (
                        <div>
                          <strong>Normal</strong>
                        </div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => selcaso(row.original)}
                        data-toggle="modal" data-target="#modaleditguardia"
                      >
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm ml-1"
                        onClick={() => delCaso(row.original.idturno)}

                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
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


      <div className="modal" id="modaleditguardia" tabIndex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Guardia</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EditarGuardias
                planiID={planiID}
                lugarERef={lugarERef}
                siERef={siERef}
                noERef={noERef}
                hsInicioERef={hsInicioERef}
                hsFinERef={hsFinERef}
                operadorERef={operadorERef}
                error={error}
                operadorsep={operadorsep}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={(e) => { e.preventDefault, editarPlanificacion(planiID.idturno) }}>Registrar</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ListadoPlanificacion;
