import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import moment from "moment";
import toastr from "toastr";
import { ip } from "../../../config/config";
import { registrarHistoria } from "../../../utils/funciones";
import FormAsignarLugar from "../../../components/sepelio/parcelas/FormAsignarLugar";

function AsignarLugar(props) {
  let dniRef = React.createRef();

  const [usu, guardarUsuario] = useState(null);
  const [parcela, guardarParcela] = useState({});
  const [ficha, guardarFicha] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [errores, guardarErrores] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();
  if (router.query.idparcela) {
    jsCookie.set("idparcela", router.query.idparcela);
  }

  const traerParcelas = async () => {
    if (jsCookie.get("idparcela"))
      await axios
        .get(`${ip}api/sepelio/parcelas/traerparcela`, {
          params: {
            id: jsCookie.get("idparcela"),
          },
        })

        .then((res) => {
          if (res.data) {
            guardarParcela(res.data);
          } else {
            toastr.info("No se encuentra la parcela seleccionada");
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer la parcela seleccionada");
        });
  };

  const traerDifunto = async () => {
    guardarErrores(null);
    guardarAlertas(null);

    let contrato = dniRef.current.value;

    if (contrato === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
      await axios
        .get(`${ip}api/sepelio/servicio/consultarficham/${contrato}`)
        .then((res) => {
          if (res.data) {
            let ficha = res.data;
            guardarFicha(ficha);
          } else if (!res.data) {
            axios
              .get(`${ip}api/sepelio/servicio/consultarfichaadhm/${contrato}`)
              .then((res) => {
                if (res.data) {
                  let ficha = res.data;
                  guardarFicha(ficha);
                } else if (!res.data) {
                  axios
                    .get(`${ip}api/sepelio/servicio/consultarficha/${contrato}`)
                    .then((res) => {
                      if (res.data) {
                        let ficha = res.data;
                        guardarFicha(ficha);
                      } else if (!res.data) {
                        axios
                          .get(
                            `${ip}api/sepelio/servicio/consultarfichaadh/${contrato}`
                          )
                          .then((res) => {
                            if (res.data) {
                              let ficha = res.data;
                              guardarFicha(ficha);
                            } else if (!res.data) {
                              toastr.error(
                                "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                                "ATENCION"
                              );
                            }
                            let ficha = res.data;
                            guardarFicha(ficha);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
                let ficha = res.data;
                guardarFicha(ficha);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const updateLugar = async () => {
    let data = {
      idparcela: parcela.idparcela,
      lugares: parcela.lugares - 1,
    };

    await axios
      .put(`${ip}api/sepelio/parcelas/updatelugar`, data)
      .then((res) => {
        if (res.status === 200) {
          toastr.info(
            "Se actualizo la cantidad de lugares disponibles de la parcela"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al actualizar la cantidad de lugares de la parcela"
        );
      });
  };

  const asigLugar = async () => {
    const datos = {
      idparcela: parcela.idparcela,
      contrato: ficha.CONTRATO,
      dni: ficha.NRO_DOC,
      fecha: moment().format("YYYY-MM-DD"),
      operador: usu.usuario,
      lugar: "",
    };

    if (parcela.lugares === 3) {
      datos.lugar = parcela.lugares - 2;
    } else if (parcela.lugares === 2) {
      datos.lugar = parcela.lugares;
    } else if (parcela.lugares === 1) {
      datos.lugar = parcela.lugares + 2;
    }

    await axios
      .post(`${ip}api/sepelio/parcelas/asignarlugar`, datos)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se asigno el lugar con exito");

          updateLugar();

          let accion = `Se asigno un nuevo lugar en la parcela: ${parcela.parcela}, manzana: ${parcela.mza}, lote: ${parcela.lote} perteneciente al cementerio: ${parcela.cementerio}.`;

          registrarHistoria(accion, usu.usuario);

          setTimeout(() => {
            Router.push("/sepelio/parcelas/stock");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al asignar el lugar");
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
      }

      traerParcelas();
    }
  }, []);

  return (
    <Layout>
      <FormAsignarLugar
        parcela={parcela}
        socio={ficha}
        traerDifunto={traerDifunto}
        alertas={alertas}
        errores={errores}
        dniRef={dniRef}
        asigLugar={asigLugar}
      />
    </Layout>
  );
}

export default AsignarLugar;
