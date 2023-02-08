import React from "react";
import Adimn from "./Adimn";
import Recuperadoras from "./Recuperadoras";
import Gerencia from "./Gerencia";
import Ventas from "./Ventas";
import Sepelio from "./Sepelio";
import Opciones from "./Opciones";

const AuthLinks = ({ userData, msj, events }) => {
  return (
    <>
      <div
        className=" d-flex justify-content-start"
      >
        {userData.perfil === 1 ? (
          <Adimn />
        ) : userData.perfil === 2 ? (
          <Recuperadoras usuario={userData.usuario} perfil={userData.perfil} medicos={userData.medicos} />
        ) : userData.perfil === 3 ? (
          <Gerencia />
        ) : userData.perfil === 5 ? (
          <Ventas />
        ) : userData.perfil === 4 ? (
          <Sepelio />
        ) : null}
      </div>

      <Opciones
        userData={userData}
        msj={msj}
        events={events}
      />

    </>
  );
};

export default AuthLinks;
