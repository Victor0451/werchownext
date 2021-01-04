import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import ListadoCajaGastos from "../../../components/sepelio/caja/ListadoCajaGastos";
import NuevoCajaGasto from "../../../components/sepelio/caja/NuevoCajaGasto";

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

  const [operadortramite, guardarOpTramite] = useState(null);

  let token = jsCookie.get("token");

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let id = router.query.id;

      infoCaja(id);

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    }
  }, []);

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

    guardarGastos([...gastos, gasto]);

    let totgast = acGast + parseFloat(gasto.total);

    guardarAcGast(totgast);

    let totcaja = caja.monto - totgast;

    guardarTotCaja(totcaja);
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

      <ListadoCajaGastos
        caja={caja}
        gastos={gastos}
        dataToggle={"modal"}
        dataTarget={"#exampleModal"}
        acGast={acGast}
        totCaja={totCaja}
        regGasto={regGasto}
      />
    </Layout>
  );
};

export default gastoscaja;
