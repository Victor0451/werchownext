import React, { useState } from 'react';
import Layout from '../components/layout/Layout'
import EstadoCartera from '../components/campañas/EstadoCartera'
import AsignarCampana from '../components/campañas/AsignarCampana'
import axios from 'axios'

const estadosocio = () => {

    const [campana, guardarCampana] = useState({})
    const [empresa, guardarEmpresa] = useState({})
    const [array, guardarArray] = useState({})

    const [atrasados, guardarAtrasados] = useState({})
    const [atrasadosM, guardarAtrasadosM] = useState({})
    const [recuperacion, guardarRecuperacion] = useState({})
    const [reincidente, guardarReincidente] = useState({})
    const [blanqueo, guardarBlanqueo] = useState({})
    const [auxiliar, guardarAuxiliar] = useState({})

    const buscarAT = async () => {

        await axios.get(
            `http://190.231.32.232:5002/api/sgi/campanas/atW`
        ).then((res => {
            const array = res.data[0]
            guardarArray(array)

            const campana = 'Atrasados'
            guardarCampana(campana)

            const empresa = 'W'
            guardarEmpresa(empresa)

        })).catch((error => {
            console.log(error);
        }))
    }

    const buscarATM = async () => {

        await axios.get(
            `http://190.231.32.232:5002/api/sgi/campanasM/atM`
        ).then((res => {
            const array = res.data[0]
            guardarArray(array)

            const campana = 'Atrasados'
            guardarCampana(campana)

            const empresa = 'M'
            guardarEmpresa(empresa)
        })).catch((error => {
            console.log(error);
        }))
    }

    console.log(array);
    return (
        <Layout>
            <EstadoCartera buscarAT={buscarAT}
                buscarATM={buscarATM}
            />

            {Object.values(array).length === 0 ? null : (<AsignarCampana
                array={Object.values(array)}
                empresa={empresa}
                campana={campana}
            />)}


        </Layout>
    );
};

export default estadosocio;