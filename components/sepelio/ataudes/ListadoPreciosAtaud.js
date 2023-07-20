import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";
import ReactTable from "react-table";
import moment from "moment";

const ListadoPreciosAtaud = ({ listado }) => {

    if (!listado) return <Spinner />

    return (
        <div className="container mt-4 border border-dark p-4 list">

            <h2>
                <strong>
                    <u>
                        Listado de Precios
                    </u>
                </strong>
            </h2>


            <div className="mt-4 border border-dark list p-4">
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "LISTADO DE PRECIOS",
                            columns: [
                                {
                                    Header: "Codigo",
                                    id: "codigo",
                                    accessor: (d) => d.codigo,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["codigo"],
                                        }),
                                    filterAll: true,
                                    width: 100,
                                },
                                {
                                    Header: "Ataud",
                                    id: "ataud",
                                    accessor: (d) => d.ataud,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["ataud"] }),
                                    filterAll: true,
                                    width: 350,
                                },

                                {
                                    Header: "Precio Lista",
                                    id: "precio",
                                    accessor: (d) => `$ ${d.precio}`,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["precio"] }),
                                    filterAll: true,
                                    width: 100,
                                },

                                {
                                    Header: "Primer Descuento",
                                    id: "pri_desc",
                                    accessor: (d) => `$ ${d.pri_desc}`,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["pri_desc"] }),
                                    filterAll: true,
                                    width: 100,
                                },

                                {
                                    Header: "Segundo Descuento",
                                    id: "sec_desc",
                                    accessor: (d) => `$ ${d.sec_desc}`,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["sec_desc"] }),
                                    filterAll: true,
                                    width: 100,
                                },

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,
                                    width: 100,
                                },

                                {
                                    Header: "Operador",
                                    id: "operador",
                                    accessor: (d) => d.operador,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["operador"] }),
                                    filterAll: true,
                                    width: 100,
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>


        </div>
    )
}

export default ListadoPreciosAtaud