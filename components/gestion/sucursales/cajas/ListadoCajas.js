import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";
import ModalDetalles from "../cajas/ModalDetalle";

const ListadoCajas = ({
    cajas,
    traerArchivos,
    row,
    archivos,
    eliminarArchivos

}) => {

    if (!cajas) return <Spinner />;


    return (
        <div className="mt-4 container border border-dark alert alert-primary p-4">

            <div className="row">
                <div className="col-md-8">
                    <h2>
                        <strong>
                            <u>Listado de Cajas Registradas</u>
                        </strong>
                    </h2>
                </div>

                <div className="col-md-4 d-flex justify-content-end">
                    <a className="btn btn-info btn-sm" href="/gestion/sucursales/caja/nueva">
                        Registrar Nueva Caja
                    </a>
                </div>
            </div>


            <div className="mt-4 border border-dark list">
                <ReactTable
                    data={cajas}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Ventas En Produccion",
                            columns: [
                                {
                                    Header: "#",
                                    filterAll: false,
                                    width: 50,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
                                {
                                    Header: "Sucursal",
                                    id: "sucursal",
                                    accessor: (d) => d.sucursal,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["sucursal"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Fecha",
                                    id: "fecha_caja",
                                    accessor: (d) => moment(d.fecha_caja).format('DD/MM/YYYY HH:mm:ss'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["fecha_caja"],
                                        }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Total Entradas",
                                    id: "entrada",
                                    accessor: (d) => d.entrada,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["entrada"],
                                        }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Total Salidas",
                                    id: "salida",
                                    accessor: (d) => d.salida,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["salida"],
                                        }),
                                    filterAll: true,
                                },
                            ],
                        },
                        {
                            Header: "Acciones",

                            Cell: (row) => (
                                <div>
                                    <button
                                        className="btn btn-sm btn-info"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        onClick={() =>
                                            traerArchivos(
                                                row.original
                                            )
                                        }
                                    >
                                        Ver Legajo
                                    </button>
                                </div>
                            ),
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>

            {/* MODAL */}

            <ModalDetalles
                row={row}
                archivos={archivos}
                traerArchivos={traerArchivos}
                eliminarArchivos={eliminarArchivos}
            />
        </div>
    )
}

export default ListadoCajas
