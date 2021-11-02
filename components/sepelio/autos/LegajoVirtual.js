import React, { useState } from 'react'
import Spinner from '../../layout/Spinner';
import { ip } from '../../../config/config';
import FormSubirArchivo from './FormSubirArchivo';
import axios from 'axios';

const LegajoVirtual = ({ auto, archivos, traerAchivos }) => {
    if (!auto) {
        return <Spinner />;
    } else if (!archivos) {
        return <Spinner />;
    }

    const [archi, guardarArchi] = useState(null);

    const eliminarArchivos = async (id) => {

        await axios
            .delete(`${ip}api/archivos/legajovirtualautos/eliminararchivos/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    toastr.success("El archivo se elimino", "ATENCION");
                }
            })
            .catch((error) => {
                console.log(error);
            });


        setTimeout(() => {
            traerAchivos(auto.idpatente)

        }, 300);


    };



    return (
        <div className="container alert alert-primary border border-dark p-4 mt-4">
            <div className=" border border-dark p-4">
                <div className="row d-felx justify-content-between p-2">
                    <h3 className="  mb-4 text-center">
                        <strong>
                            <u>Legajo Virtual</u>: {auto.auto} -{" "}
                            {auto.patente}
                        </strong>
                    </h3>
                    <div>
                        <a
                            href="/sepelio/autos/listado"
                            className="btn btn-danger btn-sm text-white"
                        >
                            Volver Al Listado
                        </a>
                    </div>
                </div>

                <div className="mt-4 alert alert-primary border border-dark p-4">
                    <div className="d-flex justify-content-between">
                        <h2 className="  col-8">
                            <strong>
                                <u>Datos del Auto</u>
                            </strong>
                        </h2>

                    </div>

                    <hr className="" />

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <label>
                                <u>
                                    Patente
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Patente" defaultValue={auto.patente} readOnly />
                        </div>

                        <div className="col-md-4">
                            <label>
                                <u>
                                    Marca y Modelo
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Marca y Modelo" defaultValue={auto.auto} readOnly />
                        </div>

                        <div className="col-md-4">
                            <label>
                                <u>
                                    Kilometraje
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Kilometraje" defaultValue={auto.kilometros} readOnly />
                        </div>

                        <div className="col-md-4 mt-4">
                            <label>
                                <u>
                                    Nro Serie del Motor
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Nro Serie del Motor" defaultValue={auto.motor} readOnly />
                        </div>

                        <div className="col-md-4 mt-4">
                            <label>
                                <u>
                                    Nro Serie del Chasis
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Nro Serie del Chasis" defaultValue={auto.chasis} readOnly />
                        </div>

                        <div className="col-md-4 mt-4">
                            <label>
                                <u>
                                    Modelo (Año de fabricacion)
                                </u>
                            </label>
                            <input type="number" className="form-control" placeholder="Modelo (Año de fabricacion)" defaultValue={auto.modelo} readOnly />
                        </div>

                        <div className="col-md-4 mt-4">
                            <label>
                                <u>
                                    Responable
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Responable" defaultValue={auto.responsable} readOnly />
                        </div>
                    </div>

                </div>
            </div>

            <FormSubirArchivo auto={auto} traerAchivos={traerAchivos} />

            <div className=" col-md-12 mt-4 mb-4 border border-dark p-4">
                <h2 className="mt-4 mb-4 col-8">
                    <strong>
                        <u>Archivos:</u>
                    </strong>
                </h2>
                <div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4">
                    Haciendo click en la imagen, se vizualiza en tamaño real
                </div>

                <div className=" row  row d-flex justify-content-center text-center  text-dark   p-4">
                    {archivos.map((archivo, index) => (
                        <div key={index} className=" mt-4">
                            <div className="col-md-12 border border-dark p-4 mr-1">
                                {/* <strong>
                  <u>{archivo.archivo}</u>
                </strong> */}

                                <img
                                    src={`${ip}api/archivos/legajovirtualautos/archivo/${archivo.archivo}`}
                                    className="archivos p-4 "
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    onClick={() => guardarArchi(archivo.archivo)}
                                />

                                <br />
                                <div className="">
                                    <a
                                        className="btn btn-primary mr-1 "
                                        href={`${ip}api/archivos/legajovirtualautos/descargararchivo/${archivo.archivo}`}
                                    >
                                        <i className="fa fa-download" aria-hidden="true"></i>
                                    </a>
                                    <button
                                        className="btn btn-danger mr-1"
                                        onClick={() => eliminarArchivos(archivo.archivo)}
                                    >
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* MODAL IMAGEN AMPLIA */}

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <u>{archi}</u>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                            <img
                                src={`${ip}api/archivos/legajovirtualautos/archivo/${archi}`}
                                className="archimodal p-4  "
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegajoVirtual
