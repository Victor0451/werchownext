import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';

const ListadoContratos = ({
    listado,
    urlRef,
    routing,
    tipoCon,
    errores2,


}) => {
    return (
        <div
            id="list"
            className='list container border border-dark mt-4 p-4'>

            <h2>
                <u>
                    Listado de Contratos
                </u>
            </h2>

            <div className='mt-4 border border-dark p-4'>

                <div className='row mt-4 mb-4 d-flex justify-content-between'>
                    <div className='col-md-6'>
                        <h5>
                            <u>
                                Seleciona el tipo de contrato a generar:
                            </u>
                        </h5>
                    </div>

                    {!tipoCon ? (
                        <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Cargando tipoCon...</div>
                    ) :
                        (
                            <div className="col-md-4">

                                <select className="custom-select" ref={urlRef}>
                                    <option value="no" >Selecciona una opcion</option>
                                    {tipoCon.map((s, index) => (
                                        <option key={index} value={s.value}>{s.label}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                </div>

                {
                    errores2 ? (
                        <div className='alert alert-danger border border-dark mt-4 mb-4 text-center text-uppercase'>
                            {errores2}
                        </div>
                    ) : null
                }

                <hr className='border border-dark mt-4 mb-4' />

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Contratos",
                            columns: [

                                {
                                    Header: "Locatario",
                                    id: "locatario1",
                                    accessor: (d) => d.locatario1,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["locatario1"] }),
                                    filterAll: true,
                                    width: 200

                                },
                                {
                                    Header: "DNI",
                                    id: "dni1",
                                    accessor: (d) => d.dni1,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["dni1"] }),
                                    filterAll: true,


                                },
                                {
                                    Header: "Fec. Inicio",
                                    id: "fecha_inicio",
                                    accessor: (d) => moment(d.fecha_inicio).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha_inicio"] }),
                                    filterAll: true,



                                },

                                {
                                    Header: "Local",
                                    id: "local",
                                    accessor: (d) => d.local,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["local"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Unidad Funcional",
                                    id: "uf",
                                    accessor: (d) => d.uf,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["uf"] }),
                                    filterAll: true,


                                },


                                {
                                    Header: "Locador",
                                    id: "locador",
                                    accessor: (d) => d.locador,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["locador"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div className=''>
                                            <button className='btn btn-sm btn-success' onClick={() => routing(row.original.locador, row.original.idcontrato)}>
                                                <i className="fa fa-print" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    ),
                                },


                            ],
                        },

                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                />
            </div >
        </div>
    )
}

export default ListadoContratos