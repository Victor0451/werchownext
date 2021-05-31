import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from '../../layout/Spinner';
import moment from 'moment'

const InformeCostoTotalServicio = ({ cajas, gastos, ataud, row }) => {

    const calcularTotal = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].monto
        }

        return total.toFixed(2)

    }

    return (
        <div className="container mt-4 border border-dark alert alert-primary">

            <h2>
                <strong>
                    <u>
                        Calculo del costo total por servicio
        </u>
                </strong>
            </h2>

            {row ? (
                <>
                    <div className="mt-2 border border-dark p-4">
                        <h2>
                            <strong>
                                <u>Servicio N° {row.idservicio} - Extinto</u>: {row.apellido},{" "}
                                {row.nombre}
                            </strong>
                        </h2>
                        <div className="border border-dark p-4">
                            <h4>
                                <strong>
                                    <u>
                                        Detalles del servicio
                    </u>
                                </strong>
                            </h4>

                            <div className="mt-2 row">

                                <div className=" col-md-4">
                                    <label>
                                        <u>
                                            Fecha Recepcion
                      </u>
                                        <input type="text" className="mt-1 form-control" value={moment(row.fecha_recepcion).format('DD/MM/YYYY HH:mm:ss')} />
                                    </label>
                                </div>

                                <div className=" col-md-4">
                                    <label>
                                        <u>
                                            Motivo Fallecimiento
                      </u>
                                        <input type="text" className="mt-1 form-control" value={row.motivo} />
                                    </label>
                                </div>

                                <div className=" col-md-4">
                                    <label>
                                        <u>
                                            Tipo de Sevicio
      </u>
                                        <input type="text" className="mt-1 form-control" value={row.tipo_servicio} />
                                    </label>
                                </div>

                                <div className="mt-4 col-md-4">
                                    <label>
                                        <u>
                                            Lugar de Fallecimiento
      </u>
                                        <input type="text" className="mt-1 form-control" value={row.lugar_fallecimiento} />
                                    </label>
                                </div>

                                <div className="mt-4 col-md-4">
                                    <label>
                                        <u>
                                            Velatorio
      </u>
                                        <input type="text" className="mt-1 form-control" value={row.casa_mortuaria} />
                                    </label>
                                </div>
                                <div className="mt-4 col-md-4">
                                    <label>
                                        <u>
                                            Fecha de inhumacion
      </u>
                                        <input type="text" className="mt-1 form-control" value={moment(row.fecha_inhumacion).format('DD/MM/YYYY')} />
                                    </label>
                                </div>
                                <div className="mt-4 col-md-4">
                                    <label>
                                        <u>
                                            Cementerio
      </u>
                                        <input type="text" className="mt-1 form-control" value={row.cementerio} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : <Spinner />}

            <div className="row border border-dark mt-2 p-4">
                <div className="col-md-6">
                    <h4>
                        <strong>
                            <u>
                                Liquidacion Final Del Personal
            </u>
                        </strong>
                    </h4>

                    {
                        !gastos ? (<div className="alert alert-info text-center text-uppercase">No hay Gastos registrados</div>) : (
                            <div className="list mt-2 border border-dark ">
                                <ReactTable
                                    data={gastos}
                                    filterable
                                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                    columns={[
                                        {
                                            Header: "Gastos Por Tareas",
                                            columns: [
                                                {
                                                    Header: "#",
                                                    id: "#",
                                                    filterAll: false,
                                                    width: 20,
                                                    Cell: (row) => <div>{row.index + 1}</div>,
                                                },
                                                {
                                                    Header: "Operador",
                                                    id: "operador",
                                                    accessor: (d) => d.operador,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["operador"] }),
                                                    filterAll: true,
                                                    width: 100,
                                                },
                                                {
                                                    Header: "Concepto",
                                                    id: "tipo_gasto",
                                                    accessor: (d) => d.tipo_gasto,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["tipo_gasto"] }),
                                                    filterAll: true,
                                                    width: 150,

                                                },
                                                {
                                                    Header: "Monto",
                                                    id: "monto",
                                                    accessor: (d) => d.monto,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["monto"] }),
                                                    filterAll: true,
                                                    width: 100,

                                                },

                                            ],
                                        },
                                    ]}
                                    defaultPageSize={5}
                                    className="-striped -highlight"
                                />

                                <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">{calcularTotal(gastos)}</div>

                            </div>
                        )
                    }

                </div>

                <div className="col-md-6">

                    <h4>
                        <strong>
                            <u>
                                Gastos por caja de sepelio
        </u>
                        </strong>
                    </h4>

                    {!gastos ? (<div className="alert alert-info text-center text-uppercase">No hay Gastos registrados</div>) : (

                        <div className="list mt-2 border border-dark ">
                            <ReactTable
                                data={cajas}
                                filterable
                                defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                columns={[
                                    {
                                        Header: "Gastos Caja De Sepelio",
                                        columns: [
                                            {
                                                Header: "#",
                                                id: "#",
                                                filterAll: false,
                                                width: 20,
                                                Cell: (row) => <div>{row.index + 1}</div>,
                                            },
                                            {
                                                Header: "Operador",
                                                id: "operador",
                                                accessor: (d) => d.operador,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["operador"] }),
                                                filterAll: true,
                                                width: 100,

                                            },
                                            {
                                                Header: "Concepto",
                                                id: "concepto",
                                                accessor: (d) => d.concepto,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["concepto"] }),
                                                filterAll: true,
                                                width: 150,

                                            },
                                            {
                                                Header: "Monto",
                                                id: "monto",
                                                accessor: (d) => d.monto,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["monto"] }),
                                                filterAll: true,
                                                width: 100,

                                            },


                                        ],
                                    },
                                ]}
                                defaultPageSize={5}
                                className="-striped -highlight"
                            />
                            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">{calcularTotal(cajas)}</div>
                        </div>

                    )}


                </div>

                <div className="col-md-12">
                    {gastos && cajas ? (
                        <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">Gasto Total Del Serivicio {parseInt(calcularTotal(cajas)) + parseInt(calcularTotal(gastos))}</div>

                    ) : null}
                </div>

            </div>

            {
                !ataud ? (<div className="mt-2 border border-dark  alert alert-info text-center text-uppercase">No hay Ataud Registrado</div>) : (
                    <div className="border border-dark mt-4 p-4">
                        <h4>
                            <strong>
                                <u>
                                    Informacion sobre el ataud
                               </u>
                            </strong>
                        </h4>

                        <div className="row border border-dark mt-2 p-4">

                            <div className="mt-2 col-md-4">
                                <label>
                                    <u>Ataud</u>:
            </label>
                                <input className="form-control" defaultValue={ataud.nombre} />
                            </div>

                            <div className="mt-2 col-md-3">
                                <label>
                                    <u>Tipo</u>:
            </label>
                                <input className="form-control" defaultValue={ataud.tipo} />
                            </div>

                            <div className="mt-2 col-md-3">
                                <label>
                                    <u>Uso</u>:
            </label>
                                <input className="form-control" defaultValue={ataud.uso} />
                            </div>

                            <div className="mt-2 col-md-3">
                                <label>
                                    <u>Medidas</u>:
            </label>
                                <input className="form-control" defaultValue={ataud.medidas} />
                            </div>

                            <div className="mt-2 col-md-3">
                                <label>
                                    <u>Fabricante</u>:
            </label>
                                <input className="form-control" defaultValue={ataud.fabricante} />
                            </div>
                        </div>
                    </div>
                )
            }

            {row && row.idparcela ? (<div className="mt-4 border border-dark alert alert-info text-center text-uppercase">El servicio cuenta con parcela</div>)
                : (<div className="mt-4 border border-dark alert alert-info text-center text-uppercase">El servicio no cuenta con parcela</div>)}

            {row && row.cremacion === 1 ? (<div className="mt-4 border border-dark alert alert-info text-center text-uppercase">El servicio cuenta con cremacion</div>)
                : (<div className="mt-4 border border-dark alert alert-info text-center text-uppercase">El servicio no cuenta con cremacion</div>)}
        </div>
    )
}

export default InformeCostoTotalServicio
