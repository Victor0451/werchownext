import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import { registrarHistoria } from "../../../../utils/funciones";
import FormOrdenPago from "../../../../components/gestion/werchow/orden/FormOrdenPago";
import GeneracionOrden from "../../../../components/gestion/werchow/orden/GeneracionOrden";

const OrdenPago = () => {

  let medicoRef = React.createRef()
  let cuitRef = React.createRef()
  let observacionRef = React.createRef()
  let medicoPracRef = React.createRef()
  let cuitPracRef = React.createRef()
  let observacionPracRef = React.createRef()
  let cuitContRef = React.createRef()
  let provContRef = React.createRef()
  let nfacturaContRef = React.createRef()
  let observacionContRef = React.createRef()
  let totalContRef = React.createRef()


  const [user, guardarUsuario] = useState(null)
  const [norden, guardarNOrden] = useState(null)
  const [medicos, guardarMedicos] = useState(null);
  const [errores, guardarErrores] = useState(null)
  const [listado, guardarListado] = useState(null)
  const [listadoCheck, guardarListadoCheck] = useState([])
  const [nomPres, guardarNomPrest] = useState(null)
  const [codPres, guardarCodPres] = useState(null)
  const [priUso, guardarPriUso] = useState(0);




  const traerMedicos = async (f) => {

    await axios.get(`${ip}api/sgi/servicios/traermedicostodos`)
      .then(res => {
        guardarMedicos(res.data)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
      })

  }

  const nOrden = async () => {

    await axios.get(`${ip}api/sgi/ordenpago/norden`)
      .then(res => {

        if (!res.data.idorden) {

          guardarNOrden(`${1}/${moment().format('YYYY')}`)

        } else if (res.data.idorden) {

          guardarNOrden(`${res.data.idorden + 1}/${moment().format('YYYY')}`)

        }



      })

      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el n° de orden", "ATENCION")
      })


  }

  const buscarOrdenes = async (f) => {

    if (f === 'orden') {

      if (medicoRef.current.value === "no") {

        guardarErrores("Debes selecionar a un medico para generar la orden")

      } else {


        let ref = medicoRef.current.value;
        let codigo = ref.substr(0, 5);
        let prestado = ref.substr(6, 20);

        guardarNomPrest(prestado)
        guardarCodPres(codigo)

        await axios.get(`${ip}api/sgi/ordenpago/ordenesprestador/${codigo}`)
          .then(res => {

            toastr.success("Listado de ordenes generadas", "ATENCION")

            let otero = res.data

            axios.get(`${ip}api/sgi/ordenpago/ordenesprestadorfa/${codigo}`)
              .then(res1 => {

                let resto = res1.data

                let todo = otero.concat(resto)

                guardarListado(todo)

              })
              .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar las ordenes", "ATENCION")
              })


          })
          .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al generar las ordenes", "ATENCION")
          })


      }
    } else if (f === 'practica') {

      if (medicoPracRef.current.value === "no") {

        guardarErrores("Debes selecionar a un medico para generar la orden")

      } else {


        let ref = medicoPracRef.current.value;
        let codigo = ref.substr(0, 5);
        let prestado = ref.substr(6, 20);

        guardarNomPrest(prestado)
        guardarCodPres(codigo)

        await axios.get(`${ip}api/sgi/ordenpago/practicasprestador/${codigo}`)
          .then(res => {

            toastr.success("Listado de ordenes generadas", "ATENCION")

            let otero = res.data

            axios.get(`${ip}api/sgi/ordenpago/practicasprestadorfa/${codigo}`)
              .then(res1 => {

                let resto = res1.data

                let todo = otero.concat(resto)

                guardarListado(todo)

              })
              .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar las ordenes", "ATENCION")
              })


          })
          .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al generar las ordenes", "ATENCION")
          })


      }

    }



  }

  const checkOrden = (orden) => {

    verificarUso(orden.CONTRATO)

    let encontrado = false

    if (listadoCheck.length === 0) {

      toastr.success("Orden checkeda", "ATENCION");
      guardarListadoCheck([...listadoCheck, orden])

    } else {

      for (let i = 0; i < listadoCheck.length; i++) {
        if (listadoCheck[i].ORDEN === orden.ORDEN) {
          encontrado = true;
        }
      }
      if (encontrado === true) {

        toastr.warning("Esta orden ya fue checkeada", "ATENCION");

      } else if (encontrado === false) {

        toastr.success("Orden checkeda", "ATENCION");
        guardarListadoCheck([...listadoCheck, orden])



      }
    }
  }

  const deleteCheckOrden = (index) => {

    listadoCheck.splice(index, 1);

    guardarListadoCheck([...listadoCheck])

    toastr.success("Orden eliminada del checkeo", "ATENCION");



  }

  const generarOrdenPago = async (f) => {


    if (f === "medica") {

      const orPag = {

        fecha: moment().format('YYYY-MM-DD'),
        proveedor: codPres,
        nombre: nomPres,
        cuit_cuil: cuitRef.current.value,
        total: totales(listadoCheck, "imp"),
        operador_carga: user,
        norden: norden,
        observacion: observacionRef.current.value,
        autorizado: 0,
        tipo_orden: 'Medica',
        nfactura: "0"

      }


      await axios.post(`${ip}api/sgi/ordenpago/nuevaorden`, orPag)
        .then(res => {
          if (res.status === 200) {

            toastr.info("La orden de pago se genero correctamente. Cargando los detalles", "ATENCION")



            for (let i = 0; i < listadoCheck.length; i++) {


              const detOrdenPag = {

                norden: norden,
                nconsulta: listadoCheck[i].ORDEN,
                sucursal: listadoCheck[i].SUC,
                prestador: listadoCheck[i].COD_PRES,
                importe: listadoCheck[i].WERCHOW,
                operador_carga: user,
                fecha: moment().format('YYYY-MM-DD')

              }

              axios.post(`${ip}api/sgi/ordenpago/nuevodetalle`, detOrdenPag)

              updateCheckUsos(detOrdenPag.nconsulta, detOrdenPag.norden, detOrdenPag.fecha,)

            }


            setTimeout(() => {
              toastr.success("La orden fue generada, lista para ser revisada y autorizada", "ATENCION")

              let accion = `Se registro una orden de Pago ID: ${orPag.norden}, por un monto de: ${orPag.total} al proveedor: ${orPag.proveedor}-${orPag.nombre} por el operador: ${orPag.operador_carga}.`

              registrarHistoria(accion, user)

              setTimeout(() => {

                Router.reload()

              }, 500);

            }, 1000);

          }
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al generar la orden de pago", "ATENCION")
        })

    } else if (f === "contable") {


      const orPag = {

        fecha: moment().format('YYYY-MM-DD'),
        proveedor: "CONT",
        nombre: provContRef.current.value,
        cuit_cuil: cuitContRef.current.value,
        total: totalContRef.current.value,
        operador_carga: user,
        norden: norden,
        observacion: observacionContRef.current.value,
        autorizado: 0,
        tipo_orden: 'Contable',
        nfactura: nfacturaContRef.current.value

      }

      if (orPag.nombre === "") {

        guardarErrores("Debes ingresar el proveedor")

      } else if (orPag.nfactura === "") {

        guardarErrores("Debes ingresar el numero de factura")

      } else if (orPag.total === "") {

        guardarErrores("Debes ingresar el monto de la factura")

      } else {

        await axios.post(`${ip}api/sgi/ordenpago/nuevaorden`, orPag)
          .then(res => {

            if (res.status === 200) {

              toastr.info("La orden de pago se genero correctamente. Cargando los detalles", "ATENCION")

              setTimeout(() => {
                toastr.success("La orden fue generada, lista para ser revisada y autorizada", "ATENCION")

                let accion = `Se registro una orden de Pago ID: ${orPag.norden}, por un monto de: ${orPag.total} al proveedor: ${orPag.proveedor}-${orPag.nombre} por el operador: ${orPag.operador_carga}.`

                registrarHistoria(accion, user)

                setTimeout(() => {

                  Router.reload()

                }, 500);

              }, 1000);

            }
          })
          .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al generar la orden de pago", "ATENCION")
          })



      }


    }

  }


  const totales = (arr, f) => {

    let total = 0

    if (f === "imp") {

      for (let i = 0; i < arr.length; i++) {

        total += parseFloat(arr[i].WERCHOW)

      }

      return total.toFixed(2)

    } else if (f === "cant") {

      total = arr.length

      return total

    }

  }

  const updateCheckUsos = async (orden, nor, fec) => {

    const valores = {
      nor: nor,
      fec: fec
    }

    await axios.put(`${ip}api/sgi/ordenpago/updatecheckusos/${orden}`, valores)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error en el checkeo", "ATENCION")
      })

    await axios.put(`${ip}api/sgi/ordenpago/updatecheckusosfa/${orden}`, valores)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error en el checkeo", "ATENCION")
      })

  }

  const verificarUso = async (contrato) => {

    console.log(contrato)
    await axios.get(`${ip}api/sgi/servicios/verificarusopra/${contrato}`)
      .then(res => {

        guardarPriUso(res.data.orde)
        console.log(res.data.orde)

      })
      .catch(error => {
        console.log(error)

        toastr.error("Ocurrio un error al verificar el uso", "ATENCION")
      })



  }


  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");

    } else {

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }

      nOrden()
      traerMedicos()

    }
  }, []);



  return (
    <Layout>

      <FormOrdenPago
        medicos={medicos}
        medicoRef={medicoRef}
        cuitRef={cuitRef}
        medicoPracRef={medicoPracRef}
        cuitPracRef={cuitPracRef}
        cuitContRef={cuitContRef}
        provContRef={provContRef}
        nfacturaContRef={nfacturaContRef}
        totalContRef={totalContRef}
        norden={norden}
        buscarOrdenes={buscarOrdenes}
        generarOrdenPago={generarOrdenPago}
        errores={errores}
      />


      <GeneracionOrden
        listado={listado}
        checkOrden={checkOrden}
        totales={totales}
        listadoCheck={listadoCheck}
        deleteCheckOrden={deleteCheckOrden}
        observacionRef={observacionRef}
        generarOrdenPago={generarOrdenPago}

      />


    </Layout>
  )
}

export default OrdenPago