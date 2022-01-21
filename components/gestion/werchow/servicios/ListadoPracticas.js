import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";


const ListadoPracticas = ({
    listado,
    agregarPractica,

}) => {
    if (!listado) return <Spinner />;

    return (
        <div className="border border-dark col-md-6 p-1">
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
                            },

                            {
                                Header: "Acciones",
                                id: "acciones",
                                filterAll: true,
                                width: 50,
                                Cell: (row) => (
                                    <div>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => agregarPractica(row.original)}
                                        >
                                            <i
                                                className="fa fa-arrow-left"
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
        </div>

    );
};

export default ListadoPracticas;
