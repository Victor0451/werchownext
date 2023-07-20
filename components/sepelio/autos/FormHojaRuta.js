import React from 'react'
import Spinner from '../../layout/Spinner'

const FormHojaRuta = ({
    patenteRef,
    conductorRef,
    servicioRef,
    fechaSalRef,
    kmSalRef,
    fechaLlegRef,
    kmLlegRef,
    autos,
    operadorsep,
    servicios,
    regHojaRuta
}) => {


    return (
        <div className="container mt-4 border border-dark list p-4">
            <h2>
                <strong>
                    <u>
                        Hoja de Ruta
                    </u>
                </strong>
            </h2>

            <div className="border border-dark mt-4 p-4">
                <div className="row">

                    <div className="col-md-4">

                        <label>
                            <u>
                                Auto
                            </u>
                        </label>

                        {autos ? (
                            <div className="input-group mb-3">

                                <select className="custom-select" ref={patenteRef}>
                                    <option value="no" >Selecciona el auto...</option>

                                    {autos.map((a, index) => (
                                        <>
                                            <option key={index} value={`${a.patente} - ${a.auto}`}>{a.patente} - {a.auto}</option>

                                        </>
                                    ))}



                                </select>
                            </div>
                        ) : (<div className="alert alert-info mt-4 border border-dark text-center text-uppercase">No hay autos registrados o activos</div>)}
                    </div>

                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Conductor: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={conductorRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            {operadorsep
                                ? operadorsep.map((operador, index) => (
                                    <option key={index} value={operador.value}>
                                        {operador.label}
                                    </option>
                                ))
                                : null}
                        </select>
                    </div>

                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Servicios: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={servicioRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            {servicios
                                ? servicios.map((s, index) => (
                                    <option key={index} value={s.value}>
                                        {s.label}
                                    </option>
                                ))
                                : null}
                        </select>
                    </div>

                </div>

                <div className="row">



                    <div className="border border-dark mt-4 col-md-6 p-4">
                        <h4>
                            <u>
                                Salida
                            </u>
                        </h4>

                        <div className="row mt-4">

                            <div className="col-md-8">
                                <label>
                                    <u>
                                        Fecha
                                    </u>
                                </label>
                                <input type="datetime-local" className="form-control" placeholder="Salida" ref={fechaSalRef} />
                            </div>

                            <div className="col-md-4">
                                <label>
                                    <u>
                                        KM
                                    </u>
                                </label>
                                <input type="number" className="form-control" placeholder="Kilometros" ref={kmSalRef} />
                            </div>
                        </div>
                    </div>

                    <div className="border border-dark mt-4 col-md-6  p-4">
                        <h4>
                            <u>
                                Llegada
                            </u>
                        </h4>
                        <div className="row mt-4">

                            <div className="col-md-8">
                                <label>
                                    <u>
                                        Fecha
                                    </u>
                                </label>
                                <input type="datetime-local" className="form-control" placeholder="Salida" ref={fechaLlegRef} />
                            </div>

                            <div className="col-md-4">
                                <label>
                                    <u>
                                        KM
                                    </u>
                                </label>
                                <input type="number" className="form-control" placeholder="Salida" ref={kmLlegRef} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 row border border-dark p-4">
                    <div className=" col-md-6">
                        <button className="btn btn-primary btn-block" onClick={regHojaRuta}>
                            Registrar
                        </button>

                    </div>

                    <div className="  col-md-6">
                        <a className="btn btn-danger btn-block" href="/sepelio/autos/listado">
                            Cancelar
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormHojaRuta
