import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import moment from "moment";
import FormDetallesServicioVendido from "./FormDetallesServicioVendido";

const ListadoServiciosVendidos = ({ listado, traerDetalles, detalleServicio, detalleVenta, detalleAtaud, aprobarVenta, regLiqVenta, user }) => {

    if (!listado) return <Spinner />



    return (
        <div className="mt-4 container alert alert-primary">
            <div className="list border border-dark ">
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
                                    width: 50,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
                                {
                                    Header: "Operador",
                                    id: "operador_venta",
                                    accessor: (d) => d.operador_venta,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["operador_venta"] }),
                                    filterAll: true,
                                    width: 100,

                                },
                                {
                                    Header: "Fecha",
                                    id: "fecha_venta",
                                    accessor: (d) => moment(d.fecha_venta).utcOffset("+000").locale('es').format('llll'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha_venta"] }),
                                    filterAll: true,
                                    width: 300
                                },
                                {
                                    Header: "Monto",
                                    id: "monto",
                                    accessor: (d) => d.monto,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["monto"] }),
                                    filterAll: true,
                                    width: 100,
                                },

                                {
                                    Header: "Liquidacion",
                                    width: 100,
                                    Cell: (row) => (
                                        <div>
                                            {((row.original.monto * 5) / 100)}
                                        </div>
                                    ),
                                },
                                {
                                    Header: "Aprobado",
                                    width: 200,
                                    filterAll: true,
                                    Cell: (row) => (
                                        <>
                                            {row.original.aprobado === 0 ? (

                                                <div>
                                                    Rechazado por {row.original.operadorap}: {moment(row.original.fecha_aprobacion).format('DD/MM/YYYY HH:mm:ss')}
                                                </div>

                                            ) : row.original.aprobado === 1 ? (

                                                <div>
                                                    Aprobado por {row.original.operadorap}: {moment(row.original.fecha_aprobacion).format('DD/MM/YYYY HH:mm:ss')}
                                                </div>

                                            ) : row.original.aprobado === null ?
                                                (
                                                    <div>
                                                        Esperando Aprobacion
                                                    </div>
                                                ) : null}
                                        </>
                                    ),
                                },
                                {
                                    Header: "Acciones",
                                    width: 220,
                                    filterAll: true,
                                    Cell: (row) => (
                                        <div className="row">
                                            <div className="ml-4">
                                                <button
                                                    className="btn btn-secondary border border-dark btn-sm mr-1"
                                                    data-toggle="modal"
                                                    data-placement="top"
                                                    title="Ver Mas"
                                                    data-target="#masinfo"
                                                    onClick={() =>
                                                        traerDetalles(row.original)
                                                    }
                                                >
                                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                                </button>
                                            </div>

                                            {user === 'joaquini' || user === 'isantiago' || user === 'jmorales' || user === 'emoreno' || user === 'jcmorales' ? (

                                                <>
                                                    <button
                                                        href=""
                                                        className="btn btn-success btn-sm mr-1"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Aprobar"
                                                        onClick={() => aprobarVenta(row.original.idventa, 1, user)}
                                                    >
                                                        <i className="fa fa-check" aria-hidden="true"></i>
                                                    </button>

                                                    <button
                                                        href=""
                                                        className="btn btn-danger btn-sm mr-1"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Rechazar"
                                                        onClick={() => aprobarVenta(row.original.idventa, 0, user)}
                                                    >
                                                        <i className="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                </>

                                            ) : user === 'rquispe' || user === 'nquintana' || user === 'vlongo' ? (
                                                <>
                                                    {
                                                        row.original.liquidado === 0 ? (
                                                            <>
                                                                {
                                                                    row.original.aprobado === 1 ? (
                                                                        <button
                                                                            href=""
                                                                            className="btn btn-info btn-sm mr-1"
                                                                            data-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="Liquidar"
                                                                            onClick={() => regLiqVenta(row.original.idventa, user)}
                                                                        >
                                                                            <i className="fa fa-check" aria-hidden="true"></i>   Liquidar
                                                                        </button>
                                                                    ) : row.original.aprobado === 0 ? (
                                                                        <div>
                                                                            Rechazado
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            ...
                                                                        </div>
                                                                    )
                                                                }

                                                            </>
                                                        ) : row.original.liquidado === 1 ? (

                                                            <div>
                                                                Liquidado por {row.original.operadorliq}: {moment(row.original.fecha_liquidacion).format('DD/MM/YYYY HH:mm:ss')}
                                                            </div>

                                                        ) : null
                                                    }
                                                </>
                                            ) : null}


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
                id="masinfo"
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
                            <FormDetallesServicioVendido
                                detalleServicio={detalleServicio}
                                detalleVenta={detalleVenta}
                                detalleAtaud={detalleAtaud}
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
                            //  onClick={liquidarServicio}
                            >
                                Liquidar Servicio
              </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListadoServiciosVendidos
