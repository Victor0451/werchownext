import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Gerencia extends Component {
  render() {
    return (
      <ul className="navbar-nav ">
        <li className="nav-item dropdown">
          <Link
            to=""
            className="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Mora{" "}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/mora/werchow" className="dropdown-item text-dark">
              Werchow
            </Link>

            <hr />

            <Link to="/mora/mutual" className="dropdown-item text-dark">
              Mutual
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            to=""
            className="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Efectividad de Cobranza{" "}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/cobranza/werchow" className="dropdown-item text-dark">
              Werchow
            </Link>

            <hr />

            <Link to="/cobranza/mutual" className="dropdown-item text-dark">
              Mutual
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            to=""
            className="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Noticias{" "}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/noticia" className="dropdown-item text-dark">
              Ingresar Noticia
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown ">
          <Link
            to="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Ventas
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Consultas
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/ventas/consultaventas"
                    className="dropdown-item text-dark"
                  >
                    Ventas por periodo
                  </Link>
                </li>
                <hr />
                <li>
                  {/* <Link
                        to="/sepelio/listadocajas"
                        className="dropdown-item text-dark"
                      >
                        Listado Cajas Sepelio
                      </Link> */}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
