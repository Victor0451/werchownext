import React from 'react'
import Spinner from '../layout/Spinner'

const Online = ({ oficina,
    cobrador,
    tarjeta,
    banco,
    policia,
    prestamos,
    calcularTotal,
    calcularEfectividad,
    calcularEfecPersonal,
    calcularTotalGeneral,
    calcularTotalGeneralM,
    calcularEfectividadTotal,
    calcularEfectividadTotalM,
    calcularEfecPrestamo,
    werchow,
    mutual }) => {


    return (
        <div className="container mt-4 border border-dark p-4">
            <h5 className="mt-4 mb-4">
                <strong>
                    <u>Cobradores</u>
                </strong>
            </h5>

            {/* COBRADOR */}

            {!cobrador ? <Spinner /> : (
                <>
                    <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                        <div className="col-1">
                            {" "}
                            <strong>ZONA</strong>
                        </div>
                        <div className="col-2">
                            {" "}
                            <strong>COBRADOR</strong>
                        </div>
                        <div className="col-2">
                            <strong>A COBRAR</strong>
                        </div>
                        <div className="col-1">
                            <strong>FICHAS</strong>
                        </div>
                        <div className="col-2">
                            <strong>COBRADO</strong>
                        </div>
                        <div className="col-1">
                            <strong>FICHAS</strong>
                        </div>
                        <div className="col-2">
                            <strong>C.ADEL</strong>
                        </div>
                        <div className="col-1">
                            <strong>EFECT</strong>
                        </div>
                    </div>


                    {cobrador.map((cob, index) => (
                        <div className="d-flex justify-content-between border-bottom text-center">
                            <div className="col-1" key={index}>{cob.zona}</div>
                            <div className="col-2 descr">{cob.descr}</div>
                            <div className="col-2">$ {cob.total}</div>
                            <div className="col-1">{cob.fichas}</div>
                            <div className="col-2">$ {cob.cobrado}</div>
                            <div className="col-1">{cob.fichascob}</div>
                            <div className="col-2">$ {cob.adelantado}</div>
                            <div className="col-1"> {calcularEfecPersonal(cob.cobrado, cob.total, cob.adelantado)}%</div>
                        </div>

                    ))}

                    <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                        <div className="col-3">
                            {" "}
                            <strong>TOTAL</strong>
                        </div>

                        <div className="col-2">
                            <strong>
                                $ {calcularTotal(cobrador, 'total')}
                            </strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularTotal(cobrador, 'fichas')}
                            </strong>
                        </div>
                        <div className="col-2">
                            <strong>
                                $ {calcularTotal(cobrador, 'cobrado')}
                            </strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularTotal(cobrador, 'fichascob')}
                            </strong>
                        </div>
                        <div className="col-2">
                            <strong>$ {calcularTotal(cobrador, 'adelantado')}</strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularEfectividad(cobrador)}%
                            </strong>
                        </div>
                    </div>



                </>
            )}

            {/* TARJETAS */}

            <h5 className="mt-4 mb-4">
                <strong>
                    <u>Tarjetas</u>
                </strong>
            </h5>

            {!tarjeta ? <Spinner /> : (
                <>
                    <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                        <div className="col-1">
                            {" "}
                            <strong>ZONA</strong>
                        </div>
                        <div className="col-2">
                            {" "}
                            <strong>COBRADOR</strong>
                        </div>
                        <div className="col-2">
                            <strong>A COBRAR</strong>
                        </div>
                        <div className="col-1">
                            <strong>FICHAS</strong>
                        </div>
                        <div className="col-2">
                            <strong>COBRADO</strong>
                        </div>
                        <div className="col-1">
                            <strong>FICHAS</strong>
                        </div>
                        <div className="col-2">
                            <strong>C.ADEL</strong>
                        </div>
                        <div className="col-1">
                            <strong>EFECT</strong>
                        </div>
                    </div>


                    {tarjeta.map((tjt, index) => (
                        <div className="d-flex justify-content-between border-bottom text-center">
                            <div className="col-1" key={index}>{tjt.grupo}</div>
                            <div className="col-2">{tjt.descr}</div>
                            <div className="col-2">$ {tjt.total}</div>
                            <div className="col-1">{tjt.fichas}</div>
                            <div className="col-2">$ {tjt.cobrado}</div>
                            <div className="col-1">{tjt.fichascob}</div>
                            <div className="col-2">$ {tjt.adelantado}</div>
                            <div className="col-1"> {calcularEfecPersonal(tjt.cobrado, tjt.total, tjt.adelantado)}% </div>
                        </div>

                    ))}

                    <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                        <div className="col-3">
                            {" "}
                            <strong>TOTAL</strong>
                        </div>

                        <div className="col-2">
                            <strong>
                                $ {calcularTotal(tarjeta, 'total')}
                            </strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularTotal(tarjeta, 'fichas')}
                            </strong>
                        </div>
                        <div className="col-2">
                            <strong>
                                $ {calcularTotal(tarjeta, 'cobrado')}
                            </strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularTotal(tarjeta, 'fichascob')}
                            </strong>
                        </div>
                        <div className="col-2">
                            <strong>$ {calcularTotal(tarjeta, 'adelantado')}</strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularEfectividad(tarjeta)}%
                            </strong>
                        </div>
                    </div>



                </>
            )}


            {werchow == true ? (
                <>

                    {/* BANCO */}

                    <h5 className="mt-4 mb-4">
                        <strong>
                            <u>Banco</u>
                        </strong>
                    </h5>

                    {!banco ? <Spinner /> : (
                        <>
                            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                                <div className="col-1">
                                    {" "}
                                    <strong>ZONA</strong>
                                </div>
                                <div className="col-2">
                                    {" "}
                                    <strong>COBRADOR</strong>
                                </div>
                                <div className="col-2">
                                    <strong>A COBRAR</strong>
                                </div>
                                <div className="col-1">
                                    <strong>FICHAS</strong>
                                </div>
                                <div className="col-2">
                                    <strong>COBRADO</strong>
                                </div>
                                <div className="col-1">
                                    <strong>FICHAS</strong>
                                </div>
                                <div className="col-2">
                                    <strong>C.ADEL</strong>
                                </div>
                                <div className="col-1">
                                    <strong>EFECT</strong>
                                </div>
                            </div>


                            {banco.map((bco, index) => (
                                <div className="d-flex justify-content-between border-bottom text-center">
                                    <div className="col-1" key={index}>{bco.grupo}</div>
                                    <div className="col-2">{bco.descr}</div>
                                    <div className="col-2">$ {bco.total}</div>
                                    <div className="col-1">{bco.fichas}</div>
                                    <div className="col-2">$ {bco.cobrado}</div>
                                    <div className="col-1">{bco.fichascob}</div>
                                    <div className="col-2">$ {bco.adelantado}</div>
                                    <div className="col-1"> {calcularEfecPersonal(bco.cobrado, bco.total, bco.adelantado)}% </div>
                                </div>

                            ))}

                            <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                                <div className="col-3">
                                    {" "}
                                    <strong>TOTAL</strong>
                                </div>

                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(banco, 'total')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(banco, 'fichas')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(banco, 'cobrado')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(banco, 'fichascob')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>$ {calcularTotal(banco, 'adelantado')}</strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularEfectividad(banco)}%
                            </strong>
                                </div>
                            </div>


                        </>
                    )}

                </>
            ) : mutual === true ? null : null}




            {/* OFICINA */}

            <h5 className="mt-4 mb-4">
                <strong>
                    <u>Oficina</u>
                </strong>
            </h5>

            {!oficina ? <Spinner /> : (
                <>
                    <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                        <div className="col-1">
                            {" "}
                            <strong>ZONA</strong>
                        </div>
                        <div className="col-2">
                            {" "}
                            <strong>COBRADOR</strong>
                        </div>
                        <div className="col-2">
                            <strong>A COBRAR</strong>
                        </div>
                        <div className="col-1">
                            <strong>FICHAS</strong>
                        </div>
                        <div className="col-2">
                            <strong>COBRADO</strong>
                        </div>
                        <div className="col-1">
                            <strong>FICHAS</strong>
                        </div>
                        <div className="col-2">
                            <strong>C.ADEL</strong>
                        </div>
                        <div className="col-1">
                            <strong>EFECT</strong>
                        </div>
                    </div>


                    {oficina.map((of, index) => (
                        <div className="d-flex justify-content-between border-bottom text-center">
                            <div className="col-1" key={index}>{of.zona}</div>
                            <div className="col-2">{of.descr}</div>
                            <div className="col-2">$ {of.total}</div>
                            <div className="col-1">{of.fichas}</div>
                            <div className="col-2">$ {of.cobrado}</div>
                            <div className="col-1">{of.fichascob}</div>
                            <div className="col-2">$ {of.adelantado}</div>
                            <div className="col-1"> {calcularEfecPersonal(of.cobrado, of.total, of.adelantado)}% </div>
                        </div>

                    ))}

                    <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                        <div className="col-3">
                            {" "}
                            <strong>TOTAL</strong>
                        </div>

                        <div className="col-2">
                            <strong>
                                $ {calcularTotal(oficina, 'total')}
                            </strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularTotal(oficina, 'fichas')}
                            </strong>
                        </div>
                        <div className="col-2">
                            <strong>
                                $ {calcularTotal(oficina, 'cobrado')}
                            </strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularTotal(oficina, 'fichascob')}
                            </strong>
                        </div>
                        <div className="col-2">
                            <strong>$ {calcularTotal(oficina, 'adelantado')}</strong>
                        </div>
                        <div className="col-1">
                            <strong>
                                {calcularEfectividad(oficina)}%
                            </strong>
                        </div>
                    </div>


                </>
            )}


            {werchow == true ?
                (
                    <>
                        {/* POLICIAS */}

                        <h5 className="mt-4 mb-4">
                            <strong>
                                <u>Policia</u>
                            </strong>
                        </h5>

                        {!policia ? <Spinner /> : (
                            <>
                                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                                    <div className="col-1">
                                        {" "}
                                        <strong>ZONA</strong>
                                    </div>
                                    <div className="col-2">
                                        {" "}
                                        <strong>COBRADOR</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>A COBRAR</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>COBRADO</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>C.ADEL</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>EFECT</strong>
                                    </div>
                                </div>



                                {policia.map((pol, index) => (
                                    <div className="d-flex justify-content-between border-bottom text-center">
                                        <div className="col-1" key={index}>{pol.grupo}</div>
                                        <div className="col-2">{pol.descr}</div>
                                        <div className="col-2">$ {pol.total}</div>
                                        <div className="col-1">{pol.fichas}</div>
                                        <div className="col-2">$ {pol.cobrado}</div>
                                        <div className="col-1">{pol.fichascob}</div>
                                        <div className="col-2">$ {pol.adelantado}</div>
                                        <div className="col-1"> {calcularEfecPersonal(pol.cobrado, pol.total, pol.adelantado)}% </div>
                                    </div>

                                ))}

                                <div className="d-flex justify-content-between text-center border-bottom border-top border-dark descr ">
                                    <div className="col-3">
                                        {" "}
                                        <strong>TOTAL</strong>
                                    </div>

                                    <div className="col-2">
                                        <strong>
                                            $ {calcularTotal(policia, 'total')}
                                        </strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>
                                            {calcularTotal(policia, 'fichas')}
                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>
                                            $ {calcularTotal(policia, 'cobrado')}
                                        </strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>
                                            {calcularTotal(policia, 'fichascob')}
                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>$ {calcularTotal(policia, 'adelantado')}</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong >
                                            {calcularEfectividad(policia)}%
                            </strong>
                                    </div>
                                </div>


                            </>
                        )}

                    </>

                ) : mutual == true ? null : null}



            {werchow == true ?
                (
                    <>
                        {/* PRESTAMOS */}

                        <h5 className="mt-4 mb-4">
                            <strong>
                                <u>Prestamos</u>
                            </strong>
                        </h5>

                        {!prestamos ? <Spinner /> : (
                            <>
                                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                                    <div className="col-1">
                                        {" "}
                                        <strong>ZONA</strong>
                                    </div>
                                    <div className="col-2">
                                        {" "}
                                        <strong>COBRADOR</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>A COBRAR</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>COBRADO</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>C.ADEL</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>EFECT</strong>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-between border-bottom text-center">
                                    <div className="col-1" >**</div>
                                    <div className="col-2">{prestamos.descr}</div>
                                    <div className="col-2">$ {prestamos.total}</div>
                                    <div className="col-1"></div>
                                    <div className="col-2">$ {prestamos.cobrado}</div>
                                    <div className="col-1"></div>
                                    <div className="col-2"></div>
                                    <div className="col-1">{calcularEfecPrestamo(prestamos.total, prestamos.cobrado)}% </div>
                                </div>



                                <div className="d-flex justify-content-between text-center border-bottom border-top border-dark descr ">
                                    <div className="col-3">
                                        {" "}
                                        <strong>TOTAL</strong>
                                    </div>

                                    <div className="col-2">
                                        <strong>
                                            $ {prestamos.total}
                                        </strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>

                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>
                                            $ {prestamos.cobrado}
                                        </strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>

                                        </strong>
                                    </div>
                                    <div className="col-2">

                                    </div>
                                    <div className="col-1">
                                        <strong >
                                            {calcularEfecPrestamo(prestamos.total, prestamos.cobrado)}%
                            </strong>
                                    </div>
                                </div>


                            </>
                        )}

                    </>

                ) : mutual == true ? null : null}



            {werchow == true ? (
                <>
                    {cobrador && oficina && tarjeta && banco && policia && prestamos ? (
                        <div className="m-4 d-flex justify-content-between text-center border-bottom border-top border-dark descr ">
                            <div className="col-3">
                                {" "}
                                <strong>TOTAL GENERAL</strong>
                            </div>

                            <div className="col-2">
                                <strong>
                                    $ {calcularTotalGeneral(cobrador, oficina, tarjeta, banco, policia, prestamos, 'total')}
                                </strong>
                            </div>
                            <div className="col-1">
                                <strong>
                                    {calcularTotalGeneral(cobrador, oficina, tarjeta, banco, policia, prestamos, 'fichas')}
                                </strong>
                            </div>
                            <div className="col-2">
                                <strong>
                                    $ {calcularTotalGeneral(cobrador, oficina, tarjeta, banco, policia, prestamos, 'cobrado')}
                                </strong>
                            </div>
                            <div className="col-1">
                                <strong>
                                    {calcularTotalGeneral(cobrador, oficina, tarjeta, banco, policia, prestamos, 'fichascob')}
                                </strong>
                            </div>
                            <div className="col-2">
                                <strong>$ {calcularTotalGeneral(cobrador, oficina, tarjeta, banco, policia, prestamos, 'adelantado')}</strong>
                            </div>
                            <div className="col-1">
                                <strong >
                                    {calcularEfectividadTotal(cobrador, oficina, tarjeta, banco, policia, prestamos)}%
                        </strong>
                            </div>
                        </div>

                    ) : null}
                </>
            ) : mutual == true ? (
                <>

                    {cobrador && oficina && tarjeta ? (
                        <div className="m-4 d-flex justify-content-between text-center border-bottom border-top border-dark descr ">
                            <div className="col-3">
                                {" "}
                                <strong>TOTAL GENERAL</strong>
                            </div>

                            <div className="col-2">
                                <strong>
                                    $ {calcularTotalGeneralM(cobrador, oficina, tarjeta, 'total')}
                                </strong>
                            </div>
                            <div className="col-1">
                                <strong>
                                    {calcularTotalGeneralM(cobrador, oficina, tarjeta, 'fichas')}
                                </strong>
                            </div>
                            <div className="col-2">
                                <strong>
                                    $ {calcularTotalGeneralM(cobrador, oficina, tarjeta, 'cobrado')}
                                </strong>
                            </div>
                            <div className="col-1">
                                <strong>
                                    {calcularTotalGeneralM(cobrador, oficina, tarjeta, 'fichascob')}
                                </strong>
                            </div>
                            <div className="col-2">
                                <strong>$ {calcularTotalGeneralM(cobrador, oficina, tarjeta, 'adelantado')}</strong>
                            </div>
                            <div className="col-1">
                                <strong >
                                    {calcularEfectividadTotalM(cobrador, oficina, tarjeta)}%
                        </strong>
                            </div>
                        </div>

                    ) : null}
                </>
            ) : null}





        </div>

    )
}

export default Online
