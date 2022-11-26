import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const ListadoMovimientos = ({
    listado
}) => {
    return (
        <div className="mt-4 border border-dark list">
            <ReactTable
                data={listado}
                filterable
                defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                columns={[
                    {
                        Header: "Movimientos",
                        columns: [
                            {
                                Header: "#",
                                filterAll: false,
                                width: 50,
                                Cell: (row) => <div>{row.index + 1}</div>,
                            },
                            {
                                Header: "Fecha",
                                id: "fecha",
                                accessor: (d) => moment(d.fecha_movimiento).format('DD/MM/YYYY HH:mm:ss'),
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                filterAll: true,
                            },

                            {
                                Header: "Concepto",
                                id: "concepto",
                                accessor: (d) => d.concepto,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, {
                                        keys: ["concepto"],
                                    }),
                                filterAll: true,
                            },
                            {
                                Header: "Tipo Movimiento",
                                id: "movim",
                                accessor: (d) => d.movimiento,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, {
                                        keys: ["movim"],
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
                defaultPageSize={10}
                className="-striped -highlight"
            />
        </div>
    )
}

export default ListadoMovimientos