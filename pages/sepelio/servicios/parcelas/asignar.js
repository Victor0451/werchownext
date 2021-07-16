import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import moment from "moment";
import toastr from "toastr";
import AsignarParcela from "../../../../components/sepelio/servicios/parcelas/AsignarParcela";
import Spinner from "../../../../components/layout/Spinner";

const asignar = () => {
  let idparcelaRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [parcela, guardarParcela] = useState(null);
  const [servicio, guardarServicio] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  const selcasoparcela = (row) => {
    guardarParcela(row.original);

    document.getElementById("parcela").value = `${row.original.parcela}`;
    document.getElementById("mza").value = `${row.original.mza}`;
    document.getElementById("lote").value = `${row.original.lote}`;
  };

  const verificarParcelaAsig = async (id) => {
    await axios
      .get(`${ip}api/sepelio/parcelas/verificarparcela/${id}`)
      .then((res) => {
        if (res.data.length !== 0) {
          toastr.warning(
            "Este servicio ya cuenta con parcela asignada",
            "ATENCION"
          );

          guardarFlag(true);
          guardarParcela(res.data);
          console.log(res.data);
        }
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al verificar la parcela", "ATENCION");
        console.log(error);
      });
  };

  const traerSolicitud = async (id) => {
    await axios
      .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        const servicio = res.data;
        guardarServicio(servicio);

        traerAtaud(res.data.idataud);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putSerivico = async () => {
    const ides = {
      idparcela: parcela.idparcela,
      idservicio: servicio.idservicio,
    };

    await axios
      .put(`${ip}api/sepelio/parcelas/putidserv`, ides)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regParcela = async () => {
    let parce = {
      idservicio: servicio.idservicio,
      dni_extinto: servicio.dni,
      fecha: servicio.fecha_fallecimiento,
      ficha: servicio.contrato,
      operador_asignacion: user.usuario,
      fecha_asignacion: moment().format("YYYY-MM-DD HH:mm:ss"),
      asignada: 1,
    };

    await axios
      .put(
        `${ip}api/sepelio/parcelas/asignarparcelaaparte/${parcela.idparcela}`,
        parce
      )
      .then((res) => {
        if (res.status === 200) {
          toastr.success("La parcela se asigno con exito", "ATENCION");
          console.log(res.data);
          putSerivico();

          setTimeout(() => {
            Router.push("/sepelio/servicios/listado");
          }, 500);
        }
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al asignar la parcela", "ATENCION");
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      verificarParcelaAsig(router.query.idservicio);

      traerSolicitud(router.query.id);

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
      }
    }
  }, []);

  return (
    <Layout>
      {flag === true ? (
        <>
          {servicio ? (
            <div className="container mt-4 alert alert-info border border-dark text-center text-uppercase">
              Servicio N° {servicio.idservicio} - {servicio.apellido},{" "}
              {servicio.nombre} Ya posee parcela asiganda
            </div>
          ) : null}

          {parcela ? (
            <div className="container mt-4 alert alert-info border border-dark">
              <div className="row">
                <div className="col-md-4">
                  <label>Parcela</label>
                  <input
                    type="text"
                    className="form-control"
                    value={parcela[0].parcela}
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label>Manzana</label>
                  <input
                    type="text"
                    className="form-control"
                    value={parcela[0].mza}
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label>Lote</label>
                  <input
                    type="text"
                    className="form-control"
                    value={parcela[0].lote}
                    readOnly
                  />
                </div>

                <div className="col-md-4">
                  <label>Fecha</label>
                  <input
                    type="text"
                    className="form-control"
                    value={moment(parcela[0].fecha).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </>
      ) : flag === false ? (
        <AsignarParcela
          idparcelaRef={idparcelaRef}
          selcasoparcela={selcasoparcela}
          servicio={servicio}
          regParcela={regParcela}
        />
      ) : null}
    </Layout>
  );
};

export default asignar;
