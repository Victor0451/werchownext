import React from 'react'

const DiseñoCarnet = ({
    ficha,
    adhs,
}) => {



    return (
        <div className='borderImp row list p-2'>

            {/* FRENTE */}

            <div className='col-md-6'>
                <div className=''>

                    <div className='row'>

                        <div className='col-md-9'>
                            <div>
                                N° {ficha.CONTRATO}
                            </div>

                            <div className='mt-2'>
                                {ficha.APELLIDOS}, {ficha.NOMBRES}
                            </div>

                            <div className='mt-2'>
                                {ficha.NRO_DOC}
                            </div>

                        </div>

                        <div className='col-md-2 mr-1'>
                            <img src='/img/logo.png' className='werchowlogo' />
                        </div>

                    </div>



                    <div className='row mt-4'>

                        <div className='col-md-2'>
                            <img src='/img/carqr.jpg' className='carqr' />
                        </div>

                        <div className='col-md-9 mr-1'>

                            <label className='col-md-12 d-flex justify-content-end'>
                                Adherentes
                            </label>

                            <div className='col-md-12 d-flex justify-content-end'>


                                {
                                    adhs && adhs.length > 4 ? (


                                        <div className=''>
                                            {
                                                adhs.slice(0, 5).map((a, index) => (
                                                    <div key={index}>
                                                        <font size="1">
                                                            * {a.APELLIDOS}, {a.NOMBRES}
                                                        </font>
                                                    </div>
                                                ))
                                            }
                                        </div>



                                    ) : (
                                        <div>
                                            {adhs ? (
                                                <>
                                                    {adhs.map((a, index) => (
                                                        <div key={index}>
                                                            <font size="1">
                                                                * {a.APELLIDOS}, {a.NOMBRES}
                                                            </font>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : null
                                            }
                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* ---------------------------------             */}


            {/* DORSO */}

            <div className='col-md-6'>

                <div className='col-md-12 text-center'>
                    <font size="1">
                        Casa Central 4225555 / Guardia 24hs 4228433 - 154177373
                    </font>
                </div>



                <div className='row mt-2'>

                    <label className='col-md-12 d-flex justify-content-end'>
                        Adherentes
                    </label>

                    <div className='col-md-12 d-flex justify-content-end'>


                        {
                            adhs && adhs.length > 4 ? (


                                <div className=''>
                                    {adhs ? (
                                        <>
                                            {adhs.slice(5).map((a, index) => (
                                                <div key={index}>
                                                    <font size="1">
                                                        * {a.APELLIDOS}, {a.NOMBRES}
                                                    </font>
                                                </div>
                                            ))}
                                        </>
                                    ) : null
                                    }
                                </div>


                            ) : null
                        }

                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <div className='col-md-9  text-center'>
                            <font size="1 " className="">
                                Recuerde mantener su cuota al dia para hacer uso de la cobertura y todo los beneficios que posee.
                            </font>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------------- */}

            <div className='col-md-12 '>
                <img src='/img/cardetalle.jpg' className='cardetalle' />
            </div>
        </div>


    )

}

export default DiseñoCarnet