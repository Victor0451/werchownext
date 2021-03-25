import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import toastr from "toastr";
import Administracion from "../../components/cobranza/Administracion";

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
  const postC1000 = async () => {
    await axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasw/insertc1000`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postC1000M = async () => {
    await axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasm/insertc1000m`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCTjt = async () => {
    await axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasw/insertctjt`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCTjtM = async () => {
    await axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasm/insertctjtm`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCBanco = async () => {
    await axios
      .post(` http://190.231.32.232:5002/api/sgi/insertartablasw/insertcbanco`)
      .then((res) => {
        toastr.success(`${res.data}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const postCPolicia = async () => {
    await axios
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

  const postPrestamos = async () => {
    await axios
      .post(
        ` http://190.231.32.232:5002/api/sgi/insertartablasw/insertcprestamos`
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
  const putCtjt = async () => {
    if (sucursalRefW.current.value === "no") {
      toastr.error("Seleccionar Sucursal", "ATENCION");
    } else {
      let id = sucursalRefW.current.value;

      await axios
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

  const putCtjtm = async () => {
    if (sucursalRefM.current.value === "no") {
      toastr.error("Seleccionar Sucursal", "ATENCION");
    } else {
      let id = sucursalRefM.current.value;

      await axios
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

  const putCobradoresM = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000mcob`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putCobradores = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000cob`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putOficinaM = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000mof`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putOficina = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000of`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putAdelantadoM = async () => {
    await axios
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

  const putAdelantado = async () => {
    await axios
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

  const putNoNullM = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasm/c1000mnonull`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putNoNull = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/c1000nonull`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putBanco = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/cbanco`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putPolicia = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/cpolicia`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  };

  const putPrestamos = async () => {
    await axios
      .put(` http://190.231.32.232:5002/api/sgi/actualizartablasw/cprestamos`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
        toastr.success(`${error}`, `ATENCION`);
      });
  }



  return (
    <Layout>
      <Administracion
        postC1000={postC1000}
        postC1000M={postC1000M}
        postCBanco={postCBanco}
        postCPolicia={postCPolicia}
        postCTjt={postCTjt}
        postCTjtM={postCTjtM}
        postPrestamos={postPrestamos}
        putOficina={putOficina}
        putOficinaM={putOficinaM}
        putPolicia={putPolicia}
        putPrestamos={putPrestamos}
        putAdelantado={putAdelantado}
        putAdelantadoM={putAdelantadoM}
        putBanco={putBanco}
        putCobradores={putCobradores}
        putCobradoresM={putCobradoresM}
        putCtjt={putCtjt}
        putCtjtm={putCtjtm}
        putNoNull={putNoNull}
        putNoNullM={putNoNullM}
        sucursalRefM={sucursalRefM}
        sucursalRefW={sucursalRefW}
      />
    </Layout>
  );
};

export default administracion;
