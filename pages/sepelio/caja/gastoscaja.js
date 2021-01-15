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

  const [operadortramite, guardarOpTramite] = useState(null);

  let token = jsCookie.get("token");

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let id = router.query.id;

      infoCaja(id);
      listadoProveedores();
      listadoConceptos();

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    }
  }, []);

  const listadoProveedores = async () => {
    axios
      .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/listprov`)
      .then((res) => {
        guardarListProv(res.data[0]);
      });
  };

  const listadoConceptos = async () => {
    axios
      .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/listconcepto`)
      .then((res) => {
        guardarListConcep(res.data[0]);
      });
  };

  const infoCaja = async (id) => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/caja/${id}`)
      .then((res) => {
        guardarCaja(res.data);
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
  };

  const updateTotales = async () => {
    let id = router.query.id;

    const valores = {
      gastos: acGast,
      totalcaja: totCaja,
    };

    await axios
      .put(
        `http://190.231.32.232:5002/api/sepelio/cajasepelio/updatetotales/${id}`,
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
        `http://190.231.32.232:5002/api/sepelio/cajasepelio/updatecierrecaja/${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regGasto = async () => {
    await axios
      .post(
        `http://190.231.32.232:5002/api/sepelio/cajasepelio/gastocaja`,
        gastos
      )
      .then((res) => {
        console.log(res);

        updateTotales();
        cerrarCaja();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const restartForm = () => {
    // fechaRef.current.value = "";
    nFacturaRef.current.value = 0;
    ptoVentaRef.current.value = 0;
    montoIVARef.current.value = 0;
    retIIBBRef.current.value = 0;
    retggciasRef.current.value = 0;
    percIVARef.current.value = 0;
    detalleRef.current.value = "";
    totalRef.current.value = 0;

    guardarOpTramite(null);
    guardarAcGast(null);
    guardarTotCaja(null);
    guardarUsuario(null);
    guardarEmpresa(null);
    guardarConcepto(null);
    guardarFactura(null);
    guardarMedioPago(null);
    guardarPorciva(null);
    guardarProveedor(null);
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
          acGast={acGast}
          totCaja={totCaja}
          regGasto={regGasto}
          eliminarGastos={eliminarGastos}
        />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default gastoscaja;
