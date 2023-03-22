import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const DetallePlanSocio = ({
    plan,
    planVisit,
    checkPago,
    pagoRef,
    datosVisita
}) => {
    return (
        <div className='container border border-dark list p-4 mt-4'>

            <div className="row">

                <div className="col-md-8">
                    <h4>
                        <u>Detalle Plan Socio</u>: {plan.contrato} - {plan.socio}
                    </h4>
                </div>

                <div className="col-md-4">
                    <a href={`/gestion/werchow/servicios/reciboplan?id=${plan.idplansocio}`} target={"_blank"} className="btn btn-primary btn-block">
                        Imprimir Recibo Activacion
                    </a>

                </div>

            </div>

            <div className="row d-flex justify-content-center mt-4 mb-4 border border-dark p-4"  >
                <div className="col-md-4" id="frmpag" hidden>

                    <label>
                        <u>
                            Ingresar Monto
                        </u>
                    </label>

                    <input type="text" className="form-control" defaultValue={0} ref={pagoRef} id="inpuntpag" />
                </div>

                <div className="col-md-8">
                    {
                        plan.plan === 'ORTO' ? (
                            <div className="alert alert-info border border-dark text-center text-uppercase">
                                <strong><u>Plan Ortodoncia</u></strong>: Al haber terminado el plan de pagos del kit, ahora el monto a ingresar es el acordado por el/la DR/A.
                            </div>
                        ) : plan.plan === 'IMP' ? (
                            <div className="alert alert-info border border-dark text-center text-uppercase">
                                <strong><u>Plan Implante Dental</u></strong>: Una vez cancelado el pago del implante, consultar con el/la DR/A los pasos a seguir.
                            </div>
                        ) : null
                    }


                </div>
            </div>



            <div className="row d-flex justify-content-center mt-4 ">
                <div className="col-md-8 border border-dark p-1" >
                    <ReactTable
                        data={planVisit}
                        filterable
                        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                        columns={[
                            {
                                Header: "Plan de Visitas",
                                columns: [

                                    {
                                        Header: "Visita",
                                        id: "nvisita",
                                        accessor: (d) => d.nvisita,
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value, { keys: ["nvisita"] }),
                                        filterAll: true,
                                        width: 100
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
                                        id: "pago",
                                        accessor: (d) => d.pago,
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value, { keys: ["pago"] }),
                                        filterAll: true,


                                    },

                                    {
                                        Header: "Pagado",
                                        id: "pagado",
                                        filterAll: true,

                                        Cell: (row) => (
                                            <div>
                                                {row.original.pagado === 0 ? (
                                                    <div>
                                                        No
                                                    </div>
                                                ) : row.original.pagado === 1 ? (
                                                    <div>
                                                        Si
                                                    </div>
                                                ) : null}
                                            </div>
                                        ),
                                    },

                                    {
                                        Header: "Acciones",
                                        id: "acciones",
                                        filterAll: true,

                                        Cell: (row) => (
                                            <div>

                                                {
                                                    row.original.pagado === 0 ? (

                                                        <button
                                                            className="btn btn-success btn-sm"
                                                            onClick={() => checkPago(row.original)}
                                                        >
                                                            <i
                                                                className="fa fa-arrow-left"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </button>
                                                    ) : null
                                                }

                                                {
                                                    row.original.pagado === 1 ? (

                                                        <button
                                                            className="btn btn-secondary btn-sm"
                                                            data-toggle="modal"
                                                            data-target="#modalReciboPagoVisita"
                                                            onClick={() => { datosVisita(row.original) }}
                                                        >
                                                            <i
                                                                className="fa fa-print"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </button>

                                                    ) : null

                                                }
                                            </div>
                                        ),
                                    },
                                ],
                            },

                        ]
                        }

                        defaultPageSize={10}
                        className="-striped -highlight"
                    />

                </div>
            </div>
        </div>
    )
}

export default DetallePlanSocio