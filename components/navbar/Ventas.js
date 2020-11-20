import React, { Component } from "react";

export default class Ventas extends Component {
  render() {
    return (
      <ul className="navbar-nav ">
        <li className="nav-item dropdown ">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Calendario
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/calendario/calendario"
                className="dropdown-item text-dark"
              >
                Dias Festivos
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown ">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Socios
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Club Werchow
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/socios/clubwerchow/solicitudes"
                    className="dropdown-item text-dark"
                  >
                    Solicitudes
                  </a>
                </li>
              </ul>
            </li>
            <hr />

            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Notificaciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/socios/rehabilitacion/rehabilitacion"
                    className="dropdown-item text-dark"
                  >
                    Rehabilitacion
                  </a>
                </li>
              </ul>
            </li>
            <hr />
            <li>
              <a href="/socios/ficha/ficha" className="dropdown-item text-dark">
                Buscar Ficha
              </a>
            </li>

            <hr />
            <li>
              <a
                href="/socios/reportes/estadopadron"
                className="dropdown-item text-dark"
              >
                Reportes
              </a>
            </li>
            <hr />
            <li>
              <a
                href="/socios/cumpleanos/cumpleanos"
                className="dropdown-item text-dark"
              >
                Cumpleañeros
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown ">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Ventas
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Consultas
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/ventas/consulta"
                    className="dropdown-item text-dark"
                  >
                    Ventas por periodo
                  </a>
                </li>
              </ul>
            </li>
            <hr />
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Solicitudes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/ventas/solicitudes/ingresogenesis"
                    className="dropdown-item text-dark"
                  >
                    Ingreso Genesis
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/ventas/solicitudes/condicionesgenesis"
                    className="dropdown-item text-dark"
                  >
                    Condiciones Genesis
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/ventas/solicitudes/prestadores"
                    className="dropdown-item text-dark"
                  >
                    Prestadores
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/ventas/solicitudes/prestadoresdorso"
                    className="dropdown-item text-dark"
                  >
                    Prestadores Dorso
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
