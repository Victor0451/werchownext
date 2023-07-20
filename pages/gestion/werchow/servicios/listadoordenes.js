import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import ListadoOrdenesEmitidas from '../../../../components/gestion/werchow/servicios/ListadoOrdenesEmitidas';
import { confirmAlert } from 'react-confirm-alert';


const listadoordenes = () => {

  const [user, guardarUsuario] = useState(null);
  const [perfil, guardarPerfil] = useState(null);
  const [listado, guardarListado] = useState(null);



  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
        guardarPerfil(userData.perfil)
        traerOrdenesEmitidas(userData.perfil, userData.usuario)

      }


    }
  }, []);

  const traerOrdenesEmitidas = async (perfil, usu) => {

    if (perfil === 1 || perfil === 3) {

      await axios.get(`${ip}api/sgi/servicios/traerordenesemitidas`)
        .then(res => {
          guardarListado(res.data)
          //toastr.success("Se trajeron las ordenes con exito", "ATENCION")
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer las ordenes", "ATENCION")
        })

    } else {

      await axios.get(`${ip}api/sgi/servicios/traerordenesemitidasusuario/${usu}`)
        .then(res => {
          guardarListado(res.data)
          //toastr.success("Se trajeron las ordenes con exito", "ATENCION")
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer las ordenes", "ATENCION")
        })

    }



  }

  const push = (url, p1, p2, p3, flag) => {

    if (p3) {

      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2,
          orden: p3,
          flag: flag
        },
      });

    } else {

      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2
        },

      });
    }



  };

  const generarImpresion = (iduso, doc, orden) => {
    push('/gestion/werchow/servicios/orden', iduso, doc, orden)
  }

  const anularOrdenes = (orden, servicio) => {
    confirmAlert({
      title: 'ANULACION DE ORDEN',
      message: '¿Estas seguro de anular esta orden?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {
            putAnuUso(orden, servicio)

            if (servicio !== 'ORDE') {
              putAnuPract(orden, servicio)
            }

          }
        },
        {
          label: 'No',
          onClick: () => {
            toastr.info("La orden emitida, no fue anulada", "ATENCION")
          }
        }
      ]
    });

  }

  const putAnuUso = async (orden, servicio) => {
    await axios.put(`${ip}api/sgi/servicios/anularorden/${orden}`)
      .then(res => {

        if (res.status === 200) {
          toastr.success("Se anulo la orden con exito", "ATENCION")
          traerOrdenesEmitidas()
        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al anular la orden", "ATENCION")
      })

  }

  const putAnuPract = async (orden, servicio) => {

    if (servicio === 'FARM') {

      await axios.put(`${ip}api/sgi/servicios/anularordenfarm/${orden}`)
        .then(res => {

          if (res.status === 200) {
            toastr.success("Se anulo los items de la orden con exito", "ATENCION")
          }
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al anular la orden", "ATENCION")
        })

      traerOrdenesEmitidas()


    } else if (servicio === 'ENFE') {

      await axios.put(`${ip}api/sgi/servicios/anularordenenfe/${orden}`)
        .then(res => {

          if (res.status === 200) {
            toastr.success("Se anulo los items de la orden con exito", "ATENCION")
          }
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al anular la orden", "ATENCION")
        })

      traerOrdenesEmitidas()



    } else {

      await axios.put(`${ip}api/sgi/servicios/anularordenpract/${orden}`)
        .then(res => {

          if (res.status === 200) {
            toastr.success("Se anulo los items de la orden con exito", "ATENCION")
          }
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al anular la orden", "ATENCION")
        })

      traerOrdenesEmitidas()


    }




  }

  return (
    <Layout>

      <ListadoOrdenesEmitidas
        listado={listado}
        generarImpresion={generarImpresion}
        anularOrdenes={anularOrdenes}
        user={user}
        perfil={perfil}
      />

    </Layout>
  )
}

export default listadoordenes

