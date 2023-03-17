import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';



const FormAdministracion = ({
    listFa,
    listOtero,
    repunteoOrdenes,
    orden,
    buscarOrden,
    ordFabianRef,
    ordOteroRef,
    levantarOrden,
    impLiqRef,
    modifImporte,
    traerDetalleOrdenPago,
    ordenPagoRef,
    detOrde,
    modifImporteOrden,
    impModRef,
    calcTotalOrden,
    ordenesSinPuntear
}) => {
    return (
        <div className='container mt-4 p-4 border border-dark list'>

            <div className='row'>

                <div className='col-md-10'>
                    <h2>
                        <strong>
                            <u>
                                Auditorias: ordenes de pago
                            </u>
                        </strong>
                    </h2>
                </div>

                <div className='col-md-2'>
                    <button className='btn btn-success ' onClick={() => { ordenesSinPuntear() }}>
                        Actualizar Listados
                    </button>
                </div>

            </div>

            <div className='border border-dark p-4 mt-4'>

                <div className='row'>

                    <div className='col-md-6'>
                        <h4 className='mb-4'>
                            <strong>
                                <u>
                                    Usos Otero Liquidados Sin Puntear
                                </u>
                            </strong>
                        </h4>

                        <ReactTable
                            data={listOtero}
                            filterable
                            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                            columns={[
                                {
                                    Header: "Usos Otero",
                                    columns: [
                                        {
                                            Header: "Sucursal",
                                            id: "sucursal",
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["sucursal"] }),
                                            filterAll: true,

                                            Cell: (row) => (
                                                <div>
                                                    {
                                                        row.original.sucursal === 'O' ?
                                                            (<div>Otero</div>) :
                                                            row.original.sucursal === 'W' ?
                                                                (<div>Casa Central</div>) :
                                                                row.original.sucursal === 'R' ?
                                                                    (<div>Perico</div>) :
                                                                    row.original.sucursal === 'L' ?
                                                                        (<div>Palpala</div>) :
                                                                        row.original.sucursal === 'P' ?
                                                                            (<div>San Pedro</div>) :
                                                                            row.original.sucursal === 'C' ?
                                                                                (<div>El Carmen</div>) :
                                                                                null

                                                    }
                                                </div>
                                            ),
                                        },
                                        {
                                            Header: "N° Consulta",
                                            id: "nconsulta",
                                            accessor: (d) => d.nconsulta,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["nconsulta"] }),
                                            filterAll: true,


                                        },
                                        {
                                            Header: "Orden de pago",
                                            id: "norden",
                                            accessor: (d) => d.norden,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["norden"] }),
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
                                            Header: "Operador",
                                            id: "operador_carga",
                                            accessor: (d) => d.operador_carga,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["operador_carga"] }),
                                            filterAll: true,


                                        },
                                    ],
                                },

                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                        <button className='btn btn-primary mt-4' onClick={() => { repunteoOrdenes('O') }}>
                            Repuntear Usos
                        </button>

                    </div>


                    <div className='col-md-6'>
                        <h4 className='mb-4'>
                            <strong>
                                <u>
                                    Usos Fabian Liquidados Sin Puntear
                                </u>
                            </strong>
                        </h4>

                        <ReactTable
                            data={listFa}
                            filterable
                            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                            columns={[
                                {
                                    Header: "Usos Fabian",
                                    columns: [
                                        {
                                            Header: "Sucursal",
                                            id: "sucursal",
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["sucursal"] }),
                                            filterAll: true,

                                            Cell: (row) => (
                                                <div>
                                                    {
                                                        row.original.sucursal === 'O' ?
                                                            (<div>Otero</div>) :
                                                            row.original.sucursal === 'W' ?
                                                                (<div>Casa Central</div>) :
                                                                row.original.sucursal === 'R' ?
                                                                    (<div>Perico</div>) :
                                                                    row.original.sucursal === 'L' ?
                                                                        (<div>Palpala</div>) :
                                                                        row.original.sucursal === 'P' ?
                                                                            (<div>San Pedro</div>) :
                                                                            row.original.sucursal === 'C' ?
                                                                                (<div>El Carmen</div>) :
                                                                                null

                                                    }
                                                </div>
                                            ),
                                        },
                                        {
                                            Header: "N° Consulta",
                                            id: "nconsulta",
                                            accessor: (d) => d.nconsulta,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["nconsulta"] }),
                                            filterAll: true,


                                        },

                                        {
                                            Header: "Orden de pago",
                                            id: "norden",
                                            accessor: (d) => d.norden,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["norden"] }),
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
                                            Header: "Operador",
                                            id: "operador_carga",
                                            accessor: (d) => d.operador_carga,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["operador_carga"] }),
                                            filterAll: true,


                                        },
                                    ],
                                },

                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />

                        <button className='btn btn-primary mt-4' onClick={() => { repunteoOrdenes('F') }}>
                            Repuntear Usos
                        </button>

                    </div>
                </div>

            </div>

            <div className='mt-4 border border-dark p-4'>

                <h4 className='mb-4'>
                    <strong>
                        <u>
                            Correccion de Usos
                        </u>
                    </strong>
                </h4>

                <div className='row'>

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


                    {
                        orden.length > 0 ? (

                            <div className='col-md-12 border border-dark mt-4 p-2'>

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


                </div>

            </div>

            <div className='mt-4 border border-dark p-4'>

                <h4 className='mb-4'>
                    <strong>
                        <u>
                            Correccion total ord. pago
                        </u>: $ {calcTotalOrden(detOrde)}

                    </strong>
                </h4>

                <div className='row'>

                    <div className='col-md-6'>
                        <div className='col-md-8'>

                            <label>
                                <u>
                                    Ingresar N° de Orden de Pago
                                </u>
                            </label>

                            <input type={"text"} className="form-control" ref={ordenPagoRef} />

                        </div>

                        <div className='col-md-4 mt-4'>

                            <button
                                className='btn btn-primary'
                                onClick={traerDetalleOrdenPago}
                            >
                                Buscar
                            </button>

                        </div>
                    </div>

                    <div className='col-md-6'>

                        <div className='col-md-8'>

                            <label>
                                <u>
                                    Modificar Monto Ord. Pag.:
                                </u>
                            </label>

                            <input type={"number"} className="form-control" ref={impModRef} />

                        </div>

                        <div className='col-md-4 mt-4'>

                            <button
                                className='btn btn-primary'
                                onClick={modifImporteOrden}
                            >
                                Modificar
                            </button>

                        </div>

                    </div>



                    <div className='col-md-12 mt-4'>

                        <ReactTable
                            data={detOrde}
                            filterable
                            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                            columns={[
                                {
                                    Header: "Detalle Orden de Pago",
                                    columns: [
                                        {
                                            Header: "Sucursal",
                                            id: "sucursal",
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["sucursal"] }),
                                            filterAll: true,

                                            Cell: (row) => (
                                                <div>
                                                    {
                                                        row.original.sucursal === 'O' ?
                                                            (<div>Otero</div>) :
                                                            row.original.sucursal === 'W' ?
                                                                (<div>Casa Central</div>) :
                                                                row.original.sucursal === 'R' ?
                                                                    (<div>Perico</div>) :
                                                                    row.original.sucursal === 'L' ?
                                                                        (<div>Palpala</div>) :
                                                                        row.original.sucursal === 'P' ?
                                                                            (<div>San Pedro</div>) :
                                                                            row.original.sucursal === 'C' ?
                                                                                (<div>El Carmen</div>) :
                                                                                null

                                                    }
                                                </div>
                                            ),
                                        },
                                        {
                                            Header: "N° Consulta",
                                            id: "nconsulta",
                                            accessor: (d) => d.nconsulta,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["nconsulta"] }),
                                            filterAll: true,


                                        },
                                        {
                                            Header: "Fecha",
                                            id: "fecha",
                                            accessor: (d) => moment(d.fecha).format('DD/MM/YYYY'),
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["fecha"] }),
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
                                            Header: "Operador",
                                            id: "operador_carga",
                                            accessor: (d) => d.operador_carga,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["operador_carga"] }),
                                            filterAll: true,


                                        },
                                    ],
                                },

                            ]}
                            defaultPageSize={15}
                            className="-striped -highlight"
                        />

                    </div>

                </div>
            </div>


        </div>
    )
}

export default FormAdministracion