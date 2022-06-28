import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ModalNotificaciones = ({
    historia
}) => {

    return (
        <div
            className={`modal fade bd-example-modal-xl-historial`}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Historial de Bonificaciones</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        {
                            historia.length === 0 ? (
                                <div className='mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase'>
                                    El socio no registra bonificaciones
                                </div>
                            ) : (
                                <>

                                    <div className='mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase'>
                                        El socio registra un total de <strong><u>{historia.length}</u></strong> bonificaciones de cuota.
                                    </div>

                                    <div className="list border border-dark">

                                        <ReactTable
                                            data={historia}
                                            filterable
                                            // defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                            columns={[
                                                {
                                                    Header: "Cartera",
                                                    columns: [
                                                        {
                                                            Header: "Contrato",
                                                            id: "CONTRATO",
                                                            accessor: (d) => d.CONTRATO,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                                            filterAll: true,
                                                            width: 80,
                                                        },
                                                        {
                                                            Header: "Operador",
                                                            id: "OPERADOR",
                                                            accessor: (d) => d.OPERADOR,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, { keys: ["OPERADOR"] }),
                                                            filterAll: true,
                                                        },
                                                        {
                                                            Header: "Bonificacion",
                                                            id: "ANTERIOR",
                                                            accessor: (d) => d.ANTERIOR,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, { keys: ["ANTERIOR"] }),
                                                            filterAll: true,
                                                        },

                                                        {
                                                            Header: "Fecha",
                                                            id: "FECHA",
                                                            accessor: (d) => d.FECHA,
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                                                            filterAll: true,
                                                        },

                                                    ],
                                                },
                                            ]}
                                            defaultPageSize={10}
                                            className="-striped -highlight"
                                        />
                                    </div>
                                </>
                            )
                        }

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNotificaciones
