import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import GuestLinks from "./GuestLinks";
import Adimn from "./Adimn";

const Navbar = () => {
  const { usuario } = useContext(UserContext);

  let userData = JSON.parse(usuario);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href={"/"} className="navbar-brand">
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

      {userData && userData.perfil === 1 ? (
        <Adimn />
      ) : !userData ? (
        <GuestLinks />
      ) : null}
    </nav>
  );
};

export default Navbar;
