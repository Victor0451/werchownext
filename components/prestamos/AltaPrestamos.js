import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import axios from "axios";
import toastr from "toastr";
import FormAltaPrestamo from "./FormAltaPrestamo";
import ListadoPrestamosAct from "./ListadoPrestamosAct";
import { ip } from "../../config/config";

const AltaPrestamos = ({
  usuario,
  contrato,
  cuopret,
  capadev,
  legajo,
  neto,
  anti,
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  error,
  operadorRef,
  valcuotaRef,
  handleChanges,
  capital,
  cuotas,
  renovapres,
  renoverror,
  nombreRef,
  apellidoRef,
  capiPrest,

}) => {
  const [user, guardarUser] = useState({});
  const [ficha, guardarficha] = useState(null);
  const [nopoli, guardarNopoli] = useState(null);
  const [prestamos, guardarPrestamos] = useState(null);

  useEffect(() => {
    if (usuario) {
      let user = JSON.parse(usuario);
      guardarUser(user);
    }
  }, []);

  const prestamosActivos = async (prestamos) => {
    await axios
      .get(`${ip}api/sgi/prestamos/prestamosactivos/${contrato}`)
      .then((res) => {
        if (res.data.length !== 0) {
          const prestamos = res.data;
          guardarPrestamos(prestamos);

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarNopoli(null);
    guardarficha(null);

    if (contrato) {
      await axios
        .get(`${ip}api/sgi/prestamos/consultarficha/${contrato}`)
        .then((res) => {
          let ficha = res.data;
          if (res.data.GRUPO === 6 || res.data.GRUPO === 5006) {
            guardarficha(ficha);

            prestamosActivos(contrato);
          } else if (res.data.GRUPO !== 6) {
            toastr.warning(
              "EL NUMERO DE FICHA NO PERTENECE A UN POLICIA",
              "ATENCION"
            );
            const nopoli = "EL NUMERO DE FICHA NO PERTENECE A UN POLICIA";
            guardarNopoli(nopoli);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
            "ATENCION"
          );
          const nopoli = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
          guardarNopoli(nopoli);
        });
    }
  };

  let fecha = moment().format("DD/MM/YYYY");

  return (
    <div className="container mt-4 mb-4 border border-dark p-4 list">
      <div className="  border border-dark p-4">
        <h2 className=" mb-4">
          <strong>
            <u>Alta de Sub. Cont. Familiar: Datos del Operador</u>
          </strong>
        </h2>
        <div className="d-flex justify-content-between">
          <div className="row mt-2 mb-2">
            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Operador: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={user.usuario}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Codigo: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={user.codigo}
                ref={operadorRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Fecha: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={fecha}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <h2 className="mt-4 mb-4">
          <strong>
            <u>Ingrese N° de Ficha</u>
          </strong>
        </h2>
        <form className="mt-4 border border-dark p-2" onSubmit={buscarTitular}>
          <div className="row mb-4">
            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> N° de Ficha: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ficha"
                name="contrato"
                defaultValue={contrato}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.contrato && (
                <div className="mt-2 form-group  alert alert-danger">
                  {errores.contrato}
                </div>
              )}
            </div>

            <div className="form-group col-md-6 mt-4">
              <button type="submit" className="btn btn-block btn-primary">
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
      {ficha !== null ? (
        <>
          {prestamos !== null ? (
            <>
              <hr className="mt-4 mb-4" />

              <div className=" border border-dark p-4 mt-4 mb-4">
                <div className="mt-4 mb-4 alert alert-warning border border-dark text-uppercase text-center">
                  <strong>
                    {" "}
                    ATENCION, El afiliado ya tiene prestamos activos
                  </strong>
                </div>

                <h2 className="mt-4 mb-4 ">
                  <strong>
                    <u>Prestamos Activos</u>
                  </strong>
                </h2>
                <ListadoPrestamosAct prestamos={prestamos} />
              </div>
            </>
          ) : null}

          <FormAltaPrestamo
            ficha={ficha}
            cuopret={cuopret}
            legajo={legajo}
            neto={neto}
            anti={anti}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            errores={errores}
            valcuotaRef={valcuotaRef}
            handleChanges={handleChanges}
            capital={capital}
            cuotas={cuotas}
            renovapres={renovapres}
            renoverror={renoverror}
            nombreRef={nombreRef}
            apellidoRef={apellidoRef}
            capiPrest={capiPrest}

          />
        </>
      ) : nopoli !== null ? (
        <div className="mt-2 form-group  alert alert-danger mt-4 border border-dark text-center">
          {nopoli}
        </div>
      ) : null}
    </div>
  );
};

export default AltaPrestamos;
