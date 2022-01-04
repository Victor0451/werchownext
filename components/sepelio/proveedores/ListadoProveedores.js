import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ListadoProveedores = ({ provs, eliminarProv }) => {

    if (!provs)
        return (
            <div className="container mt-4 alert alert-danger p-4 border border-dark">
                No hay proveedores registrados
            </div>
        );
    return (
        <div className="mt-4 container border border-dark p-4 list">

            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <strong>
                            <u>
                                Listado de Proveedores
                    </u>
                        </strong>
                    </h2>
                </div>
                <div className="col-md-6">
                    <a href="/sepelio/proveedores/nuevo" className="btn btn-info btn-block btn-sm" >
                        Ingresar Proveedor
</a>
                </div>
            </div>

            <div className="mt-4 list border border-dark ">
                <ReactTable
                    data={provs}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Listado De Proveedores",
                            columns: [
                                {
                                    Header: "#",
                                    filterAll: false,
                                    width: 50,
                                    Cell: (row) => <div>{row.index}</div>,
                                },
                                {
                                    Header: "Proveedor",
                                    id: "razon",
                                    accessor: (d) => d.razon,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["razon"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Cuit",
                                    id: "cuit",
                                    accessor: (d) => d.cuit,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["cuit"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Domicilio",
                                    id: "domicilio",
                                    accessor: (d) => d.domicilio,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["domicilio"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Telefono",
                                    id: "telefonos",
                                    accessor: (d) => d.telefonos,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["telefonos"] }),
                                    filterAll: true,
                                },
                                {
                                    Header: "Estado",
                                    id: "estado",
                                    filterAll: true,
                                    Cell: (row) => (
                                        <>
                                            {row.original.estado === 1 ? (<div>Activo</div>) :
                                                row.original.estado === 0 ? (<div>En Baja</div>) : null
                                            }
                                        </>
                                    ),
                                },
                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm mr-1"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Eliminar Stock"
                                                onClick={() => eliminarProv(row.original.idproveedor)}
                                                data-dismiss="modal"
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"> Eliminar</i>
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
        </div>
    )
}

export default ListadoProveedores
