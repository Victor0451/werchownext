import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import ListadoCajaGastos from "../../../components/sepelio/caja/ListadoCajaGastos";
import NuevoCajaGasto from "../../../components/sepelio/caja/NuevoCajaGasto";
import Spinner from "../../../components/layout/Spinner";
import { ip } from '../../../config/config'
import ListadoCajaGastosCargados from "../../../components/sepelio/caja/ListadoCajaGastosCargados";
import { confirmAlert } from 'react-confirm-alert'

const gastoscaja = () => {
  let fechaRef = React.createRef();
  let nFacturaRef = React.createRef();
  let ptoVentaRef = React.createRef();
  let montoIVARef = React.createRef();
  let retIIBBRef = React.createRef();
  let retggciasRef = React.createRef();
  let percIVARef = React.createRef();
  let totalRef = React.createRef();
  let detalleRef = React.createRef();

  const [listProv, guardarListProv] = useState(null);
  const [servicios, guardarServicios] = useState(null);
  const [idservicio, guardaridservicio] = useState(null);
  const [listConcep, guardarListConcep] = useState(null);
  const [gastos, guardarGastos] = useState([]);
  const [caja, guardarCaja] = useState(null);
  const [acGast, guardarAcGast] = useState(null);
  const [totCaja, guardarTotCaja] = useState(null);
  const [user, guardarUsuario] = useState(null);
  const [empresa, guardarEmpresa] = useState(null);
  const [concepto, guardarConcepto] = useState(null);
  const [tipofactura, guardarFactura] = useState(null);
  const [mediopago, guardarMedioPago] = useState(null);
  const [porciva, guardarPorciva] = useState(null);
  const [proveedor, guardarProveedor] = useState(null);
  const [error, guardarError] = useState(null);
  const [listgastos, guardarListGastos] = useState(null);
  const [operadorsep, guardarOperadorSep] = useState(null);
  const [operadortramite, guardarOpTramite] = useState(null);

  let token = jsCookie.get("token");

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let id = router.query.id;

      infoCaja(id);
      traerOperador()
      listadoProveedores();
      listadoConceptos();
      servicioCombo();
      traerGastos(id)

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }

    }
  }, []);

  const traerOperador = async () => {
    await axios
      .get(
        `${ip}api/sepelio/serviciogastos/operadoressep`
      )
      .then((res) => {
        guardarOperadorSep(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const listadoProveedores = async () => {
    await axios
      .get(`${ip}api/sepelio/cajasepelio/listprov`)
      .then((res) => {
        guardarListProv(res.data[0]);
      }).catch(error => {
        console.log(error)
      })
  };

  const listadoConceptos = async () => {
    await axios
      .get(`${ip}api/sepelio/cajasepelio/listconcepto`)
      .then((res) => {
        guardarListConcep(res.data[0]);
      })
      .catch(error => {
        console.log(error)
      })
  };

  const infoCaja = async (id) => {
    await axios
      .get(`${ip}api/sepelio/cajasepelio/caja/${id}`)
      .then((res) => {
        guardarCaja(res.data);

        if (res.data.gastos) {
          guardarAcGast(res.data.gastos)
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (value, flag) => {
    if (flag === "empresa") {
      guardarEmpresa(value.label);
    }
    if (flag === "proveedor") {
      guardarProveedor(value.label);
    }
    if (flag === "concepto") {
      guardarConcepto(value.label);
    }
    if (flag === "tipofactura") {
      guardarFactura(value.label);
    }
    if (flag === "mediopago") {
      guardarMedioPago(value.label);
    }
    if (flag === "porciva") {
      guardarPorciva(value.label);
    }
    if (flag === "operadortramite") {
      guardarOpTramite(value.label);
    }
    if (flag === "servicio") {
      guardaridservicio(value.value);
    }
  };

  const updateTotales = async () => {
    let id = router.query.id;

    const valores = {
      gastos: acGast,
      totalcaja: totCaja,
    };

    await axios
      .put(
        `${ip}api/sepelio/cajasepelio/updatetotales/${id}`,
        valores
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cerrarCaja = async () => {
    let id = router.query.id;
    await axios
      .put(
        `${ip}api/sepelio/cajasepelio/updatecierrecaja/${id}`
      )
      .then((res) => {
        if (res.status === 200) {
          updateFechaCierre()

          toastr.success("Se cerro la caja correctamente", "Atencion")
        }

        setTimeout(() => {
          Router.push('/sepelio/caja/listado')
        }, 500);

      })
      .catch((error) => {
        toastr.error("Ocurrio un error", "ATENCION")
        console.log(error)
      });
  };

  const regGasto = async () => {
    await axios
      .post(
        `${ip}api/sepelio/cajasepelio/gastocaja`,
        gastos
      )
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Los gastos se cargaron correctamente",
            "ATENCION"
          );

          updateTotales();
          updateUltimaCarga()

          setTimeout(() => {
            confirmAlert({
              title: 'ATENCION',
              message: '¿Vas a cerrar la caja?',
              buttons: [
                {
                  label: 'Si',
                  onClick: () => { cerrarCaja() }
                },
                {
                  label: 'No',
                  onClick: () => { Router.push('/sepelio/caja/listado') }
                }
              ]
            });
          }, 500);


        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const updateFechaCierre = async () => {
    await axios
      .put(
        `${ip}api/sepelio/cajasepelio/updatefechacierre/${caja.idcaja}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUltimaCarga = async () => {
    await axios
      .put(
        `${ip}api/sepelio/cajasepelio/updateultimacarga/${caja.idcaja}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nuevoGasto = (e) => {
    e.preventDefault();

    let id = router.query.id;

    const gasto = {
      idcaja: id,
      concepto: concepto,
      mediopago: mediopago,
      tipofactura: tipofactura,
      proveedor: proveedor,
      empresa: empresa,
      porciva: porciva,
      fecha: fechaRef.current.value,
      nfactura: nFacturaRef.current.value,
      ptoventa: ptoVentaRef.current.value,
      operadorgestion: user,
      operadortramite: operadortramite,
      montoiva: montoIVARef.current.value,
      retiibb: retIIBBRef.current.value,
      retggcias: retggciasRef.current.value,
      perciva: percIVARef.current.value,
      detalle: detalleRef.current.value,
      total: totalRef.current.value,
      idservicio: idservicio,
    };

    if (gasto.nfactura === "") {
      guardarError(
        "Debes ingresar un N° de factura o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (gasto.ptoventa === "") {
      guardarError(
        "Debes ingresar un pto de venta o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (gasto.montoiva === "") {
      guardarError(
        "Debes ingresar un Monto I.V.A. o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (gasto.retiibb === "") {
      guardarError(
        "Debes ingresar un RetIIBB. o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (gasto.retggcias === "") {
      guardarError(
        "Debes ingresar un RetGGACIAS o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (gasto.perciva === "") {
      guardarError(
        "Debes ingresar un Perc I.V.A. o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (gasto.total === "") {
      guardarError(
        "Debes ingresar un Monto Total o de no tenerlo, ingresa un 0 (cero)"
      );
    } else {

      guardarGastos([...gastos, gasto]);

      let totgast = acGast + parseFloat(gasto.total);

      guardarAcGast(totgast);

      let totcaja = caja.monto - totgast;

      guardarTotCaja(totcaja);
    }
  };

  const eliminarGastos = (index) => {
    let totgast = acGast - parseFloat(gastos[index].total);

    guardarAcGast(totgast);

    let totcaja = caja.monto - totgast;

    guardarTotCaja(totcaja);

    gastos.splice(index, 1);

    guardarGastos([...gastos]);
  };

  const servicioCombo = async () => {
    await axios
      .get(`${ip}api/sepelio/servicio/serviciocombo`)
      .then((res) => {
        guardarServicios(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const traerGastos = async (id) => {
    await axios
      .get(`${ip}api/sepelio/cajasepelio/listadogastos/${id}`)
      .then((res) => {
        guardarListGastos(res.data);
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  }



  return (
    <Layout>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Registrar Gasto
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
            <div className="modal-body">
              <NuevoCajaGasto
                listProv={listProv}
                listConcep={listConcep}
                caja={caja}
                user={user}
                nuevoGasto={nuevoGasto}
                handleChange={handleChange}
                fechaRef={fechaRef}
                nFacturaRef={nFacturaRef}
                ptoVentaRef={ptoVentaRef}
                montoIVARef={montoIVARef}
                retIIBBRef={retIIBBRef}
                retggciasRef={retggciasRef}
                percIVARef={percIVARef}
                totalRef={totalRef}
                detalleRef={detalleRef}
                error={error}
                servicios={servicios}
                operadorsep={operadorsep}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="gastoscargados"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Gastos Cargados
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
            <div className="modal-body">
              <ListadoCajaGastosCargados
                listado={listgastos}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {caja ? (
        <ListadoCajaGastos
          caja={caja}
          gastos={gastos}
          dataToggle={"modal"}
          dataTarget={"#exampleModal"}
          dataToggle1={"modal"}
          dataTarget1={"#gastoscargados"}
          acGast={acGast}
          totCaja={totCaja}
          regGasto={regGasto}
          cerrarCaja={cerrarCaja}
          eliminarGastos={eliminarGastos}
        />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default gastoscaja;
