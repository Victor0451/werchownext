import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment'


const ListadoAutos = ({
    pagos,
    datatarget,
    datatoggle,
    eliminarPago
}) => {


    if (!pagos)
        return (
            <div className="container mt-4 alert alert-danger p-4 border border-dark text-uppercase text-center">
                La patente no tiene pagos registrador
            </div>
        );


    return (
        <div className="mt-4 container border border-dark p-4 list">

            <div className="row">
                <div className="col-md-8">
                    <h3>
                        <strong>
                            <u>
                                Listado de Pagos Registrados
                            </u>
                        </strong>
                    </h3>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-info btn-block btn-sm" data-target={datatarget} data-toggle={datatoggle}>
                        Ingresar Nuevo Pago
                    </button>
                </div>
            </div>

            <div className="mt-4 list border border-dark ">
                <ReactTable
                    data={pagos}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Pagos",
                            columns: [
                                {
                                    Header: "#",
                                    filterAll: false,
                                    width: 50,
                                    Cell: (row) => <div>{row.index}</div>,
                                },
                                {
                                    Header: "Patente",
                                    id: "patente",
                                    accessor: (d) => d.patente,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["patente"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Mes",
                                    id: "mes",
                                    accessor: (d) => d.mes,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["mes"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Año",
                                    id: "ano",
                                    accessor: (d) => d.ano,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["ano"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Importe",
                                    id: "importe",
                                    accessor: (d) => d.importe,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["importe"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "N° Ref Pago",
                                    id: "cod_pago",
                                    accessor: (d) => d.cod_pago,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["cod_pago"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm mr-1"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Opciones"
                                                data-toggle='modal'
                                                data-target='#opciones'
                                                onClick={() => eliminarPago(row.original)}
                                            >
                                                Eliminar
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
        </div>
    )
}

export default ListadoAutos

