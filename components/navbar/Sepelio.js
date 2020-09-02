import React, { Component } from "react";

export default class Sepelio extends Component {
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
            Socios
          </a>
          <ul className="dropdown-menu">
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
            Sepelio
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/servicios/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Ingresar Servicio
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/servicios/listado"
                    className="dropdown-item text-dark"
                  >
                    Listado De Servicios
                  </a>
                </li>
                {/* <hr />
                <li>
                  <a
                    href="/sepelio/servicios/gastos"
                    className="dropdown-item text-dark"
                  >
                    Ingresar Gastos
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
                Planificacion
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/planificacion/guardias"
                    className="dropdown-item text-dark"
                  >
                    Planificar Guardias
                  </a>
                </li> */}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
