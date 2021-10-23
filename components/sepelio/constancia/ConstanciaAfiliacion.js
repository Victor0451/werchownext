import React from 'react'

const ConstanciaAfiliacion = () => {
    return (
        <div className="container mt-4 border border-dark p-4 alert alert-primary">

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
                        Por medio de la presente se extiende una constancia en la que el Extinto  Sr. Pacheco Roberto  DNI: 6.147.427
                        hasta el momento de su deceso estuvo afiliado a WERCHOW SERVICIOS SOCIALES S.R.L., en carácter de Titular del Grupo familiar.
                        Se extiende la presente constancia para ser entregado a la Cia de Seguros del Instituto de Seguros de Jujuy.
                        A solicitud de La Sra. Carmen Lucrecia  Reyes  DNI 13.393.659. En la ciudad de San Salvador de Jujuy,
                        a los veintisiete días mes de Octubre del  año dos mil veinte.- - - - - - - - -
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
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConstanciaAfiliacion
