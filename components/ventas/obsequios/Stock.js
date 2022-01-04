import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import Spinner from '../../layout/Spinner'
import Link from 'next/link'

// Import React Table
import ReactTable from "react-table";

const Stock = ({ stock }) => {


    if (!stock)
        return <Spinner />
    if (stock.length === 0) {
        return <div className="container mt-4 alert alert-warning border border-dark text-center text-uppercase">No hay gastos de luto cargados</div>
    }

    const calcularTotal = (arr) => {
        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].stock
        }
        return total
    }

    return (
        <div className="container mt-4 border border-dark list">
            <h3 className="mt-4 mb-4">
                <strong>
                    <u>Stock de productos</u>: Cantidad Actual {calcularTotal(stock)}
                </strong>
            </h3>
            <div className=" mt-4 border border-dark list">
                <ReactTable
                    data={stock}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Stock de productos para obsequios",
                            columns: [
                                {
                                    Header: "Producto",
                                    id: "producto",
                                    accessor: (d) => d.producto,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["producto"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Marca",
                                    id: "marca",
                                    accessor: (d) => d.marca,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["marca"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Categoria",
                                    id: "categoria",
                                    accessor: (d) => d.categoria,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["categoria"] }),
                                    filterAll: true,

                                },


                                {
                                    Header: "Stock",
                                    id: "stock",
                                    accessor: (d) => d.stock,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["stock"] }),
                                    filterAll: true,

                                },

                                // {
                                //     Header: "Estado",
                                //     id: "estado",
                                //     accessor: (d) => d.estado,
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["estado"] }),
                                //     filterAll: true,

                                //     Cell: (row) => (
                                //         <div>
                                //             {row.original.estado === 1 ? (
                                //                 <div>Activo</div>
                                //             ) : row.original.estado === 0 ? (
                                //                 <div>De Baja</div>
                                //             ) : null}
                                //         </div>
                                //     ),
                                // },

                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            <Link

                                                href={{
                                                    pathname: '/ventas/obsequios/actualizarstock',
                                                    query: { id: row.original.idobsequio },
                                                }}
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-info btn-sm mr-1"
                                                    data-toggle="tooltip"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                    data-placement="top"
                                                    title="Actualizar Stock"
                                                >
                                                    <i
                                                        className="fa fa-pencil-square"
                                                        aria-hidden="true"
                                                    ></i>{" "}
                                                Actualizar Stock
                                            </button>
                                            </Link>

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
        </div>
    );
};

export default Stock;
