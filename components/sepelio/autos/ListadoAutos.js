import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment'
import FormRenovarPoliza from './FormRenovarPoliza';

const ListadoAutos = ({
    autos,
    push,
    getRow,
    row,
    nuevaPolRef,
    nuevoVencimientoRef,
    nuevaEmpresaRef,
    renovPoliza,
    errores
}) => {


    if (!autos)
        return (
            <div className="container mt-4 alert alert-danger p-4 border border-dark text-uppercase text-center">
                No hay autos registrados
            </div>
        );

    return (
        <div className="mt-4 container border border-dark p-4 alert alert-primary">

            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <strong>
                            <u>
                                Listado de Autos
                    </u>
                        </strong>
                    </h2>
                </div>
                <div className="col-md-6">
                    <a href="/sepelio/autos/nuevo" className="btn btn-info btn-block btn-sm" >
                        Ingresar Auto
</a>
                </div>
            </div>

            <div className="mt-4 list border border-dark ">
                <ReactTable
                    data={autos}
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
                                    Header: "Responsable",
                                    id: "responsable",
                                    accessor: (d) => d.responsable,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["responsable"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Empresa De Seguro",
                                    id: "empresa",
                                    accessor: (d) => d.empresa,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["empresa"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Nro Poliza",
                                    id: "nro_poliza",
                                    accessor: (d) => d.nro_poliza,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nro_poliza"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Vencimiento",
                                    id: "vencimiento",
                                    accessor: (d) => moment(d.vencimiento).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["vencimiento"] }),
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
            <div className="modal fade" id="opciones" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Opciones</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="p-4">
                                <div className=" border border-dark alert alert-primary p-4 row">


                                    <div className="col-md-3">

                                        <button
                                            className="btn btn-block btn-warning border mr-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Editar"
                                            data-dismiss="modal"
                                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/editar")}
                                        >
                                            <i
                                                className="fa fa-pencil-square-o"
                                                aria-hidden="true"
                                            > Editar</i>
                                        </button>

                                    </div>

                                    <div className="col-md-3">

                                        <button
                                            className="btn btn-block btn-danger mr-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Elmiminar"
                                            data-dismiss="modal"
                                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/impresion")}
                                        >
                                            <i className="fa fa-print" aria-hidden="true"> Eliminar</i>
                                        </button>

                                    </div>


                                    <div className="col-md-3 ">

                                        <button
                                            className="btn btn-block btn-info mr-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Renovar Poliza"
                                            data-target='#renovpol'
                                            data-toggle="modal"


                                        >
                                            <i className="fa fa-money" aria-hidden="true"> Renovar Poliza</i>
                                        </button>

                                    </div>


                                    <div className="col-md-3 ">

                                        <button
                                            className="btn btn-block btn-success mr-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Pago de Patente"
                                            data-dismiss="modal"
                                            onClick={() => push(row.patente, row.idauto, "/sepelio/autos/pagopatente")}

                                        >
                                            <i className="fa fa-money" aria-hidden="true"> Pago de Patente</i>
                                        </button>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* ------------ */}

            {/* MODAL POLIZA */}
            <div className="modal fade" id="renovpol" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Opciones</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormRenovarPoliza row={row} nuevaPolRef={nuevaPolRef} nuevoVencimientoRef={nuevoVencimientoRef} nuevaEmpresaRef={nuevaEmpresaRef} errores={errores} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={() => renovPoliza(row.idauto)}>Renovar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------ */}


        </div>
    )
}

export default ListadoAutos

