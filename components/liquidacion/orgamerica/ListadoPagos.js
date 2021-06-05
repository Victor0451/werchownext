import React from 'react'
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'
import Spinner from '../../layout/Spinner'

const ListadoPagos = ({ listado }) => {

    if (!listado) return <Spinner />

    const totales = (arr, flag) => {

        let cobranza = 0
        let total = 0

        if (flag === 'cobranza') {
            for (let i = 0; i < arr.length; i++) {
                cobranza += arr[i].IMPORTE
            }

            return cobranza

        } else if (flag === 'total') {

            for (let i = 0; i < arr.length; i++) {
                total = i
            }

            return total + 1
        } else if (flag === 'comision') {
            for (let i = 0; i < arr.length; i++) {
                cobranza += arr[i].IMPORTE
            }

            let com = (cobranza * 15) / 100

            return com
        }
    }

    return (
        <div className="container border border-dark alert alert-primary p-4 mt-4">


            <div className=" border border-dark p-4">

                <h4><strong><u>Resumen</u></strong></h4>

                <div className="mt-4 row">
                    <div className="col-md-4">
                        <h6>
                            <strong>
                                <u>
                                    Socios que abonaron
                            </u>: {totales(listado, 'total')}
                            </strong>
                        </h6>
                    </div>

                    <div className="col-md-4">
                        <h6>
                            <strong>
                                <u>
                                    Cobranza
                            </u>: {totales(listado, 'cobranza')}
                            </strong>
                        </h6>
                    </div>

                    <div className="col-md-4">
                        <h6>
                            <strong>
                                <u>
                                    Comision
                            </u>: {totales(listado, 'comision')}
                            </strong>
                        </h6>
                    </div>
                </div>
            </div>


            <div className="mt-4 list border border-dark">
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
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
                                },
                                {
                                    Header: "Apellido",
                                    id: "APELLIDOS",
                                    accessor: (d) => d.APELLIDOS,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Nombre",
                                    id: "NOMBRES",
                                    accessor: (d) => d.NOMBRES,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
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
                                    Header: "Calle",
                                    id: "CALLE",
                                    accessor: (d) => d.CALLE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["CALLE"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "N°",
                                    id: "NRO_CALLE",
                                    accessor: (d) => d.NRO_CALLE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["NRO_CALLE"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Barrio",
                                    id: "BARRIO",
                                    accessor: (d) => d.BARRIO,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["BARRIO"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Cuota",
                                    id: "IMPORTE",
                                    accessor: (d) => d.IMPORTE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                    filterAll: true,
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

export default ListadoPagos
