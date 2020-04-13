import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import GestionCaso from '../../components/campañas/GestionCaso'
import Layout from '../../components/layout/Layout'
import axios from 'axios'

const campana = (porps) => {

    const [campanaOp, guardarCampana] = useState({})
    const [campanaOpTrab, guardarCampanaTrab] = useState({})

    const router = useRouter()
    const { query: { empresa, operador, camp } } = router

    const nuevosCasos = async () => {

        await axios
            .get(`http://190.231.32.232:5002/api/sgi/campanas/campanaoperador`,
                {
                    params: {
                        empresa: empresa,
                        operador: operador,
                        campana: camp
                    }
                }
            )
            .then(res => {
                const campanaOp = res.data[0]
                guardarCampana(campanaOp)


            })
    }

    const casosTrabajados = async () => {

        await axios
            .get(`http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrab`,
                {
                    params: {
                        empresa: empresa,
                        operador: operador,
                        campana: camp
                    }
                }
            )
            .then(res => {
                const campanaOpTrab = res.data[0]
                guardarCampanaTrab(campanaOpTrab)


            })
    }

    useEffect(() => {
        if (camp) {

            nuevosCasos()
            casosTrabajados()

        } else {
            console.log("error");
        }
    }, [camp])


    return (
        <Layout>
            <GestionCaso campanaOp={campanaOp} campanaOpTrab={campanaOpTrab} operador={operador} />
        </Layout>
    );
};

export default campana;