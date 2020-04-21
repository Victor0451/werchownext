import React, { useState, useEffect } from "react";
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";
import jsCookies from "js-cookie";

const Navbar = () => {
  const [userData, guardarUsuario] = useState({});

  useEffect(() => {
    let usuario = jsCookies.get("usuario");

    if (usuario) {
      let userData = JSON.parse(usuario);
      guardarUsuario(userData);
    } else {
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href={"/home"} className="navbar-brand">
        Werchow{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {userData.id ? <AuthLinks userData={userData} /> : <GuestLinks />}
    </nav>
  );
};

export default Navbar;
