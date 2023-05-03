import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import { ip } from "../../config/config";
import { Configuration, OpenAIApi } from "openai"
import FormConsultas from "../../components/aplicaciones/FormConsultas";

const Consultas = () => {

    const [consul, guardarConsul] = useState("")
    const [key, guardarKey] = useState("")
    const [espe, guardarEspe] = useState(false)

    let consultaRef = React.createRef()

    const generarConsulta = async () => {

        await axios.get(`${ip}api/sgi/aplicaciones/consultas`
            , {
                params: {
                    consul: consul
                }
            }
        )
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const enviarConsulta = async () => {

        guardarConsul("")
        guardarEspe(true)

        const configuration = new Configuration({
            apiKey: `${key}`,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: consultaRef.current.value,
            temperature: 0.9,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        });

        if (response.data.choices[0].text) {

            guardarConsul(response.data.choices[0].text)
            guardarEspe(false)

        }



    }

    const traerKey = async () => {

        await axios.get(`${ip}api/sgi/aplicaciones/traerkey`)
            .then(res => {
                guardarKey(res.data.key)
            })
            .catch(error => {
                console.log(error)
            })

    }

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            traerKey()

        }
    }, []);

    return (


        <Layout>
            <FormConsultas
                consultaRef={consultaRef}
                generarConsulta={generarConsulta}
                enviarConsulta={enviarConsulta}
                consul={consul}
                espe={espe}
            />
        </Layout>
    )
}

export default Consultas