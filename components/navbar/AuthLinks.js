import React from "react";
import Adimn from "./Adimn";
import Recuperadoras from "./Recuperadoras";
import Gerencia from "./Gerencia";
import Logout from "./Logout";
import Ventas from "./Ventas";
import Sepelio from "./Sepelio";

const AuthLinks = ({ userData }) => {
  return (
    <>
      <div
        className="collapse navbar-collapse d-flex justify-content-start"
        id="navbarColor02"
      >
        {userData.perfil === 1 ? (
          <Adimn />
        ) : userData.perfil === 2 ? (
          <Recuperadoras />
        ) : userData.perfil === 3 ? (
          <Gerencia />
        ) : userData.perfil === 5 ? (
          <Ventas />
        ) : userData.perfil === 4 ? (
          <Sepelio />
        ) : null}
      </div>
      <span className="badge badge-light text-uppercase mr-2 ">
        Bienvenido {userData.usuario}
      </span>
      <Logout />
    </>
  );
};

export default AuthLinks;
