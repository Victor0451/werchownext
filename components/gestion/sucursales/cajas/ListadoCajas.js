import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";
import Router from "next/router";


const ListadoCajas = ({
    cajas,


}) => {

    if (!cajas) return <Spinner />;


    return (
        <div className="mt-4 container border border-dark list p-4">

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
                                    Header: "Ingresos",
                                    id: "ingresos",
                                    accessor: (d) => d.ingresos,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["ingresos"],
                                        }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Egresos",
                                    id: "egresos",
                                    accessor: (d) => d.egresos,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["egresos"],
                                        }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Salgo",
                                    id: "saldo",
                                    accessor: (d) => d.saldo,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["saldo"],
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
                                        className="btn btn-sm btn-primary"
                                        onClick={() => {
                                            Router.push({
                                                pathname: "/gestion/sucursales/caja/caja",
                                                query: {
                                                    id: row.original.idcaja

                                                },
                                            });
                                        }}
                                    >
                                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    </button>
                                </div>
                            ),
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>


        </div>
    )
}

export default ListadoCajas
