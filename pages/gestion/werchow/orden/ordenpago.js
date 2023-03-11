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
import { confirmAlert } from 'react-confirm-alert'

const OrdenPago = () => {

  let medicoRef = React.createRef()
  let cuitRef = React.createRef()
  let observacionRef = React.createRef()
  let fechaPagRef = React.createRef()
  let medicoPracRef = React.createRef()
  let cuitPracRef = React.createRef()
  let fechaPagPracRef = React.createRef()
  let tipoFacturaContRef = React.createRef()
  let fechaPagoContRef = React.createRef()
  let cuitContRef = React.createRef()
  let provContRef = React.createRef()
  let nfacturaContRef = React.createRef()
  let observacionContRef = React.createRef()
  let totalContRef = React.createRef()
  let ordOteroRef = React.createRef()
  let ordFabianRef = React.createRef()
  let impLiqRef = React.createRef()



  const [user, guardarUsuario] = useState(null)
  const [norden, guardarNOrden] = useState(null)
  const [medicos, guardarMedicos] = useState(null);
  const [errores, guardarErrores] = useState(null)
  const [listado, guardarListado] = useState(null)
  const [listadoCheck, guardarListadoCheck] = useState([])
  const [nomPres, guardarNomPrest] = useState(null)
  const [codPres, guardarCodPres] = useState(null)
  const [priUso, guardarPriUso] = useState(0);
  const [tipoFac, guardarTipoFac] = useState(null)
  const [flag, guardarFlag] = useState("")
  const [orden, guardarOrden] = useState([])


  const traerTipoFac = async () => {

    await axios.get(`${ip}api/sgi/ordenpago/tipofacturas`)
      .then(res => {

        guardarTipoFac(res.data)

      }).catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer los tipos de facturas", "ATENCION")
      })

  }

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

    const orPag = {

      fecha: moment().format('YYYY-MM-DD'),
      proveedor: codPres,
      nombre: nomPres,
      cuit_cuil: "",
      total: totales(listadoCheck, "li"),
      operador_carga: user,
      norden: norden,
      observacion: "",
      autorizado: 0,
      tipo_orden: "",
      nfactura: "0",
      tipo_factura: "0",
      fecha_pago: "",
      pagado: 0,
      estado: 1

    }


    if (f !== "contable") {

      if (f === "medica") {

        orPag.cuit_cuil = cuitRef.current.value

        orPag.observacion = observacionRef.current.value

        orPag.tipo_orden = 'Ordenes Medica'

        orPag.fecha_pago = fechaPagRef.current.value


        if (orPag.fecha_pago === "") {

          guardarErrores("Debes ingresar una fecha de pago")

        } else {

          postOrdenMedicas(orPag)

          //  mandarMail(orPag)

        }

      } else if (f === "practica") {


        orPag.cuit_cuil = cuitPracRef.current.value

        orPag.observacion = observacionRef.current.value

        orPag.tipo_orden = 'Practicas Medica'

        orPag.fecha_pago = fechaPagPracRef.current.value


        if (orPag.fecha_pago === "") {

          guardarErrores("Debes ingresar una fecha de pago")

        } else {

          postOrdenMedicas(orPag)

          // mandarMail(orPag)

        }

      }


    } else if (f === "contable") {

      orPag.proveedor = "CONT"
      orPag.nombre = provContRef.current.value
      orPag.cuit_cuil = cuitContRef.current.value
      orPag.total = totalContRef.current.value
      orPag.observacion = observacionContRef.current.value
      orPag.tipo_orden = 'Contable'
      orPag.nfactura = nfacturaContRef.current.value
      orPag.tipo_factura = tipoFacturaContRef.current.value
      orPag.fecha_pago = fechaPagoContRef.current.value

      if (orPag.nombre === "") {

        guardarErrores("Debes ingresar el proveedor")

      } else if (orPag.nfactura === "") {

        guardarErrores("Debes ingresar el numero de factura")

      } else if (orPag.tipo_factura === "no") {

        guardarErrores("Debes ingresar el tipo de factura")

      } else if (orPag.total === "") {

        guardarErrores("Debes ingresar el monto de la factura")

      } else if (orPag.fecha_pago === "") {

        guardarErrores("Debes ingresar la fecha de pago")

      } else {

        postOrdenContable(orPag)

        // mandarMail(orPag)

      }

    }



  }

  const postOrdenMedicas = async (orPag) => {

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
              importe: listadoCheck[i].LIQUIDAR,
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


  }

  const postOrdenContable = async (orPag) => {
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

  const totales = (arr, f) => {

    let total = 0

    if (f === "imp") {

      for (let i = 0; i < arr.length; i++) {

        total += parseFloat(arr[i].WERCHOW)

      }

      return total.toFixed(2)

    } else if (f === "co") {

      for (let i = 0; i < arr.length; i++) {

        total += parseFloat(arr[i].IMPORTE)

      }

      return total.toFixed(2)

    } else if (f === "li") {

      for (let i = 0; i < arr.length; i++) {

        total += parseFloat(arr[i].LIQUIDAR)

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

  const buscarOrden = async (f) => {

    guardarOrden([])

    if (f === 'O') {

      let ord = ordOteroRef.current.value

      if (ord === "") {

        toastr.warning("Debes ingresar el numero de orden", "ATENCION")

      } else {

        await axios.get(`${ip}api/sgi/servicios/buscarordenotero/${ord}`)
          .then(res => {

            if (res.data.length > 0) {

              guardarOrden(res.data)

            } else if (res.data.length === 0) {

              toastr.info("La orden que estas buscando no se encuentra registrada", "ATENCION")

            }

          })
          .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al buscar la orden", "ATENCION")
          })

      }


    } else if (f === 'F') {

      let ord = ordFabianRef.current.value

      if (ord === "") {

        toastr.warning("Debes ingresar el numero de orden", "ATENCION")

      } else {

        await axios.get(`${ip}api/sgi/servicios/buscarordenfabian/${ord}`)
          .then(res => {

            if (res.data.length > 0) {

              guardarOrden(res.data)

            } else if (res.data.length === 0) {

              toastr.info("La orden que estas buscando no se encuentra registrada", "ATENCION")

            }

          })
          .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al buscar la orden", "ATENCION")
          })

      }

    }


  }

  const levantarOrden = async (f, orden) => {


    await confirmAlert({
      title: 'ATENCION',
      message: '¿Seguro quieres levantar orden medica?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {

            if (f === 'O') {

               axios.put(`${ip}api/sgi/servicios/aprobarordenotero/${orden}`)
                .then(res => {
                  if (res.status === 200) {
                    toastr.success("Orden levantada", "ATENCION")
      
                    let accion = `Modificacion en el estado de la orden N° ${orden}: ANULADO ---> ACTIVO.`
      
                    registrarHistoria(accion, user)
      
                  }
                })
                .catch(error => {
                  console.log(error)
                  toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                })
      
            } else if (f !== 'O') {
      
               axios.put(`${ip}api/sgi/servicios/aprobarordenfabian/${orden}`)
                .then(res => {
                  if (res.status === 200) {
                    toastr.success("Orden levantada", "ATENCION")
      
                    let accion = `Modificacion en el estado de la orden N° ${orden}: ANULADO ---> ACTIVO.`
      
                    registrarHistoria(accion, user)
      
                  }
                })
                .catch(error => {
                  console.log(error)
                  toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                })
            }
      
 
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }

      ],

      overlayClassName: "overlay-custom-class-name"
    });

    

  }

  const modifImporte = async (f, orden) => {

    await confirmAlert({
      title: 'ATENCION',
      message: '¿Seguro quieres modificar el importe de la orden medica?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {

            let datos = {
              imp: impLiqRef.current.value,
              orden: orden
            }
      
            if (f === 'O') {
      
               axios.put(`${ip}api/sgi/servicios/cambiarimporteordenotero`, datos)
                .then(res => {
                  if (res.status === 200) {
                    toastr.success("Importe actualizado", "ATENCION")
      
                    let accion = `Modificacion en el importe  de la orden N° ${orden}: Nuevo valor $${datos.imp}.`
      
                    registrarHistoria(accion, user)
                  }
                })
                .catch(error => {
                  console.log(error)
                  toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                })
      
            } else if (f !== 'O') {
      
               axios.put(`${ip}api/sgi/servicios/cambiarimporteordenfabian`, datos)
                .then(res => {
                  console.log(res.data)
      
                  if (res.status === 200) {
                    toastr.success("Importe actualizado", "ATENCION")
      
                    let accion = `Modificacion en el importe  de la orden N° ${orden}: Nuevo valor $${datos.imp}.`
      
                    registrarHistoria(accion, user)
                  }
                })
                .catch(error => {
                  console.log(error)
                  toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                })
            }
      
 
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }

      ],

      overlayClassName: "overlay-custom-class-name"
    });

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

      setInterval(() => {

        nOrden()

      }, 1000);

      traerMedicos()
      traerTipoFac()
    }
  }, []);



  return (
    <Layout>

      <FormOrdenPago
        medicos={medicos}
        medicoRef={medicoRef}
        cuitRef={cuitRef}
        fechaPagRef={fechaPagRef}
        medicoPracRef={medicoPracRef}
        cuitPracRef={cuitPracRef}
        cuitContRef={cuitContRef}
        provContRef={provContRef}
        fechaPagPracRef={fechaPagPracRef}
        nfacturaContRef={nfacturaContRef}
        tipoFacturaContRef={tipoFacturaContRef}
        fechaPagoContRef={fechaPagoContRef}
        totalContRef={totalContRef}
        observacionContRef={observacionContRef}
        norden={norden}
        buscarOrdenes={buscarOrdenes}
        generarOrdenPago={generarOrdenPago}
        errores={errores}
        tipoFac={tipoFac}
        guardarFlag={guardarFlag}
        orden={orden}
        buscarOrden={buscarOrden}
        ordFabianRef={ordFabianRef}
        ordOteroRef={ordOteroRef}
        levantarOrden={levantarOrden}
        impLiqRef={impLiqRef}
        modifImporte={modifImporte}
      />


      <GeneracionOrden
        listado={listado}
        checkOrden={checkOrden}
        totales={totales}
        listadoCheck={listadoCheck}
        deleteCheckOrden={deleteCheckOrden}
        observacionRef={observacionRef}
        generarOrdenPago={generarOrdenPago}
        errores={errores}
        flag={flag}
      />


    </Layout>
  )
}

export default OrdenPago