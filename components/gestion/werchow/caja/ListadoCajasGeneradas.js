import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";

const ListadoCajasGeneradas = ({
    listado,
    traerMovimientos
}) => {


    if (!listado) return <Spinner />;

    return (
        <div className="container list border border-dark mt-4 p-4">

            <h2>
                <strong>
                    <u>
                        Listado de Cajas Generadas
                    </u>
                </strong>
            </h2>

            <div className="border border-dark p-1 mt-4">
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Cajas",
                            columns: [

                                {
                                    Header: "#",
                                    filterAll: false,
                                    width: 50,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
                                {
                                    Header: "Fecha Caja",
                                    id: "FECHA",
                                    accessor: (d) => moment(d.FECHA).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Ingresos",
                                    id: "INGRESOS",
                                    accessor: (d) => d.INGRESOS,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["INGRESOS"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Egresos",
                                    id: "EGRESOS",
                                    accessor: (d) => d.EGRESOS,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["EGRESOS"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Valores a Depositar",
                                    id: "VAL_DEPOSIT",
                                    accessor: (d) => d.VAL_DEPOSIT,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["VAL_DEPOSIT"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => traerMovimientos(row.original.FECHA)}
                                                data-toggle="modal"
                                                data-target="#modalImprimirCaja"
                                            >
                                                <i
                                                    className="fa fa-arrow-left"
                                                    aria-hidden="true"
                                                ></i> Imprimir
                                            </button>
                                        </div>
                                    ),
                                },
                            ],
                        },

                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
            </div>
        </div>
    )
}

export default ListadoCajasGeneradas

