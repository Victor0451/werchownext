import React from 'react'

const FormControlOrdenes = ({
    traerListado,
    traerListadoConsultasMedicos,
    traerUsosPorPrestador,
    desdeRef,
    hastaRef,
    errores,
    medicos,
    medicoRef,
    desdeRef2,
    hastaRef2,
    desdeRef3,
    hastaRef3,
    servicioRef,

}) => {
    return (
        <div className='container border border-dark mt-4 p-4 list'>

            <h2>
                <u>
                    Reportes de Control Servicios Medicos Otero
                </u>
            </h2>

            <div className="mt-4 accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>
                                    Control de Ordenes Por Rango de Fecha
                                </strong>
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">


                            <div className='alert alert-info border border-dark text-center text-uppercase mt-4 mb-4'>
                                Selecciona un rango de fechas para visualizar las ordenes emitidas en el mismo.
                            </div>

                            <div className='border border-dark mt-4 mb-4 p-4'>

                                <div className='row'>

                                    <div className='col-md-4'>

                                        <label>
                                            Desde
                                        </label>

                                        <input
                                            className='form-control'
                                            type='date'
                                            ref={desdeRef}
                                        />

                                    </div>

                                    <div className='col-md-4'>

                                        <label>
                                            Hasta
                                        </label>

                                        <input
                                            className='form-control'
                                            type='date'
                                            ref={hastaRef}
                                        />

                                    </div>



                                    <div className='col-md-4 mt-2'>

                                        <button
                                            className='btn btn-primary mt-4'
                                            onClick={traerListado}
                                        >
                                            Buscar
                                        </button>

                                    </div>

                                    <div className='col-md-12 mt-2'>

                                        {errores ? (
                                            <div className='border border-dark alert alert-danger text-center text-uppercase mt-4 mb-4'>
                                                {errores}
                                            </div>
                                        )
                                            : null}

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>
                                    Control de Consultas Por Medico
                                </strong>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">

                            <div className='alert alert-info border border-dark text-center text-uppercase mt-4 mb-4'>
                                Selecciona un prestador medico y un rango de fechas para visualizar las consultas y practicas emitidas en el mismo.
                            </div>

                            <div className='border border-dark mt-4 mb-4 p-4'>

                                <div className='row'>

                                    {medicos ? (
                                        <div className="col-md-4">
                                            <label>
                                                Doctor:
                                            </label>

                                            <select className="custom-select" ref={medicoRef}>
                                                <option value="no" >Selecciona una opcion</option>
                                                {medicos.map((m, index) => (
                                                    <option key={index} value={m.COD_PRES}>{m.NOMBRE}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <div className="col-md-4 alert alert-info  border border-dark text-center text-uppercase">
                                            No hay medicos registrados
                                        </div>
                                    )}

                                    <div className='col-md-4'>

                                        <label>
                                            Desde
                                        </label>

                                        <input
                                            className='form-control'
                                            type='date'
                                            ref={desdeRef2}
                                        />

                                    </div>

                                    <div className='col-md-4'>

                                        <label>
                                            Hasta
                                        </label>

                                        <input
                                            className='form-control'
                                            type='date'
                                            ref={hastaRef2}
                                        />

                                    </div>



                                    <div className='col-md-4 mt-2'>

                                        <button
                                            className='btn btn-primary mt-4'
                                            onClick={traerListadoConsultasMedicos}
                                        >
                                            Buscar
                                        </button>

                                    </div>

                                    <div className='col-md-12 mt-2'>

                                        {errores ? (
                                            <div className='border border-dark alert alert-danger text-center text-uppercase mt-4 mb-4'>
                                                {errores}
                                            </div>
                                        )
                                            : null}

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>
                                    Cantidad de Usos por Prestador y Fecha
                                </strong>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">

                            <div className='alert alert-info border border-dark text-center text-uppercase mt-4 mb-4'>
                                Selecciona un rango de fechas para visualizar las ordenes emitidas en el mismo.
                            </div>

                            <div className='border border-dark mt-4 mb-4 p-4'>

                                <div className='row'>

                                    <div className='col-md-4'>

                                        <label>
                                            Desde
                                        </label>

                                        <input
                                            className='form-control'
                                            type='date'
                                            ref={desdeRef3}
                                        />

                                    </div>

                                    <div className='col-md-4'>

                                        <label>
                                            Hasta
                                        </label>

                                        <input
                                            className='form-control'
                                            type='date'
                                            ref={hastaRef3}
                                        />

                                    </div>

                                    <div className='col-md-4'>

                                        <label>
                                            Servicio Medico
                                        </label>

                                        <select className="form-control" defaultValue={"no"} ref={servicioRef} >

                                            <option value={"no"}>Eligue una opcion...</option>
                                            <option value={'ORDE'}>Ordenes Medicas</option>
                                            <option value={'P'}>Practicas Medicas</option>

                                        </select>

                                    </div>


                                    <div className='col-md-4 mt-2'>

                                        <button
                                            className='btn btn-primary mt-4'
                                            onClick={traerUsosPorPrestador}
                                        >
                                            Buscar
                                        </button>

                                    </div>

                                    <div className='col-md-12 mt-2'>

                                        {errores ? (
                                            <div className='border border-dark alert alert-danger text-center text-uppercase mt-4 mb-4'>
                                                {errores}
                                            </div>
                                        )
                                            : null}

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FormControlOrdenes