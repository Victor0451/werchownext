import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";


const ListadoSocios = ({ listado, Seleccionar, SeleccionarM }) => {

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">

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
                        <div className="mt-4 container border border-dark list p-4">
                            <h2>
                                <strong>
                                    <u>Listado de Socios</u>
                                </strong>
                            </h2>

                            <div className="border border-dark list">

                                {!listado ? <Spinner />

                                    : (


                                        <ReactTable
                                            data={listado}
                                            filterable
                                            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                            columns={[
                                                {
                                                    Header: "Socios",
                                                    columns: [
                                                        {
                                                            Header: "#",
                                                            filterAll: false,
                                                            width: 50,
                                                            Cell: (row) => <div>{row.index + 1}</div>,
                                                        },
                                                        {
                                                            Header: "Apellido",
                                                            id: "APELLIDOS",
                                                            accessor: (d) => d.APELLIDOS,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                                                            filterAll: true,
                                                        },

                                                        {
                                                            Header: "Nombre",
                                                            id: "NOMBRES",
                                                            accessor: (d) => d.NOMBRES,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, {
                                                                    keys: ["NOMBRES"],
                                                                }),
                                                            filterAll: true,
                                                        },
                                                        {
                                                            Header: "DNI",
                                                            id: "NRO_DOC",
                                                            accessor: (d) => d.NRO_DOC,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, {
                                                                    keys: ["NRO_DOC"],
                                                                }),
                                                            filterAll: true,
                                                        },
                                                        {
                                                            Header: "Alta",
                                                            id: "ALTA",
                                                            accessor: (d) => moment(d.ALTA).format('DD/MM/YYYY'),
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, {
                                                                    keys: ["ALTA"],
                                                                }),
                                                            filterAll: true,
                                                        },
                                                        {
                                                            Header: "Grupo",
                                                            id: "GRUPO",
                                                            accessor: (d) => d.GRUPO,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, {
                                                                    keys: ["GRUPO"],
                                                                }),
                                                            filterAll: true,
                                                        },
                                                    ],
                                                },
                                                {
                                                    Header: "Acciones",

                                                    Cell: (row) => (
                                                        <div>
                                                            {row.original.EMP === 'W' ? (
                                                                <button
                                                                    className="btn btn-sm btn-info"
                                                                    data-toggle="modal"
                                                                    data-target="#exampleModal"
                                                                    onClick={() => Seleccionar(row.original.CONTRATO)}
                                                                >
                                                                    Seleccionar
                                                                </button>
                                                            ) : row.original.EMP === 'M' ? (
                                                                <button
                                                                    className="btn btn-sm btn-info"
                                                                    data-toggle="modal"
                                                                    data-target="#exampleModal"
                                                                    onClick={() => SeleccionarM(row.original.CONTRATO)}
                                                                >
                                                                    Seleccionar
                                                                </button>
                                                            ) : null}

                                                        </div>
                                                    ),
                                                },
                                            ]}
                                            defaultPageSize={10}
                                            className="-striped -highlight"
                                        />
                                    )}
                            </div>

                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListadoSocios;
