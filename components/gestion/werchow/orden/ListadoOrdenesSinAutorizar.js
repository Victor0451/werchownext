import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';

const ListadoOrdenesSinAutorizar = ({
    listado,
    detalleOrdenPago,
    autorizarOrden,
    user,
    traerAchivos,


}) => {

    if (listado.length === 0) return <div className='container border border-dark alert alert-info text-center text-uppercase mt-4 mb-4'>No hay ordenes para autorizar</div>

    return (
        <div className='container list mt-4 border border-dark p-4'>

            <h2 >
                <strong>
                    <u>
                        Ordenes para autorizacion
                    </u>
                </strong>
            </h2>

            <div
                id="list"
                className='border border-dark mt-4 p-1 mt-4'>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Ordenes Sin Autorizar",
                            columns: [

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Orden Tipo",
                                    id: "tipo_orden",
                                    accessor: (d) => d.tipo_orden,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["tipo_orden"] }),
                                    filterAll: true,


                                },
                                {
                                    Header: "N° Orden",
                                    id: "norden",
                                    accessor: (d) => d.norden,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["norden"] }),
                                    filterAll: true,


                                },
                                {
                                    Header: "N° Factura",
                                    id: "nfactura",
                                    accessor: (d) => d.nfactura,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nfactura"] }),
                                    filterAll: true,


                                },
                                {
                                    Header: "Proveedor",
                                    id: "nombre",
                                    accessor: (d) => d.nombre,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nombre"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Importe",
                                    id: "total",
                                    accessor: (d) => d.total,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["total"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Estado",
                                    id: "estado",
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>
                                            {row.original.autorizado === 0 && row.original.estado === 1 ?
                                                ("Pendiente")
                                                : row.original.autorizado === 1 && row.original.estado === 1 ?
                                                    ("Autorizada")
                                                    :
                                                    row.original.estado === 0 ?
                                                        ("Anulada")
                                                        : null}
                                        </div>
                                    ),
                                },

                                {
                                    Header: "Operador",
                                    id: "operador_carga",
                                    accessor: (d) => d.operador_carga,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["operador_carga"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>

                                            {row.original.tipo_orden === 'Medica' ? (
                                                <button
                                                    className="btn btn-primary btn-sm mr-1"
                                                    data-toggle="modal"
                                                    data-target="#ModalDetalleOrden"
                                                    onClick={() => detalleOrdenPago(row.original.norden)}
                                                >
                                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                                </button>
                                            ) : null}

                                            <button
                                                className="btn btn-warning btn-sm ml-1"
                                                data-toggle="modal"
                                                data-target="#ModalLegajoOrden"
                                                onClick={() => traerAchivos(row.original.idorden)}
                                            >
                                                <i className="fa fa-folder-open-o" aria-hidden="true"></i>

                                            </button>


                                            {user === 'joaquini' || user === 'vlongo' || user === 'jcmorales' || user === 'rquispe' || user === 'emoreno' ?

                                                (
                                                    <button
                                                        className="btn btn-success btn-sm ml-1"
                                                        onClick={() => autorizarOrden(row.original.idorden)}
                                                    >
                                                        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                                    </button>

                                                ) : null}

                                        </div>
                                    ),
                                },

                            ],
                        },

                    ]}
                    defaultPageSize={50}
                    className="-striped -highlight"
                />



            </div>

        </div >
    )
}

export default ListadoOrdenesSinAutorizar