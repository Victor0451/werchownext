import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import FormLiquidarServicio from "./FormLiquidarServicio";
import Link from "next/link";
import moment from "moment";

const ListadoServicios = ({ listado, gastos, traerGastos, servliq }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
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
                  filterAll: false,
                  width: 20,
                  Cell: (row) => <div>{row.index}</div>,
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
                  width: 150,
                },

                {
                  Header: "Fecha de Fallecimiento",
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
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <button
                        className="btn btn-sm btn-primary mr-1"
                        data-toggle="modal"
                        data-placement="top"
                        title="Liquidar"
                        data-target="#liquidar"
                        onClick={() =>
                          traerGastos(row.original.idservicio, row.original)
                        }
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
              <FormLiquidarServicio gastos={gastos} servicio={servliq} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Liquidar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoServicios;
