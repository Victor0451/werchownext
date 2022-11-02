import React from 'react'
import { ip } from '../../../../config/config'


const ModalLegajoOrden = ({
    guardarArchi,
    archivos,
    eliminarArchivos
}) => {

    if (!archivos) return null

    return (
        <div className="modal fade" id="ModalLegajoOrden" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Legajo Virtual</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">



                        <div className='border border-dark p-4' >

                            <div className='row '>

                                <div className=" col-md-12  mb-4 border border-dark p-4">



                                    {archivos.length > 0 ? (
                                        <>
                                            <h2 className="mt-4 mb-4 col-8">
                                                <strong>
                                                    <u>Archivos:</u>
                                                </strong>
                                            </h2>

                                            <div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4">
                                                Pasa el mouse sobre la imagen para aumentar su tamaño
                                            </div>

                                            <div className=" row  row d-flex justify-content-center text-center  text-dark   p-4">
                                                {archivos.map((archivo, index) => (
                                                    <div key={index} className=" mt-4">
                                                        <strong>
                                                            <u>{archivo.archivo}</u>
                                                        </strong>
                                                        <div className="col-md-12 border border-dark p-4 mr-1">


                                                            <img
                                                                src={`${ip}api/archivos/legajovirtualordenes/archivo/${archivo.archivo}`}
                                                                className="archivos p-4 "
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                onClick={() => guardarArchi(archivo.archivo)}
                                                            />

                                                            <br />
                                                            <div className="">
                                                                <a
                                                                    className="btn btn-primary mr-1 "
                                                                    href={`${ip}api/archivos/legajovirtualordenes/descargararchivo/${archivo.archivo}`}
                                                                >
                                                                    <i className="fa fa-download" aria-hidden="true"></i>
                                                                </a>
                                                                <button
                                                                    className="btn btn-danger mr-1"
                                                                    onClick={() => eliminarArchivos(archivo.archivo, index)}
                                                                >
                                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))}
                                            </div>
                                        </>
                                    ) :
                                        (
                                            <div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4">
                                                No hay imagenes en este legajo
                                            </div>
                                        )}

                                </div>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLegajoOrden