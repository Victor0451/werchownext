import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";


const ListadoPracticas = ({
    listado,
    agregarPractica,
    cantidadRefP,
    precioPorCantidad,

}) => {
    if (!listado) return <Spinner />;

    return (
        <div className="row mt-4 border border-dark  p-1">


            <div className="col-md-10 ">
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
                                    width: 100
                                },
                                {
                                    Header: "Descripcion",
                                    id: "DESCRIP",
                                    accessor: (d) => d.DESCRIP,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["DESCRIP"] }),
                                    filterAll: true,
                                    width: 600
                                },

                                {
                                    Header: "Importe",
                                    id: "IMPORTE",
                                    accessor: (d) => d.IMPORTE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                    filterAll: true,
                                    width: 100

                                },
                                // {
                                //     Header: "Cantidad",
                                //     id: "cantidad",
                                //     filterAll: true,
                                //     width: 100,
                                //     Cell: (row) => (
                                //         <div>
                                //             <input
                                //                 className="form-control"
                                //                 type="number"
                                //                 ref={cantidadRefP}
                                //                 defaultValue="1"
                                //             >
                                //             </input>
                                //         </div>
                                //     ),
                                // },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,
                                    width: 100,
                                    Cell: (row) => (
                                        <div>
                                            <button
                                                className="btn btn-success btn-sm"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    agregarPractica(row.original)
                                                }
                                                }
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

                    ]
                    }

                    defaultPageSize={10}
                    className="-striped -highlight"
                />

            </div>
            <div className="col-md-2">
                <label>
                    Cantidad:
                </label>
                <input
                    className="form-control"
                    type="number"
                    ref={cantidadRefP}
                    defaultValue="1"
                >
                </input>
            </div>


        </div>

    );
};

export default ListadoPracticas;
