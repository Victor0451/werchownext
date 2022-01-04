import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment'
import ModalOpciones from './ModalOpciones';
import ModalRenovarPoliza from './ModalRenovarPoliza';

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
        <div className="mt-4 container border border-dark p-4 list">

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
            <ModalOpciones push={push} row={row} />
            {/* ------------ */}

            {/* MODAL POLIZA */}
            <ModalRenovarPoliza
                row={row}
                nuevaPolRef={nuevaPolRef}
                nuevoVencimientoRef={nuevoVencimientoRef}
                nuevaEmpresaRef={nuevaEmpresaRef}
                errores={errores}
                renovPoliza={renovPoliza}
            />
            {/* ------------------ */}


        </div>
    )
}

export default ListadoAutos

