import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";

const ListadoOrdenesSinRendir = ({
    listado,
    traerOrdenesPorDia

}) => {

    if (!listado) return <Spinner />;

    return (
        <div className="border border-dark mt-4 p-1">
            <ReactTable
                data={listado}
                filterable
                defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                columns={[
                    {
                        Header: "Practicas",
                        columns: [

                            {
                                Header: "#",
                                filterAll: false,
                                width: 50,
                                Cell: (row) => <div>{row.index + 1}</div>,
                            },
                            {
                                Header: "FECHA ORDENES",
                                id: "FECHA",
                                accessor: (d) => moment(d.FECHA).format('DD/MM/YYYY'),
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                                filterAll: true,

                            },
                            {
                                Header: "CANTIDAD",
                                id: "CANTIDAD",
                                accessor: (d) => d.CANTIDAD,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["CANTIDAD"] }),
                                filterAll: true,
                            },

                            {
                                Header: "Acciones",
                                id: "acciones",
                                filterAll: true,

                                Cell: (row) => (
                                    <div>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => traerOrdenesPorDia(row.original.FECHA)}
                                        >
                                            <i
                                                className="fa fa-arrow-left"
                                                aria-hidden="true"
                                            ></i> Generar Caja
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

    )
}

export default ListadoOrdenesSinRendir
