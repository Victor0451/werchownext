import React, { useState, useEffect } from "react";
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";
import jsCookies from "js-cookie";
import axios from "axios";
import { ip } from '../../config/config'
import toastr from "toastr";

const Navbar = () => {
  const [userData, guardarUsuario] = useState({});
  const [msj, guardarMensajes] = useState(0);
  const [events, guardarEvents] = useState(0)


  useEffect(() => {
    let usuario = jsCookies.get("usuario");

    if (usuario) {
      let userData = JSON.parse(usuario);
      guardarUsuario(userData);

      traerMensajes(userData.usuario)
      traerTareasSuc()

    }
  }, []);

  const traerMensajes = async (id) => {

    await axios.get(`${ip}api/sgi/mails/listmsjsinleer/${id}`)
      .then(res => {

        if (res.status === 200) {

          guardarMensajes(res.data.length)

        }

      })
      .catch(error => {

        console.log(error)
        toastr.error("Ocurrio un error al traer los mensajes", "ATENCION")

      })

  }

  const traerTareasSuc = async (id) => {

    await axios
      .get(`${ip}api/sgi/tareas/traertareasopnl`)
      .then((res) => {

        if (res.status === 200) {
          guardarEvents(res.data.length);
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }


  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/home/home">Werchow S.G.I</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

        {userData.id ? <AuthLinks userData={userData} msj={msj} events={events} /> : <GuestLinks />}

      </div>
    </nav>
  );
};

export default Navbar;
