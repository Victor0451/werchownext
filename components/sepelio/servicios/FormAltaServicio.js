import React, { useState } from "react";
import Stock from "../../../components/sepelio/ataudes/Stock";
import axios from "axios";

// Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarAltaServicio from "../../../validacion/validarAltaServicio";

const STATE_INICIAL = {
  fechafallecimiento: "",
  lugarfallecimiento: "",
  casamortuaria: "",
  fechainhumacion: "",
  horainhumacion: "",
  cementerio: "",
};

const FormAltaServicio = ({
  ficha,
  selcaso,
  nuevoServicio,
  // DETALLES EXTINTO
  empresaRef,
  dniRef,
  apellidoRef,
  nombreRef,
  edadRef,
  calleRef,
  numeroRef,
  barrioRef,
  fechaFallecimientoRef,
  lugarFallecimientoRef,
  tipoServicioRef,
  casaMortuariaRef,
  fechaInumacionRef,
  horaInumacionRef,
  cementerioRef,
  // DETALLES SERVICIO
  caparRef,
  avisoRef,
  tipoAvisoRef,
  autoDueloRef,
  tipoAutoDuelRef,
  placaRef,
  carrozaFuRef,
  tipoCarrozaFuRef,
  salaRef,
  tipoSalaRef,
  tramitesRef,
  tipoTramitesRef,
  cochePortaRef,
  tipoCochePortaRef,
  retiroCuerpoRef,
  tipoRetiroCuerpoRef,
  trasladoRef,
  tipoTrasladoRef,
  observacionRef,
  // DETALLES ATAUD
  tipoAtaudRef,
  caracteristicaAtaudRef,
  descriart,
  codigo,
  caracteristicas,
}) => {
  const [tramite, guardarTramite] = useState(null);
  const [valuetra, guardarValueTra] = useState(null);

  const [retirocuerpo, guardarRetirocuerpo] = useState(null);
  const [valueretcuerp, guardarValueRetCuerpo] = useState(null);

  const [traslado, guardarTraslado] = useState(null);
  const [valuetras, guardarValueTras] = useState(null);

  const [avsep, guardaraAvSep] = useState(null);
  const [valueavsep, guardarValueAvSep] = useState(null);

  const [carrofu, guardaraCarroFu] = useState(null);
  const [valuecarrofu, guardarValueCarroFu] = useState(null);

  const [portacor, guardaraPortaCor] = useState(null);
  const [valueportacor, guardarValuePortaCor] = useState(null);

  const [autoduel, guardarAutoDuel] = useState(null);
  const [valueautoduel, guardarValueAutoDuel] = useState(null);

  const [salavel, guardarSalaVel] = useState(null);
  const [valuesalavel, guardarValueSalaVel] = useState(null);

  const handleChecked = (e) => {
    if (e.target.name === "tramite") {
      const tramite = e.target.name;
      guardarTramite(tramite);
      const valuetra = e.target.value;
      guardarValueTra(valuetra);
    } else if (e.target.name === "avsep") {
      const avsep = e.target.name;
      guardaraAvSep(avsep);
      const valueavsep = e.target.value;
      guardarValueAvSep(valueavsep);
    } else if (e.target.name === "retirocuerpo") {
      const retirocuerpo = e.target.name;
      guardarRetirocuerpo(retirocuerpo);
      const valueretcuerp = e.target.value;
      guardarValueRetCuerpo(valueretcuerp);
    } else if (e.target.name === "traslado") {
      const traslado = e.target.name;
      guardarTraslado(traslado);
      const valuetras = e.target.value;
      guardarValueTras(valuetras);
    } else if (e.target.name === "carrofu") {
      const carrofu = e.target.name;
      guardaraCarroFu(carrofu);
      const valuecarrofu = e.target.value;
      guardarValueCarroFu(valuecarrofu);
    } else if (e.target.name === "portacor") {
      const portacor = e.target.name;
      guardaraPortaCor(portacor);
      const valueportacor = e.target.value;
      guardarValuePortaCor(valueportacor);
    } else if (e.target.name === "autoduel") {
      const autoduel = e.target.name;
      guardarAutoDuel(autoduel);
      const valueautoduel = e.target.value;
      guardarValueAutoDuel(valueautoduel);
    } else if (e.target.name === "salavel") {
      const salavel = e.target.name;
      guardarSalaVel(salavel);
      const valuesalavel = e.target.value;
      guardarValueSalaVel(valuesalavel);
    } else if (e.target.name === "adicional") {
      const adicional = e.target.name;
      guardarAdicional(adicional);
      const valueadicional = e.target.value;
      guardarValueAdicional(valueadicional);
    }
  };

  const {
    errmsg,
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaServicio, nuevoServicio);

  const {
    fechafallecimiento,
    lugarfallecimiento,
    casamortuaria,
    fechainhumacion,
    horainhumacion,
    cementerio,
    tiporetirocuerpo,
  } = valores;

  async function nuevoServicio() {
    try {
      const servicio = {
        empresa: empresaRef.current.value,
        dni: dniRef.current.value,
        apellido: apellidoRef.current.value,
        nombre: nombreRef.current.value,
        edad: edadRef.current.value,
        calle: calleRef.current.value,
        numero: numeroRef.current.value,
        barrio: barrioRef.current.value,
        fecha_fallecimiento: fechaFallecimientoRef.current.value,
        lugar_fallecimiento: lugarFallecimientoRef.current.value,
        tipo_servicio: tipoServicioRef.current.value,
        casa_mortuaria: casaMortuariaRef.current.value,
        fecha_inhumacion: fechaInumacionRef.current.value,
        hora_inhumacion: horaInumacionRef.current.value,
        cementerio: cementerioRef.current.value,
        retirocuerpo: retiroCuerpoRef.current.checked,
        tiporetirocuerpo: tipoRetiroCuerpoRef.current.value,
        traslado: trasladoRef.current.checked,
        tipotraslado: tipoTrasladoRef.current.value,
        capar: caparRef.current.checked,
        placa: placaRef.current.checked,
        tramites: tramitesRef.current.checked,
        tipotramites: tipoTramitesRef.current.value,
        aviso: avisoRef.current.checked,
        tipoaviso: tipoAvisoRef.current.value,
        carroza: carrozaFuRef.current.checked,
        tipocarroza: tipoCarrozaFuRef.current.value,
        portacorona: cochePortaRef.current.checked,
        tipococheporta: tipoCochePortaRef.current.value,
        autoduelo: autoDueloRef.current.checked,
        tipoautoduel: tipoAutoDuelRef.current.value,
        salavel: salaRef.current.checked,
        tiposalavel: tipoSalaRef.current.value,
        ataud: tipoAtaudRef.current.value,
        carasteristicas: caracteristicaAtaudRef.current.value,
        observacion: observacionRef.current.value,
      };

      await axios
        .post(
          `http://190.231.32.232:5002/api/sepelio/servicio/nuevoservicio`,
          servicio
        )
        .then((res) => {
          console.log("todo ok", res);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  let tiposervicio = `Servicio Asosiado Al Plan ${ficha.PLAN}`;

  return (
    <div className="mt-4 alert alert-primary border border-dark p-4">
      <form className=" p-4" onSubmit={handleSubmit}>
        <h1 className="mt-4 mb-4">
          <strong>
            <u>Formulario De Solicitud De Servicio</u>
          </strong>
        </h1>

        <div className=" border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Datos del Extinto</u>
            </strong>
          </h2>
          <div className="row">
            {ficha.EMPRESA === "W" ? (
              <div className="col-md-4 mt-4 mb-4">
                <label>
                  <strong>
                    <u>Empresa</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Empresa"
                  name="responsable"
                  defaultValue="WERCHOW"
                  ref={empresaRef}
                />
              </div>
            ) : ficha.EMPRESA === "M" ? (
              <div className="col-md-4 mt-4 mb-4">
                <label>
                  <strong>
                    <u>Empresa</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Empresa"
                  name="responsable"
                  defaultValue="MUTUAL"
                  ref={empresaRef}
                />
              </div>
            ) : null}

            <div className="form-group col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>DNI</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="dni"
                defaultValue={ficha.NRO_DOC}
                ref={dniRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Apellido</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="apellido"
                defaultValue={ficha.APELLIDOS}
                ref={apellidoRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Nombre</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="nombre"
                defaultValue={ficha.NOMBRES}
                ref={nombreRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Edad</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.EDAD}
                ref={edadRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Calle</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.CALLE}
                ref={calleRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>N°</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.NRO_CALLE}
                ref={numeroRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Barrio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.BARRIO}
                ref={barrioRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                ref={fechaFallecimientoRef}
                name="fechafallecimiento"
                defaultValue={fechafallecimiento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.fechafallecimiento && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.fechafallecimiento}
                </div>
              )}
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Lugar de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Lugar de Fallecimiento"
                name="lugarfallecimiento"
                ref={lugarFallecimientoRef}
                name="lugarfallecimiento"
                defaultValue={lugarfallecimiento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.lugarfallecimiento && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.lugarfallecimiento}
                </div>
              )}
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Detalles del Servicio</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Tipo de Servicio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo de Servicio"
                ref={tipoServicioRef}
                name="tiposervicio"
                defaultValue={tiposervicio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.tiposervicio && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.tiposervicio}
                </div>
              )}
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Casa Mortuaria</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Casa Mortuaria"
                name="casamortuaria"
                ref={casaMortuariaRef}
                name="casamortuaria"
                defaultValue={casamortuaria}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.casamortuaria && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.casamortuaria}
                </div>
              )}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Inumacion</u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha de Inumacion"
                name="fechainhumacion"
                ref={fechaInumacionRef}
                defaultValue={fechainhumacion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.fechainhumacion && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.fechainhumacion}
                </div>
              )}
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Hora de Inumacion</u>
                </strong>
              </label>
              <input
                type="time"
                className="form-control"
                placeholder="hora de Inumacion"
                name="horainhumacion"
                ref={horaInumacionRef}
                defaultValue={horainhumacion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.horainhumacion && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.horainhumacion}
                </div>
              )}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Cementerio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Cementerio"
                name="cementerio"
                ref={cementerioRef}
                defaultValue={cementerio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.cementerio && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.cementerio}
                </div>
              )}
            </div>
            <div className="col">
              {/* <Select
              // options={forma}
              placeholder={"Lugar"}
              //onChange={value => handleChange(value, "PRODUCTOR")}
            /> */}
            </div>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="row  p-4">
            <fieldset>
              <h2 className="mb-4">
                <strong>
                  <u>Gastos del Servicio</u>
                </strong>
              </h2>

              <div className="row mt-4 border border-dark p-4">
                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="retirocuerpo"
                      name="retirocuerpo"
                      className="custom-control-input"
                      ref={retiroCuerpoRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="retirocuerpo"
                    >
                      Retiro de Cuerpo
                    </label>
                  </div>
                  {retirocuerpo && valueretcuerp === true ? (
                    <div className="mt-2 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lugar"
                        name="lugar"
                        ref={tipoRetiroCuerpoRef}
                        defaultValue={tiporetirocuerpo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errores.tiporetirocuerpo && (
                        <div className="alert alert-danger text-center p-2 mt-2">
                          {errores.tiporetirocuerpo}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-2 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lugar"
                        name="lugar"
                        defaultValue="NO"
                        hidden
                        ref={tipoRetiroCuerpoRef}
                      />
                    </div>
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="traslado"
                      name="traslado"
                      className="custom-control-input"
                      ref={trasladoRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="traslado">
                      Traslado
                    </label>
                  </div>
                  {traslado && valuetras === true ? (
                    <div className="mt-2 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lugar"
                        name="lugar"
                        ref={tipoTrasladoRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lugar"
                      name="lugar"
                      hidden
                      defaultValue="NO"
                      ref={tipoTrasladoRef}
                    />
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="capar"
                      name="capar"
                      className="custom-control-input"
                      ref={caparRef}
                    />
                    <label className="custom-control-label" htmlFor="capar">
                      Capilla Ardiente En Domicilio
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="placa"
                      name="placa"
                      className="custom-control-input"
                      ref={placaRef}
                    />
                    <label className="custom-control-label" htmlFor="placa">
                      Graba Placa
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="tramite"
                      name="tramite"
                      className="custom-control-input"
                      ref={tramitesRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                      defaultChecked={false}
                    />
                    <label className="custom-control-label" htmlFor="tramite">
                      Tramites
                    </label>
                  </div>
                  {tramite && valuetra === true ? (
                    <div className="mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Seccion:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Seccion"
                        name="seccion"
                        ref={tipoTramitesRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Seccion"
                      name="seccion"
                      hidden
                      defaultValue="NO"
                      ref={tipoTramitesRef}
                    />
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="avsep"
                      name="avsep"
                      className="custom-control-input"
                      ref={avisoRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="avsep">
                      Aviso De Sepelio
                    </label>
                  </div>
                  {avsep && valueavsep === true ? (
                    <div className=" mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Aviso:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Aviso"
                        name="aviso"
                        ref={tipoAvisoRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aviso"
                      name="aviso"
                      hidden
                      defaultValue="NO"
                      ref={tipoAvisoRef}
                    />
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="carrofu"
                      name="carrofu"
                      className="custom-control-input"
                      ref={carrozaFuRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="carrofu">
                      Carroza Funebre
                    </label>
                  </div>
                  {carrofu && valuecarrofu === true ? (
                    <div className=" mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Carroza:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Carroza"
                        name="carroza"
                        ref={tipoCarrozaFuRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Carroza"
                      name="carroza"
                      hidden
                      defaultValue="NO"
                      ref={tipoCarrozaFuRef}
                    />
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="portacor"
                      name="portacor"
                      className="custom-control-input"
                      ref={cochePortaRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="portacor">
                      Coche Portacoronas
                    </label>
                  </div>
                  {portacor && valueportacor === true ? (
                    <div className=" mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Portacorona:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Portacorona"
                        name="portacorona"
                        ref={tipoCochePortaRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Portacorona"
                      name="portacorona"
                      ref={tipoCochePortaRef}
                      hidden
                      defaultValue="NO"
                    />
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="autoduel"
                      name="autoduel"
                      className="custom-control-input"
                      ref={autoDueloRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="autoduel">
                      Automoviles Para Duelo
                    </label>
                  </div>
                  {autoduel && valueautoduel === true ? (
                    <div className=" mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Auto Para Duelo:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Auto Para Duelo"
                        name="autoduel"
                        ref={tipoAutoDuelRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Auto Para Duelo"
                      name="autoduel"
                      hidden
                      defaultValue="NO"
                      ref={tipoAutoDuelRef}
                    />
                  )}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="salavel"
                      name="salavel"
                      className="custom-control-input"
                      ref={salaRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="salavel">
                      Sala Velatoria
                    </label>
                  </div>
                  {salavel && valuesalavel === true ? (
                    <div className=" mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Sala Velatoria:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sala Velatoria"
                        name="salavel"
                        ref={tipoSalaRef}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sala Velatoria"
                      name="salavel"
                      hidden
                      defaultValue="NO"
                      ref={tipoSalaRef}
                    />
                  )}
                </div>

                <div className="form-group mt-4 col-md-12">
                  <label>Observaciones</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    ref={observacionRef}
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Ataud</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-2 mb-4">
              <label>
                <strong>
                  <u>Tipo de Ataud</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                name="tipo"
                ref={tipoAtaudRef}
                defaultValue={descriart}
              />
            </div>

            <div className="col-md-4 mt-2 mb-4">
              <label>
                <strong>
                  <u>Caracteristicas</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Caracteristica"
                name="caracteristica"
                ref={caracteristicaAtaudRef}
                defaultValue={caracteristicas}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Ver Stock
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        {errmsg && (
          <div className="alert alert-danger text-center p-2 mt-4 mb-4">
            {errmsg}
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Registrar
        </button>
      </form>

      <div
        className="modal fade bd-example-modal-lg"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Stock de Ataudes</h5>
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
              <Stock selcaso={selcaso} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAltaServicio;
