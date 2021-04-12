import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import moment from "moment-timezone";


const Liquidacion = ({ liqguardias, liqtarad, regLiqGuardia, regLiqTareas }) => {

    if (!liqguardias) return <Spinner />


    const totalGuardias = (arr) => {
        if (arr) {
            let total = 0

            for (let i = 0; i < arr.length; i++) {
                total += arr[i].liquidacion
            }

            return total
        }


    }


    return (
        <div className="container mt-4 border border-dark alert alert-primary p-4">

            <h4 className="mb-4">
                <strong>
                    <u>
                        Liquidacion de guardias
        </u>
                </strong>
            </h4>


            <div className="list border border-dark p-4">
                <ReactTable
                    data={liqguardias}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Planificacion",
                            columns: [

                                {
                                    Header: "#",
                                    filterAll: false,
                                    width: 50,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
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
                                    Header: "Liquidacion",
                                    id: "liquidacion",
                                    accessor: (d) => d.liquidacion,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["liquidacion"] }),
                                    filterAll: true,
                                    //   width: 100,
                                },
                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <>
                                            {row.original.liquidado === 0 ? (

                                                <button
                                                    href=""
                                                    className="btn btn-success btn-sm mr-1"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Liquidar"
                                                    onClick={() => regLiqGuardia(row.original.idturno)}
                                                >
                                                    <i className="fa fa-check" aria-hidden="true"></i>
                                                </button>

                                            ) : row.original.liquidado === 1 ? (

                                                <div>
                                                    Liquidado: {moment(row.original.fecha_liquidacion).format('DD/MM/YYYY HH:mm:ss')}
                                                </div>

                                            ) : null}
                                        </>
                                    ),
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>

            <div className="mt-4 mb-4 alert alert-success border border-dark text-center text-uppercase">
                Liquidacion Total de Guardias: ${totalGuardias(liqguardias)}
            </div>

            <hr className="mt-4 mb-4" />

            <h4 className="mt-4 mb-4">
                <strong>
                    <u>
                        Liquidacion de Tareas Adicionales en turnos de guardia
        </u>
                </strong>
            </h4>

            {
                !liqtarad ? (<Spinner />)
                    : (

                        <div className="list border border-dark p-4">
                            <ReactTable
                                data={liqtarad}
                                filterable
                                defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                columns={[
                                    {
                                        Header: "Planificacion",
                                        columns: [

                                            {
                                                Header: "#",
                                                filterAll: false,
                                                width: 50,
                                                Cell: (row) => <div>{row.index + 1}</div>,
                                            },
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
                                                Header: "Liquidacion",
                                                id: "liquidacion",
                                                accessor: (d) => d.liquidacion,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["liquidacion"] }),
                                                filterAll: true,
                                                //   width: 100,
                                            },

                                        ],
                                    },
                                    {
                                        Header: "Acciones",

                                        Cell: (row) => (
                                            <>
                                                {row.original.liquidado === 0 ? (

                                                    <button
                                                        href=""
                                                        className="btn btn-success btn-sm mr-1"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Liquidar"
                                                        onClick={() => regLiqTareas(row.original.idtarea)}
                                                    >
                                                        <i className="fa fa-check" aria-hidden="true"></i>
                                                    </button>

                                                ) : row.original.liquidado === 1 ? (

                                                    <div>
                                                        Liquidado: {moment(row.original.fecha_liquidacion).format('DD/MM/YYYY HH:mm:ss')}
                                                    </div>

                                                ) : null}
                                            </>
                                        ),
                                    },
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </div>



                    )
            }
            <div className="mt-4 mb-4 alert alert-success border border-dark text-center text-uppercase">
                Liquidacion Total de Tareas Adicionales: ${totalGuardias(liqtarad)}
            </div>
        </div>
    )
}

export default Liquidacion
