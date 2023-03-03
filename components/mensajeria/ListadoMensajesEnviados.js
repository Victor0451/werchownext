import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';


const ListadoMensajesEnviados = ({
    mensajesEnv,
    guardarMensaje,
    msjLeido,
    traerAchivos
}) => {

    const getTrProps = (state, rowInfo, instance) => {

        if (rowInfo) {

            return {
                style: {
                    "background-color": rowInfo.original.leido === 0 ? "blue" : null,

                    "color": rowInfo.original.leido === 0 ? "white" : null,
                },
            };
        }
        return {};
    };

    return (
        <div className=' border border-dark mt-4 p-4 list'>

            <div className='row'>

                <div className='col-md-4'>
                    <h4>
                        <strong>

                            Mensajes Enviados

                        </strong>
                    </h4>
                </div>

            </div>


            <div className='mt-4 border border-dark p-2'>


                <ReactTable
                    data={mensajesEnv}
                    getTrProps={getTrProps}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Bandeja de entrada",
                            columns: [
                                {
                                    Header: "Envia",
                                    id: "envia",
                                    accessor: (d) => d.envia,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["envia"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Asunto",
                                    id: "asunto",
                                    accessor: (d) => d.asunto,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["asunto"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY HH:mm:ss'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            <button
                                                className="btn btn-sm btn-info border mr-1"
                                                data-toggle="modal"
                                                data-placement="top"
                                                title="Editar"
                                                data-target="#leermsj"
                                                onClick={() => {
                                                    guardarMensaje(row.original);
                                                    msjLeido(row.original.idmail)
                                                    traerAchivos(row.original.codmail)
                                                }}
                                            >
                                                <i
                                                    className="fa fa-eye"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                            {/* 
                                            <button
                                                className="btn btn-sm btn-danger border mr-1"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Eliminar"
                                                onClick={() => eliminarTarea(row.original.idevents)}
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button> */}
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

export default ListadoMensajesEnviados