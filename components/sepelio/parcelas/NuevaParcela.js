import React from 'react'
import moment from 'moment'
import Spinner from '../../layout/Spinner'

const NuevaParcela = ({
    cementerio,
    parcela,
    lote,
    mza,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
    userData

}) => {

    return (
        <div className="mt-4 container border border-dark list p-4">

            <h2>
                <strong>
                    <u>
                        Registrar Stock de Parcela
                    </u>
                </strong>
            </h2>

            <div className="mt-4 border border-dark p-4">

                <div className="row border border-dark p-4">
                    <div className="col-md-6">
                        <label><u>Cementerio</u></label>
                        <input
                            type="text"
                            className="form-control"
                            name="cementerio"
                            value={cementerio}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {errores.cementerio && (
                            <div className="mt-2 form-group  alert alert-danger">
                                {errores.cementerio}
                            </div>
                        )}
                    </div>

                    <div className="col-md-3">
                        <label><u>Parcela</u></label>
                        <input
                            type="text"
                            className="form-control"
                            name="parcela"
                            value={parcela}
                            onBlur={handleBlur}
                            onChange={handleChange} />
                        {errores.parcela && (
                            <div className="mt-2 form-group  alert alert-danger">
                                {errores.parcela}
                            </div>
                        )}
                    </div>

                    <div className="col-md-3">
                        <label><u>Manzana</u></label>
                        <input
                            type="number"
                            className="form-control"
                            name="mza"
                            value={mza}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {errores.mza && (
                            <div className="mt-2 form-group  alert alert-danger">
                                {errores.mza}
                            </div>
                        )}
                    </div>

                    <div className="col-md-3">
                        <label><u>Lote</u></label>
                        <input
                            type="number"
                            className="form-control"
                            name="lote"
                            value={lote}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {errores.lote && (
                            <div className="mt-2 form-group  alert alert-danger">
                                {errores.lote}
                            </div>
                        )}
                    </div>

                    {userData ? (
                        <div className="col-md-4">
                            <label><u>Operador</u></label>
                            <input type="text" className="form-control" readOnly defaultValue={userData.usuario} />
                        </div>
                    ) : (<Spinner/>)}



                    <div className="col-md-4">
                        <label><u>Fecha</u></label>
                        <input type="text" className="form-control" readOnly defaultValue={moment().format('DD/MM/YYYY')} />
                    </div>

                </div>

                <div className="row mt-4 border border-dark p-4 ">
                    <div className=" col-md-6">
                        <button className="btn btn-primary btn-block" onClick={handleSubmit}>Registrar</button>
                    </div>

                    <div className=" col-md-6">
                        <a href="/sepelio/parcelas/stock" className="btn btn-danger btn-block">Cancelar</a>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default NuevaParcela
