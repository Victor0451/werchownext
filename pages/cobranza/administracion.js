import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import toastr from "toastr";

const administracion = () => {
  let sucursalRefW = React.createRef();
  let sucursalRefM = React.createRef();

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  // INSERTS
  const postC1000 = () => {
    axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasw/insertc1000`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postC1000M = () => {
    axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasm/insertc1000m`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCTjt = () => {
    axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasw/insertctjt`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCTjtM = () => {
    axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasm/insertctjtm`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCBanco = () => {
    axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasw/insertcbanco`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCPolicia = () => {
    axios
      .post(
        ` http://190.231.32.232:5002/api/sgi/insertartablasw/insertcpolicia`
      )
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  //   UPDATES
  const putCtjt = () => {
    if (sucursalRefW.current.value === "no") {
      toastr.error("Seleccionar Sucursal", "ATENCION");
    } else {
      let id = sucursalRefW.current.value;

      axios
        .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/ctjt/${id}`)
        .then((res) => {
          toastr.success(`${res.data[0].info}`, `ATENCION`);
        })
        .catch((error) => {
          console.log(error);
          toastr.success(`${error}`, `ATENCION`);
        });
    }
  };

  const putCtjtm = () => {
    if (sucursalRefM.current.value === "no") {
      toastr.error("Seleccionar Sucursal", "ATENCION");
    } else {
      let id = sucursalRefM.current.value;

      axios
        .put(
          ` http://190.231.32.232:5002/api/sgi/actualizartablasm/ctjtm/${id}`
        )
        .then((res) => {
          toastr.success(`${res.data[0].info}`, `ATENCION`);
        })
        .catch((error) => {
          console.log(error);
          toastr.success(`${error}`, `ATENCION`);
        });
    }
  };

  const putCobradoresM = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000mcob`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putCobradores = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000cob`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putOficinaM = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000mof`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putOficina = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000of`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putAdelantadoM = () => {
    axios
      .put(
        ` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000madelantado`
      )
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putAdelantado = () => {
    axios
      .put(
        ` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000adelantado`
      )
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putNoNullM = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000mnonull`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putNoNull = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000nonull`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putBanco = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/cbanco`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putPolicia = () => {
    axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/cpolicia`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  return (
    <Layout>
      <div className="container alert alert-primary border border-dark p-4 mt-4">
        <h2 className="mb-4">
          <strong>
            <u>Administracion de datos para la efectividad</u>
          </strong>
        </h2>

        <br />

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Insertar Datos Para Efectividad
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Actualizar Datos Para Efectividad
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className=" alert alert-primary border border-dark p-4 mt-4">
              <h2 className=" mb-4">
                <strong>
                  <u>INSERTAR DATOS WERCHOW</u>
                </strong>
              </h2>
              <div className="row d-flex justify-content-between border border-dark p-4">
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary "
                    onClick={postC1000}
                  >
                    Insertar C1000
                  </button>
                </div>

                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={postCTjt}
                  >
                    Insertar Tarjetas
                  </button>
                </div>

                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={postCBanco}
                  >
                    Insertar Banco
                  </button>
                </div>

                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={postCPolicia}
                  >
                    Insertar Policias
                  </button>
                </div>
              </div>
            </div>

            <div className="container alert alert-primary border border-dark p-4 mt-4">
              <h2 className=" mb-4">
                <strong>
                  <u>INSERTAR DATOS MUTUAL</u>
                </strong>
              </h2>
              <div className="row d-flex justify-content-between border border-dark p-4">
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary "
                    onClick={postC1000M}
                  >
                    Insertar C1000m
                  </button>
                </div>

                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={postCTjtM}
                  >
                    Insertar Tarjetas
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className=" alert alert-primary border border-dark p-4 mt-4">
              <h2 className=" mb-4">
                <strong>
                  <u>ACTUALIZAR DATOS WERCHOW</u>
                </strong>
              </h2>
              <div className="row d-flex justify-content-between border border-dark p-4">
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary "
                    onClick={putCobradores}
                  >
                    Actualizar Cobradores
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putOficina}
                  >
                    Actualizar Oficina
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putAdelantado}
                  >
                    Actualizar Adelantado
                  </button>
                </div>
                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putCtjt}
                  >
                    Actualizar Tarjetas
                  </button>
                  <select
                    className="form-control form-control-sm mt-1"
                    ref={sucursalRefW}
                  >
                    <option value="no">Seleccionar Sucursal</option>
                    <option value="W">Casa Central</option>
                    <option value="L">Palpala</option>
                    <option value="R">Perico</option>
                    <option value="P">San Pedro</option>
                  </select>
                </div>

                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putBanco}
                  >
                    Actualizar Banco
                  </button>
                </div>

                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putPolicia}
                  >
                    Actualizar Policias
                  </button>
                </div>

                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putNoNull}
                  >
                    Sacar Null
                  </button>
                </div>
              </div>
            </div>

            <div className="container alert alert-primary border border-dark p-4 mt-4">
              <h2 className=" mb-4">
                <strong>
                  <u>ACTUALIZAR DATOS MUTUAL</u>
                </strong>
              </h2>
              <div className="row d-flex justify-content-between border border-dark p-4">
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary "
                    onClick={putCobradoresM}
                  >
                    Actualizar Cobradores
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putOficinaM}
                  >
                    Actualizar Oficina
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putAdelantadoM}
                  >
                    Actualizar Adelantado
                  </button>
                </div>
                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putCtjtm}
                  >
                    Actualizar Tarjetas
                  </button>
                  <select
                    className="form-control form-control-sm mt-1"
                    ref={sucursalRefM}
                  >
                    <option value="no">Seleccionar Sucursal</option>
                    <option value="W">Casa Central</option>
                    <option value="L">Palpala</option>
                    <option value="R">Perico</option>
                    <option value="P">San Pedro</option>
                  </select>
                </div>
                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={putNoNullM}
                  >
                    No Null
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default administracion;
