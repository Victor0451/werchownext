import React from "react";
import matchSorter from "match-sorter";
import ReactTable from "react-table";
import Link from "next/link";


const ListadoPrestamosEmpleados = ({
    listado,
    user,
    aprobarPrestamos,
    rechazarPrestamos
}) => {

    return (
        <div className="mt-4 list container border border-dark p-4">
            <hr className="mt-4 mb-4" />

            <div className=" border border-dark p-4">
                <h2 className="mb-4">
                    <strong>
                        <u>Listado de Subsidios Registrados</u>
                    </strong>
                </h2>
            </div>

            <hr />

            <div className="border border-dark p-4">
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Prestamos",
                            columns: [
                                {
                                    Header: "Empleado",
                                    id: "empleado",
                                    accessor: (d) => d.empleado,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["empleado"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Fecha De Solicitud",
                                    id: "fecha_solicitud",
                                    accessor: (d) => d.fecha_solicitud,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha_solicitud"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Capital",
                                    id: "capital",
                                    accessor: (d) => d.capital,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["capital"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Plan de Cuotas",
                                    id: "plan_cuotas",
                                    accessor: (d) => d.plan_cuotas,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["plan_cuotas"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Cuota Mensual",
                                    id: "cuota_mensual",
                                    accessor: (d) => d.cuota_mensual,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["cuota_mensual"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Capital A Devolver",
                                    id: "capital_dev",
                                    accessor: (d) => d.capital_dev,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["capital_dev"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Inicia",
                                    id: "inicia",
                                    accessor: (d) => d.inicia,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["inicia"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Termina",
                                    id: "termina",
                                    accessor: (d) => d.termina,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["termina"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Estado",
                                    id: "estado",
                                    accessor: (d) => d.estado,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["estado"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Aciones",
                                    id: "ptm_op",
                                    accessor: (d) => d.ptm_op,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["ptm_op"] }),
                                    filterAll: true,
                                    width: 260,
                                    Cell: (row) => (
                                        <div>
                                            <Link
                                                href={{
                                                    pathname: "/prestamos/caratulaempleados",
                                                    query: {
                                                        id: row.original.idprestamo,
                                                    },
                                                }}
                                            >
                                                <button
                                                    className="btn btn-primary btn-sm mr-1"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Imprimir Caratula"
                                                >
                                                    <i className="fa fa-print" aria-hidden="true"></i>
                                                </button>
                                            </Link>
                                            {user.perfil === 1 || user.perfil === 3 ? (
                                                <>
                                                    <button
                                                        className="btn btn-success btn-sm mr-1"
                                                        onClick={() => aprobarPrestamos(row)}
                                                    >
                                                        <i className="fa fa-check" aria-hidden="true"></i>
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm mr-1"
                                                        onClick={() => rechazarPrestamos(row)}
                                                    >
                                                        <i className="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                </>
                                            ) : null}
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
            <hr className="mt-4 mb-4" />
            <div className="col-md-12 mt-4 d-flex justify-content-end">
                {/* <ExportarPadron padron={data} desde={desde} hasta={hasta} /> */}
            </div>
        </div>
    )
}

export default ListadoPrestamosEmpleados