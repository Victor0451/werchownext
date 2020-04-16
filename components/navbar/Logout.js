import React from "react";
import jsCookies from "js-cookie";

const Logout = () => {
  const logout = () => {
    jsCookies.remove("token");
    jsCookies.remove("usuario");
  };
  return (
    <>
      <a className="nav-item text-white" onClick={logout} href="/">
        Cerrar Sesion
      </a>
    </>
  );
};

export default Logout;
