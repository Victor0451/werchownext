import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone'
import ListadoCampana from './ListadoCampana'

const AsignarCampana = ({ array, campana, empresa }) => {

    const [perico, guardarPerico] = useState({})
    const [palpala, guardarPalpala] = useState({})
    const [sanPedro, guardarSanPedro] = useState({})
    const [CasaCentralMG, guardarCCMG] = useState({})
    const [CasaCentralGG, guardarCCGG] = useState({})

    // useEffect(() => {
    //     if (array) {
    //         console.log("si hay");
    //         // array.map(array => {
    //         //     let perico = array.filter(at => {
    //         //         return at.SUCURSAL === "R";
    //         //     });

    //         //     let palpala = array.filter(at => {
    //         //         return at.SUCURSAL === "L";
    //         //     });

    //         //     let sanPedro = array.filter(at => {
    //         //         return at.SUCURSAL === "P";
    //         //     });

    //         //     let CasaCentral = array.filter(at => {
    //         //         return at.SUCURSAL === "W";
    //         //     });

    //         //     let CCmitad = Math.floor(CasaCentral.length / 2);

    //         //     let CasaCentralGG = CasaCentral.slice(0, AtCCmitad);

    //         //     let CasaCentralMG = CasaCentral.slice(
    //         //         CCmitad,
    //         //         CasaCentral.length
    //         //     );

    //         //     guardarPerico(perico);
    //         //     guardarPalpala(palpala)
    //         //     guardarSanPedro(sanPedro)
    //         //     guardarCCMG(CasaCentralMG)
    //         //     guardarCCGG(CasaCentralGG)
    //         // })

    //     } else {
    //         console.log("no hay");
    //     }


    // }, [])

    console.log(array);
    return (
        <div className="container">
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <h3>
                        {campana} Casa Central Magia Galian{" "}
                        <span className="badge badge-pill badge-dark text-white">

                        </span>
                    </h3>

                    <button
                        className="btn btn-primary"
                    // onClick={() => crearCampana(AtCasaCentralMG, 11)}
                    >
                        Crear Campaña Werchow
                </button>

                </div>
                <ListadoCampana />
            </div>
        </div>
    );
};

export default AsignarCampana;