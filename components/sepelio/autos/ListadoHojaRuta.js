import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment'
import ModalOpciones from './ModalOpciones';
import ModalRenovarPoliza from './ModalRenovarPoliza';

const ListadoHojaRuta = ({
    listhojaruta,
    push,
    getRow,
    row,
    nuevaPolRef,
    nuevoVencimientoRef,
    nuevaEmpresaRef,
    renovPoliza,
    errores
}) => {


    if (!listhojaruta)
        return (
            <div className="container mt-4 alert alert-danger p-4 border border-dark text-uppercase text-center">
                No hay hojas de ruta registrados
            </div>
        );

    return (
        <div className="mt-4 container border border-dark p-4 list">

            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <strong>
                            <u>
                                Listado de Hojas de Ruta
                            </u>
                        </strong>
                    </h2>
                </div>
                <div className="col-md-6">
                    <a href="/sepelio/autos/hojaruta" className="btn btn-info btn-block btn-sm" >
                        Ingresar Hoja de Ruta
                    </a>
                </div>
            </div>

            <div className="mt-4 list border border-dark ">
                <ReactTable
                    data={listhojaruta}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Listado De Autos",
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
                                    Header: "Auto",
                                    id: "auto",
                                    accessor: (d) => d.auto,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["auto"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Conductor",
                                    id: "conductor",
                                    accessor: (d) => d.conductor,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["conductor"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Servicio",
                                    id: "servicio",
                                    accessor: (d) => d.servicio,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["servicio"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Retiro",
                                    id: "retiro",
                                    accessor: (d) => d.retiro,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["retiro"] }),
                                    filterAll: true,
                                },

                                // {
                                //     Header: "Salida",
                                //     id: "fecha_salida",
                                //     accessor: (d) => moment(d.fecha_salida).format('DD/MM/YYYY HH:mm:ss'),
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["fecha_salida"] }),
                                //     filterAll: true,
                                // },

                                // {
                                //     Header: "KM salida",
                                //     id: "km_salida",
                                //     accessor: (d) => d.km_salida,
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["km_salida"] }),
                                //     filterAll: true,
                                // },

                                // {
                                //     Header: "Llegada",
                                //     id: "fecha_llegada",
                                //     accessor: (d) => moment(d.fecha_llegada).format('DD/MM/YYYY HH:mm:ss'),
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["fecha_llegada"] }),
                                //     filterAll: true,
                                // },

                                // {
                                //     Header: "KM llegada",
                                //     id: "km_llegada",
                                //     accessor: (d) => d.km_llegada,
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["km_salida"] }),
                                //     filterAll: true,
                                // },

                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm mr-1"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Opciones"
                                                data-toggle='modal'
                                                data-target='#opciones'
                                                onClick={() => getRow(row.original)}
                                            >
                                                Opciones
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



            {/* <!-- Modal --> */}
            <ModalOpciones push={push} row={row} />
            {/* ------------ */}

           
           


        </div>
    )
}

export default ListadoHojaRuta

