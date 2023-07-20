import React from 'react'

const ModalSubirArchivo = ({
    orde,
    handlerArchivos,
    uploadArchivos,
    error
}) => {



    return (
        <div class="modal fade" id="ModalSubirArchivo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">



                        <div className='border border-dark p-4 ' >

                            <div className='row '>

                                <form className="  col-md-12 border border-dark p-4">
                                    <div className=" mb-4">
                                        <h4>
                                            <strong>
                                                <u>Subir Archivos</u>
                                            </strong>
                                        </h4>

                                    </div>
                                    <div className=" border border-dark ">
                                        <div className="mt-4 form-group col-md-12">
                                            <label>
                                                <strong>
                                                    {" "}
                                                    <u> Subir Archivo: </u>
                                                </strong>
                                            </label>
                                            <input
                                                type="file"
                                                id="fil"
                                                accept=".png, .jpg, .jpeg"
                                                className="form-control"
                                                name="file"
                                                onChange={handlerArchivos}
                                            />

                                            {error && (
                                                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                                                    {error}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-4 form-group col-md-4">
                                            <button
                                                type="submit"
                                                className="mt-4 btn btn-primary btn-block"
                                                onClick={uploadArchivos}
                                            >
                                                Subir Archivos
                                            </button>
                                        </div>
                                    </div>
                                </form>

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

export default ModalSubirArchivo