import React from 'react'
import Spinner from '../../layout/Spinner'
import FormSubirArchivo from './FormSubirArchivo'
import LegajoArchivos from './LegajoArchivos'

const ListadoAsesores = ({ asesores, traerDetalle, detalle, titulo, archivos }) => {

    if (!asesores) return <Spinner />

    return (
        <div className="mt-4 container border border-dark alert alert-primary p-4">

            <h2><strong><u>
                Asesores Activos
            </u></strong></h2>

            <table className=" mt-4 table table-sm list border border-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nick</th>
                        <th scope="col">Fecha de Ingreso</th>
                        <th scope="col">Legajo Virtual</th>
                    </tr>
                </thead>
                <tbody>
                    {asesores.map((a, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{a.usu_ide}</td>
                            <td>{a.usu_apellido}</td>
                            <td>{a.usu_nombre}</td>
                            <td>{a.usu_nick}</td>
                            <td>{a.usu_alta}</td>
                            <td><button className="btn btn-sm btn-info"
                                data-toggle="modal"
                                data-target="#staticBackdrop"
                                onClick={() => traerDetalle(a.usu_ide, a.usu_apellido, a.usu_nombre)}
                            >Ver</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* MODAL */}

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><u>Legajo Virtual</u>: {titulo} </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">


                            <div className="border border-dark p-4 alert alert-primary">
                                {!detalle ? (<Spinner />) :
                                    (
                                        detalle.map((d, index) => (
                                            <>
                                                <div className="row" key={index}>
                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Apellido</label>
                                                        <input type="text" className="form-control" defaultValue={d.usu_apellido} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Nombre</label>
                                                        <input type="text" className="form-control" defaultValue={d.usu_nombre} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">DNI</label>
                                                        <input type="text" className="form-control" defaultValue={d.usu_dni} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Nick</label>
                                                        <input type="text" className="form-control" defaultValue={d.usu_nick} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Alta</label>
                                                        <input type="text" className="form-control" defaultValue={d.usu_alta} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Grupo</label>
                                                        <input type="text" className="form-control" defaultValue={d.usu_grupo} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Ventas de Plan Novell</label>
                                                        <input type="text" className="form-control" defaultValue={d.novell} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Ventas de Policias</label>
                                                        <input type="text" className="form-control" defaultValue={d.policia} />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label for="exampleFormControlInput1">Ventas Resto de los Planes</label>
                                                        <input type="text" className="form-control" defaultValue={d.resto} />
                                                    </div>
                                                </div>

                                                <LegajoArchivos archivos={archivos} />

                                                <FormSubirArchivo id={d.usu_ide} />
                                            </>

                                        ))

                                    )
                                }



                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ListadoAsesores
