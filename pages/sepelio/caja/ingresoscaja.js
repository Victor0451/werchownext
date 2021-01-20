import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";

import toastr from "toastr";
import IngresoCaja from "../../../components/sepelio/caja/IngresoCaja";

const ingresoscaja = () => {
  let fechaRef = React.createRef();
  let nFacturaRef = React.createRef();
  let ptoVentaRef = React.createRef();
  let totalRef = React.createRef();
  let detalleRef = React.createRef();

  const [userData, guardarUsuario] = useState({});
  const [caja, guardarCaja] = useState(null);
  const [ingresos, guardarIngresos] = useState(null);
  const [listConcep, guardarListConcep] = useState(null);
  const [concepto, guardarConcepto] = useState(null);
  const [tipofactura, guardarFactura] = useState(null);
  const [empresa, guardarEmpresa] = useState(null);
  const [error, guardarError] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
      }

      let id = router.query.id;
      infoCaja(id);
      listIngresos(id);
      listadoConceptos();
    }
  }, []);

  const handleChange = (value, flag) => {
    if (flag === "concepto") {
      guardarConcepto(value.label);
    }
    if (flag === "tipofactura") {
      guardarFactura(value.label);
    }
    if (flag === "empresa") {
      guardarEmpresa(value.label);
    }
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

  const listIngresos = async (id) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sepelio/cajasepelio/listadoingresos/${id}`
      )
      .then((res) => {
        guardarIngresos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listadoConceptos = async () => {
    axios
      .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/listconcepto`)
      .then((res) => {
        guardarListConcep(res.data[0]);
      });
  };

  const regIngreso = async () => {
    const ingreso = {
      idcaja: caja.idcaja,
      concepto: concepto,
      monto: totalRef.current.value,
      operador: userData.usuario,
      fechaRef: fechaRef.current.value,
      tipofactura: tipofactura,
      nFactura: nFacturaRef.current.value,
      empresa: empresa,
      detalle: detalleRef.current.value,
      ptoVenta: ptoVentaRef.current.value,
    };

    if (ingreso.nfactura === "") {
      guardarError(
        "Debes ingresar un N° de factura o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (ingreso.ptoventa === "") {
      guardarError(
        "Debes ingresar un pto de venta o de no tenerlo, ingresa un 0 (cero)"
      );
    } else if (ingreso.monto === "") {
      guardarError("Debes ingresar un Monto");
    } else if (ingreso.empresa === null) {
      guardarError("Debes Seleccionar la empresa");
    } else if (ingreso.concepto === null) {
      guardarError("Debes seleccionar un concepto");
    } else if (ingreso.tipofactura === null) {
      guardarError("Debes seleccionar un tipo de factura");
    } else {
      axios
        .post(
          `http://190.231.32.232:5002/api/sepelio/cajasepelio/ingresocaja`,
          ingreso
        )
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Se registro el ingreso con exito", "ATENCION");
            setTimeout(() => {
              window.location.replace("/sepelio/caja/listado");
            }, 500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    updateValoresCaja();
  };

  const updateValoresCaja = async () => {
    let monto = parseFloat(caja.monto) + parseFloat(totalRef.current.value);
    let totalcaja =
      parseFloat(caja.totalcaja) + parseFloat(totalRef.current.value);

    console.log(monto, totalcaja);

    let valores = {
      monto: monto,
      totalcaja: totalcaja,
    };

    axios
      .put(
        `http://190.231.32.232:5002/api/sepelio/cajasepelio/updatetotalesing/${caja.idcaja}`,
        valores
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <IngresoCaja
        caja={caja}
        ingresos={ingresos}
        listConcep={listConcep}
        handleChange={handleChange}
        fechaRef={fechaRef}
        nFacturaRef={nFacturaRef}
        ptoVentaRef={ptoVentaRef}
        totalRef={totalRef}
        detalleRef={detalleRef}
        error={error}
        regIngreso={regIngreso}
      />
    </Layout>
  );
};

export default ingresoscaja;
