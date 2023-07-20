import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ModalEgresos from "./ModalEgresos";
import ModalIngresos from "./ModalIngresos";

const FormCajaPato = ({
    ingresos,
    egresos,
    descripcionIRef,
    cantidadIRef,
    importeIRef,
    descripcionERef,
    cantidadERef,
    importeERef,
    regEgreso,
    regIngreso,
    calcTotalMovimientos,


}) => {
    return (
        <div className='mt-4 container border border-dark list p-4'>

            <h4>
                <strong>
                    <u>Caja Otero</u>: {moment().format('DD/MM/YYYY')}
                </strong>
            </h4>

            <div className='row mt-4 border border-dark p-2'>


                <div className='col-md-6'>

                    <button
                        className="mt-4 mb-4 btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalIngresos"
                    >
                        Agregar Ingreso
                    </button>


                    {ingresos.length !== 0 ? (
                        <div className="list">


                            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
                                Total de Ingresos: ${calcTotalMovimientos(ingresos, 'I')}
                            </div>

                        </div>
                    ) : (<div className='mt-4 border border-dark alert alert-info text-center text-uppercase'>
                        No hay ingresos registrados
                    </div>)}
                </div>

                <div className='col-md-6'>

                    <button
                        className="mt-4 mb-4 btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalEgresos"
                    >
                        Agregar Egresos
                    </button>

                    {egresos.length !== 0 ? (
                        <div className="list">

                            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
                                Total de Egresos: ${calcTotalMovimientos(egresos, 'E')}
                            </div>

                        </div>

                    ) : (<div className='mt-4 border border-dark alert alert-info text-center text-uppercase'>
                        No hay Egresos registrados
                    </div>)}
                </div>

            </div>

            <ModalEgresos
                descripcionERef={descripcionERef}
                cantidadERef={cantidadERef}
                importeERef={importeERef}
                regEgreso={regEgreso}
            />

            <ModalIngresos
                descripcionIRef={descripcionIRef}
                cantidadIRef={cantidadIRef}
                importeIRef={importeIRef}
                regIngreso={regIngreso}
            />

        </div>
    )
}

export default FormCajaPato
