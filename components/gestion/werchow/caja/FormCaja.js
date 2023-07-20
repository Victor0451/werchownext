import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ModalEgresos from "./ModalEgresos";
import ModalIngresos from "./ModalIngresos";

const FormCaja = ({
    ingresos,
    egresos,
    descripcionIRef,
    cantidadIRef,
    importeIRef,
    descripcionERef,
    cantidadERef,
    importeERef,
    regEgreso,
    regIngreso,
    calcTotalMovimientos,


}) => {
    return (
        <div className='mt-4 container border border-dark list p-4'>

            <h4>
                <strong>
                    <u>Caja Otero</u>: {moment().format('DD/MM/YYYY')}
                </strong>
            </h4>

            <div className='row mt-4 border border-dark p-2'>


                <div className='col-md-6'>

                    <button
                        className="mt-4 mb-4 btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalIngresos"
                    >
                        Agregar Ingreso
                    </button>


                    {ingresos.length !== 0 ? (
                        <div className="list">
                            <ReactTable
                                data={ingresos}
                                filterable
                                defaultFilterMethod={(filter, row) =>
                                    row[filter.id] === filter.value
                                }
                                columns={[
                                    {
                                        Header: "Ingresos",
                                        columns: [
                                            {
                                                Header: "#",
                                                filterAll: false,
                                                width: 50,
                                                Cell: (row) => <div>{row.index + 1}</div>,
                                            },
                                            {
                                                Header: "Servicio/Descripcion",
                                                id: "SERVICIO",
                                                accessor: (d) => d.SERVICIO,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["SERVICIO"],
                                                    }),
                                                filterAll: true,

                                            },
                                            {
                                                Header: "Ordenes",
                                                id: "CANTIDAD",
                                                accessor: (d) => d.CANTIDAD,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["CANTIDAD"],
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

                                            },

                                        ],
                                    },
                                ]}
                                defaultPageSize={5}
                                className="-striped -highlight"
                            />

                            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
                                Total de Ingresos: ${calcTotalMovimientos(ingresos, 'I')}
                            </div>

                        </div>
                    ) : (<div className='mt-4 border border-dark alert alert-info text-center text-uppercase'>
                        No hay ingresos registrados
                    </div>)}
                </div>

                <div className='col-md-6'>

                    <button
                        className="mt-4 mb-4 btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalEgresos"
                    >
                        Agregar Egresos
                    </button>

                    {egresos.length !== 0 ? (
                        <div className="list">
                            <ReactTable
                                data={egresos}
                                filterable
                                defaultFilterMethod={(filter, row) =>
                                    row[filter.id] === filter.value
                                }
                                columns={[
                                    {
                                        Header: "Egresos",
                                        columns: [
                                            {
                                                Header: "#",
                                                filterAll: false,
                                                width: 50,
                                                Cell: (row) => <div>{row.index + 1}</div>,
                                            },
                                            {
                                                Header: "Detalle",
                                                id: "detalle",
                                                accessor: (d) => d.detalle,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["detalle"],
                                                    }),
                                                filterAll: true,

                                            },
                                            {
                                                Header: "Cantidad",
                                                id: "cantidad",
                                                accessor: (d) => d.cantidad,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["cantidad"],
                                                    }),
                                                filterAll: true,
                                            },
                                            {
                                                Header: "Importe",
                                                id: "importe",
                                                accessor: (d) => d.importe,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["importe"],
                                                    }),
                                                filterAll: true,

                                            },

                                        ],
                                    },
                                ]}
                                defaultPageSize={5}
                                className="-striped -highlight"
                            />

                            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
                                Total de Egresos: ${calcTotalMovimientos(egresos, 'E')}
                            </div>

                        </div>

                    ) : (<div className='mt-4 border border-dark alert alert-info text-center text-uppercase'>
                        No hay Egresos registrados
                    </div>)}
                </div>

            </div>

            <ModalEgresos
                descripcionERef={descripcionERef}
                cantidadERef={cantidadERef}
                importeERef={importeERef}
                regEgreso={regEgreso}
            />

            <ModalIngresos
                descripcionIRef={descripcionIRef}
                cantidadIRef={cantidadIRef}
                importeIRef={importeIRef}
                regIngreso={regIngreso}
            />

        </div>
    )
}

export default FormCaja
