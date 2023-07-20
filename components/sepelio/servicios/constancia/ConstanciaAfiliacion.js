import React from 'react'
import moment from 'moment'
import Spinner from '../../../layout/Spinner'

const ConstanciaAfiliacion = ({ consta, servicio, cancelarReg }) => {

    if (!consta) return <Spinner />
    return (
        <div className="container mt-4 border border-dark p-4 list">

            <div className="mt-4 list border border-dark p-4">
                <div className="row  p-4">

                    <div className="mt-4 col-md-8">
                        <h3 >
                            <strong>
                                <u>
                                    Constancia de Afiliacion
                                </u>
                            </strong>
                        </h3>
                    </div>

                    <div className="col-md-4 d-flex justify-content-end">
                        <img className="werchowlogo"
                            src="/img/logo.png"
                            alt="werchowlogo"
                        />
                    </div>

                </div>

                <div className="row mt-4 p-4">
                    <p className="text-justify ">
                        Por medio de la presente se extiende una constancia en la que el Extinto  Sr. {servicio.apellido}, {servicio.nombre}  DNI: {servicio.dni_extinto}
                        hasta el momento de su deceso estuvo afiliado a WERCHOW MEDICINA PRIVADA S.A., en carácter de Titular del Grupo familiar.
                        Se extiende la presente constancia para ser entregado a {consta.lugar}.
                        A solicitud del Sr/a  {consta.apellido}, {consta.nombre}  DNI {consta.dni}. En la ciudad de San Salvador de Jujuy,
                        {" "}el {moment().locale('es-ES').format('LL')}.- - - - - - - - -
                    </p>
                </div>

            </div>



            <div className="container border border-dark mt-4">
                <div className="mt-4 p-4 ">
                    <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
                    <div className="row d-flex justify-content-center">
                        <button className="btn btn-primary"
                        // onClick={imprimir}
                        >
                            Imprimir
                        </button>

                        <button className="btn btn-danger ml-1"
                            onClick={cancelarReg}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConstanciaAfiliacion
