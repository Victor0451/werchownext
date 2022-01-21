import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";


const ListadoPracticasAgregadas = ({
    listado,
    eliminarPracticaPrecargado,
}) => {
    if (!listado) return <Spinner />;

    return (

        <ReactTable
            data={listado}
            filterable
            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
            columns={[
                {
                    Header: "Practicas",
                    columns: [

                        {
                            Header: "Cod",
                            id: "CODIGOS",
                            accessor: (d) => d.CODIGOS,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["CODIGOS"] }),
                            filterAll: true,
                            width: 60
                        },
                        {
                            Header: "Descripcion",
                            id: "DESCRIP",
                            accessor: (d) => d.DESCRIP,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["DESCRIP"] }),
                            filterAll: true,
                            width: 750
                        },
                        {
                            Header: "Importe",
                            id: "IMPORTE",
                            accessor: (d) => d.IMPORTE,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                            filterAll: true,
                        },

                        {
                            Header: "Acciones",
                            id: "acciones",
                            filterAll: true,

                            Cell: (row) => (
                                <div>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => eliminarPracticaPrecargado(row.index)}
                                    >
                                        <i
                                            className="fa fa-trash"
                                            aria-hidden="true"
                                        ></i>
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


    );
};

export default ListadoPracticasAgregadas;
