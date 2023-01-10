import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';

const ListadoEstadoOrdenes = ({
    listado,
    detalleOrdenPago,
    guardarOrde,
    traerAchivos,
    getTrProps,
    updatePagadas,
    anularOrden
}) => {

    if (listado.length === 0) return <div className='container border border-dark alert alert-info text-center text-uppercase mt-4 mb-4'>No hay ordenes registradas</div>

    return (
        <div className='container list mt-4 border border-dark p-4'>

            <h2 >
                <strong>
                    <u>
                        Estado Ordenes de Pago
                    </u>
                </strong>
            </h2>


            <div className='alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase'>
                Las ordenes de pago que no esten pagadas, saldran en color rosado. Por lo contrario, se pondran en color verde.
                Para marcalas como pagadas, primero deben estar autorizadas. De esta manera aparecera un boton verde con un visto,
                al cual haciendole click se tildara como pagada. Las ordenes que aparezcan en rojo con letras, estan anuladas.
            </div>

            <div
                id="list"
                className='border border-dark mt-4 p-1 mt-4'>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    getTrProps={getTrProps}
                    columns={[
                        {
                            Header: "Ordenes Generadas",
                            columns: [

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
                                    Header: "Orden Tipo",
                                    id: "tipo_orden",
                                    accessor: (d) => d.tipo_orden,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["tipo_orden"] }),
                                    filterAll: true,
                                    width: 100,


                                },
                                {
                                    Header: "N° Orden",
                                    id: "norden",
                                    accessor: (d) => d.norden,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["norden"] }),
                                    filterAll: true,
                                    width: 100,


                                },
                                {
                                    Header: "N° Factura",
                                    id: "nfactura",
                                    accessor: (d) => d.nfactura,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nfactura"] }),
                                    filterAll: true,
                                    width: 100,


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
                                    width: 100,


                                },

                                {
                                    Header: "Estado",
                                    id: "estado",
                                    filterAll: true,
                                    width: 100,


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
                                    width: 100

                                },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>

                                            {row.original.pagado === 1 && row.original.autorizado === 1 ? null
                                                : row.original.pagado === 0 && row.original.autorizado === 1 ? (
                                                    <button
                                                        className="btn btn-success btn-sm mr-1"
                                                        onClick={() => { updatePagadas(row.original.idorden, row.original.norden) }}
                                                    >
                                                        <i className="fa fa-check-circle-o" aria-hidden="true"></i>

                                                    </button>

                                                ) : null
                                            }


                                            {row.original.tipo_orden === 'Ordenes Medica' || row.original.tipo_orden === 'Practicas Medica' ? (
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
                                                className="btn btn-secondary btn-sm "
                                                data-toggle="modal"
                                                data-target="#ModalImpresion"
                                                onClick={() => {
                                                    detalleOrdenPago(row.original.norden);
                                                    guardarOrde(row.original)

                                                }}
                                            >
                                                <i className="fa fa-print" aria-hidden="true"></i>

                                            </button>

                                            <button
                                                className="btn btn-info btn-sm ml-1"
                                                data-toggle="modal"
                                                data-target="#ModalSubirArchivo"
                                                onClick={() => guardarOrde(row.original)}
                                            >
                                                <i className="fa fa-upload" aria-hidden="true"></i>

                                            </button>

                                            <button
                                                className="btn btn-warning btn-sm ml-1"
                                                data-toggle="modal"
                                                data-target="#ModalLegajoOrden"
                                                onClick={() => traerAchivos(row.original.idorden)}
                                            >
                                                <i className="fa fa-folder-open-o" aria-hidden="true"></i>

                                            </button>

                                            {row.original.autorizado === 0 && row.original.estado === 1 ? (
                                                <button
                                                    className="btn btn-danger btn-sm ml-1"
                                                    onClick={() => { anularOrden(row.original.idorden, row.original.norden, row.original.tipo_orden) }}
                                                >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>

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

export default ListadoEstadoOrdenes