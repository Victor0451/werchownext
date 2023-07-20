import React from "react";
import matchSorter from "match-sorter";
import ReactTable from "react-table";
import moment from "moment";

const FormCobranzaCuota = ({
    planCuotas,
    prestamoEmpleado,
    impactarCobro
}) => {

    return (
        <div className='container list border border-dark p-4 mt-4 mb-4'>

            <h2>
                <strong>
                    <u>
                        Sub. Cont. Familiar para Empleados
                    </u>: Cobranza de Cuotas
                </strong>
            </h2>


            {
                prestamoEmpleado ? (

                    <div className="border border-dark mt-4 p-4 mb-4">

                        <h4>
                            <strong>
                                <u>
                                    Empleado
                                </u>: {prestamoEmpleado.empleado}
                            </strong>
                        </h4>

                        <div className="row d-flex  p-4">

                            <div className="form-group col-md-3">
                                <label>
                                    <strong>
                                        {" "}
                                        <u> Cuota Mensual: </u>
                                    </strong>
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={prestamoEmpleado.cuota_mensual}
                                    readOnly

                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>
                                    <strong>
                                        {" "}
                                        <u> Capital A Devolver: </u>
                                    </strong>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={prestamoEmpleado.capital_dev}
                                    readOnly
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>
                                    <strong>
                                        {" "}
                                        <u> Inicia en: </u>
                                    </strong>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={prestamoEmpleado.inicia}
                                    readOnly
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>
                                    <strong>
                                        {" "}
                                        <u> Termina en: </u>
                                    </strong>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={prestamoEmpleado.termina}
                                    readOnly
                                />
                            </div>

                        </div>

                    </div>

                ) : null
            }


            {
                planCuotas ? (
                    <div className='border border-dark p-4 mt-4'>

                        <ReactTable
                            data={planCuotas}
                            filterable
                            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                            columns={[
                                {
                                    Header: "Prestamos",
                                    columns: [
                                        {
                                            Header: "Cuota",
                                            id: "cuota",
                                            accessor: (d) => d.cuota,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["cuota"] }),
                                            filterAll: true,
                                            width: 100
                                        },
                                        {
                                            Header: "Fecha De Cobro",
                                            id: "fecha_cobro",
                                            accessor: (d) => moment(d.fecha_cobro).format('DD/MM/YYYY'),
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["fecha_cobro"] }),
                                            filterAll: true,
                                        },
                                        {
                                            Header: "Operador",
                                            id: "importe",
                                            accessor: (d) => d.importe,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["importe"] }),
                                            filterAll: true,
                                        },
                                        {
                                            Header: "Fecha Pago",
                                            id: "fecha_pago",
                                            accessor: (d) => d.fecha_pago,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["fecha_pago"] }),
                                            filterAll: true,
                                        },
                                        {
                                            Header: "Operador",
                                            id: "operador",
                                            accessor: (d) => d.operador,
                                            filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["operador"] }),
                                            filterAll: true,
                                        },
                                        {
                                            Header: "Estado",
                                            filterAll: true,

                                            Cell: (row) => (
                                                <div>
                                                    {
                                                        row.original.estado === 0 ? (
                                                            <>
                                                                Sin Cobrar
                                                            </>
                                                        ) : row.original.estado === 1 ? (
                                                            <>
                                                                Cobrado
                                                            </>
                                                        ) : null
                                                    }
                                                </div>
                                            ),
                                        },

                                        {
                                            Header: "Aciones",
                                            filterAll: true,
                                            width: 260,
                                            Cell: (row) => (
                                                <div>
                                                    <button
                                                        className="btn btn-success btn-sm mr-1"
                                                        onClick={() => { impactarCobro(row.original.idpago) }}

                                                    >
                                                        <i className="fa fa-money" aria-hidden="true"></i>
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
                ) : null
            }



        </div >
    )
}

export default FormCobranzaCuota