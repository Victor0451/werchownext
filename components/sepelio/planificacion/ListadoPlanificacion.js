import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import moment from "moment-timezone";
import FormTareasAdicionales from "./FormTareasAdicionales";

const ListadoPlanificacion = ({
  plani,
  mes,
  gastliq,
  hsInicioTRef,
  hsFinTRef,
  tareaRef,
  observacionesTRef,
  siTRef,
  noTRef,
  registrarTareaAdicional,
  selcaso,
  idturno,
  operador
}) => {

  if (!plani) return <div>No Hay Planificacion Aun</div>;

  return (
    <div className="container mt-4 border border-dark p-4 alert alert-primary">
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
                  accessor: (d) => moment(d.inicio).utcOffset("+000").format('DD/MM/YYYY HH:ss:mm'),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["inicio"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Fin",
                  id: "fin",
                  accessor: (d) => moment(d.fin).utcOffset("+000").format('DD/MM/YYYY HH:ss:mm'),
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
                        className="btn btn-primary btn-sm"
                        onClick={() => selcaso(row.original.idturno, row.original.operador)}
                        data-toggle="modal" data-target="#staticBackdrop"
                      >
                        <i className="fa fa-money" aria-hidden="true"></i>
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


      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Tareas Adicionales</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormTareasAdicionales
                gastliq={gastliq}
                idturno={idturno}
                operador={operador}
                hsInicioTRef={hsInicioTRef}
                hsFinTRef={hsFinTRef}
                tareaRef={tareaRef}
                observacionesTRef={observacionesTRef}
                siTRef={siTRef}
                noTRef={noTRef}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={registrarTareaAdicional}>Registrar</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default ListadoPlanificacion;
