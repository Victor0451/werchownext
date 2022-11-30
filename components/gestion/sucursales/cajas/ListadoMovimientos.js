import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const ListadoMovimientos = ({
    listado,
    eliminarPrecarga,
    f
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
                                width: 30,
                                Cell: (row) => <div>{row.index + 1}</div>,
                            },

                            {
                                Header: "X",
                                filterAll: false,
                                width: 35,
                                Cell: (row) => (

                                    <div>
                                        {
                                            f !== 'list' ? (
                                                <button className="btn btn-sm btn-danger" onClick={() => { eliminarPrecarga(row.index, row.original.movimiento) }}>
                                                    X
                                                </button>
                                            ) : null
                                        }
                                    </div>


                                )
                            },
                            {
                                Header: "Fecha",
                                id: "fecha",
                                accessor: (d) => moment(d.fecha_movimiento).format('DD/MM/YYYY'),
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                filterAll: true,
                                width: 100
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
                                Header: "Movimiento",
                                id: "movimiento",
                                accessor: (d) => d.movimiento,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, {
                                        keys: ["movimiento"],
                                    }),
                                filterAll: true,
                                width: 70
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
                                width: 80
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