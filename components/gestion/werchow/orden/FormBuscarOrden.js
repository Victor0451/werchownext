import moment from 'moment'
import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const FormBuscarOrden = ({
    orden,
    buscarOrden,
    ordFabianRef,
    ordOteroRef,
    levantarOrden,
    impLiqRef,
    modifImporte
}) => {


    return (


        <div className="collapse mt-4 mb-4 border border-dark p-2" id="collapseExample" >
            <div className="card card-body" >
                <div className='row border border-dark p-4'>

                    <div className='col-md-6'>

                        <div className='col-md-8'>

                            <label>
                                <u>
                                    Ingresar N° de Orden (Otero)
                                </u>
                            </label>

                            <input type={"text"} className="form-control" ref={ordOteroRef} placeholder="Ej: O-1520" />

                        </div>

                        <div className='col-md-6 mt-2'>

                            <button
                                className='btn btn-primary'
                                onClick={() => { buscarOrden('O') }}
                            >
                                Buscar
                            </button>

                        </div>

                    </div>

                    <div className='col-md-6'>

                        <div className='col-md-8'>

                            <label>
                                <u>
                                    Ingresar N° de Orden (Fabian)
                                </u>
                            </label>

                            <input type={"text"} className="form-control" ref={ordFabianRef} placeholder="Ej: 000000215230" />

                        </div>

                        <div className='col-md-6 mt-2'>

                            <button
                                className='btn btn-primary'
                                onClick={() => { buscarOrden('F') }}
                            >
                                Buscar
                            </button>

                        </div>

                    </div>

                </div>




                {
                    orden.length > 0 ? (

                        <div className='border border-dark mt-4 p-4'>

                            <h4>
                                <u>
                                    Detalle Orden
                                </u>
                            </h4>

                            <ReactTable
                                data={orden}
                                filterable
                                defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                columns={[
                                    {
                                        Header: "Ordenes Sin Autorizar",
                                        columns: [

                                            {
                                                Header: "Fecha",
                                                id: "FECHA",
                                                accessor: (d) => moment(d.FECHA).format('DD/MM/YYYY'),
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                                                filterAll: true,

                                            },
                                            {
                                                Header: "Orden",
                                                id: "ORDEN",
                                                accessor: (d) => d.ORDEN,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                                                filterAll: true,


                                            },
                                            {
                                                Header: "Contrato",
                                                id: "CONTRATO",
                                                accessor: (d) => d.CONTRATO,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                                filterAll: true,


                                            },
                                            {
                                                Header: "DNI",
                                                id: "NRO_DOC",
                                                accessor: (d) => d.NRO_DOC,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                                                filterAll: true,


                                            },
                                            {
                                                Header: "Prestador",
                                                id: "PRESTADO",
                                                accessor: (d) => d.PRESTADO,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["PRESTADO"] }),
                                                filterAll: true,


                                            },

                                            {
                                                Header: "Servicio",
                                                id: "SERVICIO",
                                                accessor: (d) => d.SERVICIO,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                                                filterAll: true,


                                            },

                                            {
                                                Header: "Importe",
                                                id: "Importe",
                                                filterAll: true,

                                                Cell: (row) => (
                                                    <div>
                                                        <input
                                                            type={"number"}
                                                            className="form-control"
                                                            defaultValue={row.original.IMP_LIQ}
                                                            ref={impLiqRef}
                                                        />
                                                    </div>
                                                ),
                                            },

                                            {
                                                Header: "Anulado",
                                                id: "Anulado",
                                                filterAll: true,

                                                Cell: (row) => (
                                                    <div>
                                                        {
                                                            !row.original.ANULADO || row.original.ANULADO === 'FALSO' ?
                                                                (<>No</>) :
                                                                (<>Si</>)
                                                        }
                                                    </div>
                                                ),
                                            },

                                            {
                                                Header: "Control",
                                                id: "Control",
                                                filterAll: true,

                                                Cell: (row) => (
                                                    <div>
                                                        {
                                                            !row.original.CONTROL ?
                                                                (<>No</>) :
                                                                (<>Si</>)
                                                        }
                                                    </div>
                                                ),
                                            },


                                            {
                                                Header: "N° Orden",
                                                id: "N° Orden",
                                                filterAll: true,

                                                Cell: (row) => (
                                                    <div>
                                                        {
                                                            !row.original.NORDEN ?
                                                                (<>No Registra</>) :
                                                                (<>{row.original.NORDEN}</>)
                                                        }
                                                    </div>
                                                ),
                                            },

                                            {
                                                Header: "Fecha Orden",
                                                id: "Fecha Orden",
                                                filterAll: true,

                                                Cell: (row) => (
                                                    <div>
                                                        {
                                                            !row.original.FECHA_CONTROL ?
                                                                (<>No Registra</>) :
                                                                (<>{moment(row.original.FECHA_CONTROL).format('DD/MM/YYYY')}</>)
                                                        }
                                                    </div>
                                                ),
                                            },



                                            {
                                                Header: "Acciones",
                                                id: "acciones",
                                                filterAll: true,

                                                Cell: (row) => (
                                                    <div>

                                                        {!row.original.CONTROL ? (
                                                            <>
                                                                <button className='btn btn-success btn-sm'>
                                                                    <i className="fa fa-check" aria-hidden="true" onClick={() => levantarOrden(row.original.SUC, row.original.ORDEN)}></i>
                                                                </button>
                                                                <button className='btn btn-warning btn-sm ml-1' onClick={() => modifImporte(row.original.SUC, row.original.ORDEN)}>
                                                                    <i className="fa fa-pencil" aria-hidden="true" ></i>
                                                                </button>
                                                            </>
                                                        ) : null}

                                                        {/* {user === 'joaquini' || user === 'vlongo' || user === 'jcmorales' || user === 'rquispe' || user === 'emoreno' ?

                                    (
                                        <button
                                            className="btn btn-success btn-sm ml-1"
                                            onClick={() => autorizarOrden(row.original.norden)}
                                        >
                                            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                        </button>

                                    ) : null} */}

                                                    </div>
                                                ),
                                            },

                                        ],
                                    },

                                ]}
                                defaultPageSize={3}
                                className="-striped -highlight"
                            />

                        </div>


                    ) : null
                }

            </div >
        </div >
    )
}

export default FormBuscarOrden