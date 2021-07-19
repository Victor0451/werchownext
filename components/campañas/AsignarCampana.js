import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import ListadoCampana from "./ListadoCampana";
import BotonCamp from "./BotonCamp";
import toastr from "toastr";
import axios from "axios";
import { ip } from "../../config/config";

const AsignarCampana = ({
  CasaCentralMG,
  CasaCentralGG,
  CasaCentralVF,
  perico,
  palpala,
  sanPedro,
  campana,
  empresa,
}) => {
  const subirCamp = async (caso) => {
    await axios
      .post(`${ip}api/sgi/campanas/crearcamp`, caso)
      .then((res) => {
        console.log(res);
        toastr.success(`${res.status}`, "ATENCION");
      })
      .catch((error) => {
        console.log(error);
        toastr.error(`${error}`, "ATENCION");
      });
  };

  const crearCampana = (array, idcamp) => {
    let fecha = moment().format("YYYY-MM-DD");

    if (array.length === 0) {
      toastr.warning("No hay casos para asignar", "Atencion");
    } else {
      for (let i = 0; i < array.length; i++) {
        const caso = {
          idcampana: idcamp,
          fechacampana: fecha,
          mes: array[i].MES,
          ano: array[i].ANO,
          sucursal: array[i].SUCURSAL,
          contrato: array[i].CONTRATO,
          apellido: array[i].APELLIDOS,
          edad: array[i].EDAD,
          nombre: array[i].NOMBRES,
          dni: array[i].NRO_DOC,
          telefono: array[i].TELEFONO,
          movil: array[i].MOVIL,
          calle: array[i].CALLE,
          nro_calle: array[i].NRO_CALLE,
          barrio: array[i].BARRIO,
          localidad: array[i].LOCALIDAD,
          cuota: array[i].IMPORTE,
          cuotasadeudadas: 1,
          montoadeudado: array[i].IMPORTE * 3,
          estadocaso: true,
        };
        console.log(caso);
        subirCamp(caso);
      }
    }
  };

  return (
    <div className="container border border-dark p-2 mt-4">
      <div className="mt-4 mb-4 border border-dark alert alert-primary text-dark text-center">
        <strong>
          <h4>
            <u>
              {" "}
              El total de la Cartera {campana} de {empresa} a asignar es
            </u>
            : {""}
            {CasaCentralMG.length +
              CasaCentralGG.length +
              // CasaCentralVF.length +
              perico.length +
              palpala.length +
              sanPedro.length}
          </h4>
        </strong>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between alert alert-primary border border-dark p-4">
          <h4>
            <strong>
              <u>
                Campaña {campana} - {empresa}: Casa Central Maria Galian{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {CasaCentralMG.length}
                </span>
              </u>
            </strong>
          </h4>

          {JSON.parse(empresa) === "W" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"At"}
                  emp={"Werchow"}
                  id={11}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"At2"}
                  emp={"Werchow"}
                  id={67}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Rec"}
                  emp={"Werchow"}
                  id={1}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={6}
                  fn={crearCampana}
                />
              ) : campana === '"Policia"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Poli"}
                  emp={"Werchow"}
                  id={50}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Blan"}
                  emp={"Werchow"}
                  id={16}
                  fn={crearCampana}
                />
              ) : campana === '"Auxiliar"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Aux"}
                  emp={"Werchow"}
                  id={22}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : JSON.parse(empresa) === "M" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"At"}
                  emp={"Mutual"}
                  id={28}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"At2"}
                  emp={"Mutual"}
                  id={70}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Rec"}
                  emp={"Mutual"}
                  id={33}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={38}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={CasaCentralMG}
                  camp={"Blan"}
                  emp={"Mutual"}
                  id={43}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <ListadoCampana listado={CasaCentralMG} />
      </div>

      <hr className="mt-4 mb-4 border border-dark" />

      <div className="mt-4">
        <div className="d-flex justify-content-between alert alert-primary border border-dark p-4">
          <h4>
            <strong>
              <u>
                Campaña {campana} - {empresa}: Casa Central Gisela Gimenez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {CasaCentralGG.length}
                </span>
              </u>
            </strong>
          </h4>

          {JSON.parse(empresa) === "W" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"At"}
                  emp={"Werchow"}
                  id={12}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"At2"}
                  emp={"Werchow"}
                  id={68}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Rec"}
                  emp={"Werchow"}
                  id={2}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={7}
                  fn={crearCampana}
                />
              ) : campana === '"Policia"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Poli"}
                  emp={"Werchow"}
                  id={51}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Blan"}
                  emp={"Werchow"}
                  id={17}
                  fn={crearCampana}
                />
              ) : campana === '"Auxiliar"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Aux"}
                  emp={"Werchow"}
                  id={23}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : JSON.parse(empresa) === "M" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"At"}
                  emp={"Mutual"}
                  id={29}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"At2"}
                  emp={"Mutual"}
                  id={71}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Rec"}
                  emp={"Mutual"}
                  id={34}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={39}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={CasaCentralGG}
                  camp={"Blan"}
                  emp={"Mutual"}
                  id={44}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <ListadoCampana listado={CasaCentralGG} />
      </div>

      {/* VISUALIZAR CAMP DE LA TERCERA RECUPERADORA */}

      {/* <hr className="mt-4 mb-4 border border-dark" /> */}

      {/* <div className="mt-4">
        <div className="d-flex justify-content-between alert alert-primary border border-dark p-4">
          <h4>
            <strong>
              <u>
                Campaña {campana} - {empresa}: Casa Central Valeria Fidao{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {CasaCentralVF.length}
                </span>
              </u>
            </strong>
          </h4>

          {JSON.parse(empresa) === "W" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"At"}
                  emp={"Werchow"}
                  id={58}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Rec"}
                  emp={"Werchow"}
                  id={57}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={59}
                  fn={crearCampana}
                />
              ) : campana === '"Policia"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Poli"}
                  emp={"Werchow"}
                  id={61}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Blan"}
                  emp={"Werchow"}
                  id={60}
                  fn={crearCampana}
                />
              ) : campana === '"Auxiliar"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Aux"}
                  emp={"Werchow"}
                  id={62}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : JSON.parse(empresa) === "M" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"At"}
                  emp={"Mutual"}
                  id={64}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Rec"}
                  emp={"Mutual"}
                  id={63}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={65}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={CasaCentralVF}
                  camp={"Blan"}
                  emp={"Mutual"}
                  id={66}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <ListadoCampana listado={CasaCentralVF} />
      </div> */}

      {/* ------------------------------------------------------------ */}

      <hr className="mt-4 mb-4 border border-dark" />

      <div className="mt-4">
        <div className="d-flex justify-content-between alert alert-primary border border-dark p-4">
          <h4>
            <strong>
              <u>
                Campaña {campana} - {empresa}: Perico - Vanesa Gorosito{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {perico.length}
                </span>
              </u>
            </strong>
          </h4>

          {JSON.parse(empresa) === "W" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={perico}
                  camp={"At"}
                  emp={"Werchow"}
                  id={14}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={perico}
                  camp={"At2"}
                  emp={"Werchow"}
                  id={67}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Rec"}
                  emp={"Werchow"}
                  id={4}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={perico}
                  camp={"At2"}
                  emp={"Werchow"}
                  id={67}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={9}
                  fn={crearCampana}
                />
              ) : campana === '"Policia"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Poli"}
                  emp={"Werchow"}
                  id={54}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Blan"}
                  emp={"Werchow"}
                  id={19}
                  fn={crearCampana}
                />
              ) : campana === '"Auxiliar"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Aux"}
                  emp={"Werchow"}
                  id={25}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : JSON.parse(empresa) === "M" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={perico}
                  camp={"At"}
                  emp={"Mutual"}
                  id={31}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={perico}
                  camp={"At2M"}
                  emp={"Mutual"}
                  id={70}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Rec"}
                  emp={"Mutual"}
                  id={36}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={41}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={perico}
                  camp={"Blan"}
                  emp={"Mutual"}
                  id={46}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <ListadoCampana listado={perico} />
      </div>

      <hr className="mt-4 mb-4 border border-dark" />

      <div className="mt-4">
        <div className="d-flex justify-content-between alert alert-primary border border-dark p-4">
          <h4>
            <strong>
              <u>
                Campaña {campana} - {empresa}: Palpala - Marisa Carrizo{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {palpala.length}
                </span>
              </u>
            </strong>
          </h4>

          {JSON.parse(empresa) === "W" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"At"}
                  emp={"Werchow"}
                  id={13}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"At2"}
                  emp={"Werchow"}
                  id={67}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Rec"}
                  emp={"Werchow"}
                  id={3}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={8}
                  fn={crearCampana}
                />
              ) : campana === '"Policia"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Poli"}
                  emp={"Werchow"}
                  id={53}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Blan"}
                  emp={"Werchow"}
                  id={18}
                  fn={crearCampana}
                />
              ) : campana === '"Auxiliar"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Aux"}
                  emp={"Werchow"}
                  id={35}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : JSON.parse(empresa) === "M" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"At"}
                  emp={"Mutual"}
                  id={30}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"At2"}
                  emp={"Mutual"}
                  id={70}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Rec"}
                  emp={"Mutual"}
                  id={35}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={40}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={palpala}
                  camp={"Blan"}
                  emp={"Mutual"}
                  id={45}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <ListadoCampana listado={palpala} />
      </div>

      <hr className="mt-4 mb-4 border border-dark" />

      <div className="mt-4">
        <div className="d-flex justify-content-between alert alert-primary border border-dark p-4">
          <h4>
            <strong>
              <u>
                Campaña {campana} - {empresa}: San Pedro - Silvia Juarez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {sanPedro.length}
                </span>
              </u>
            </strong>
          </h4>

          {JSON.parse(empresa) === "W" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"At"}
                  emp={"Werchow"}
                  id={15}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"At2"}
                  emp={"Werchow"}
                  id={67}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Rec"}
                  emp={"Werchow"}
                  id={5}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={10}
                  fn={crearCampana}
                />
              ) : campana === '"Policia"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Poli"}
                  emp={"Werchow"}
                  id={55}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Blan"}
                  emp={"Werchow"}
                  id={20}
                  fn={crearCampana}
                />
              ) : campana === '"Auxiliar"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Aux"}
                  emp={"Werchow"}
                  id={26}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : JSON.parse(empresa) === "M" ? (
            <>
              {campana === '"Atrasados"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"At"}
                  emp={"Mutual"}
                  id={32}
                  fn={crearCampana}
                />
              ) : campana === '"Atrasados2"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"At2"}
                  emp={"Mutual"}
                  id={70}
                  fn={crearCampana}
                />
              ) : campana === '"Recuperacion"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Rec"}
                  emp={"Mutual"}
                  id={37}
                  fn={crearCampana}
                />
              ) : campana === '"Reincidente"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Rein"}
                  emp={"Werchow"}
                  id={42}
                  fn={crearCampana}
                />
              ) : campana === '"Blanqueo"' ? (
                <BotonCamp
                  array={sanPedro}
                  camp={"Blan"}
                  emp={"Mutual"}
                  id={47}
                  fn={crearCampana}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <ListadoCampana listado={sanPedro} />
      </div>
    </div>
  );
};

export default AsignarCampana;
