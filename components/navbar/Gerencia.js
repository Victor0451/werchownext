import React, { Component } from "react";

export default class Gerencia extends Component {
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
            Informes
          </a>
          <ul className="dropdown-menu">
            {/* <li className="dropdown-submenu">
            <a
              href="#"
              role="button"
              data-toggle="dropdown"
              className="  dropdown-toggle dropdown-item text-dark"
            >
              Mora
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/mora/werchow" className="dropdown-item text-dark">
                  Mora Werchow
                </a>
              </li>
              <hr />
              <li>
                <a href="/mora/mutual" className="dropdown-item text-dark">
                  Mora Mutual
                </a>
              </li>
            </ul>
          </li> */}

            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Cobranza
              </a>
              <ul className="dropdown-menu">
                {/* <li>
                <a href="/cobranza/werchow" className="dropdown-item text-dark">
                  Cobranza Werchow
                </a>
              </li>
              <hr />
              <li>
                <a href="/cobranza/mutual" className="dropdown-item text-dark">
                  Cobranza Mutual
                </a>
              </li>
              <hr /> */}
                <li>
                  <a
                    href="/cobranza/resumen"
                    className="dropdown-item text-dark"
                  >
                    Resumen Efectividad de Cobranza
                  </a>
                </li>
              </ul>
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
            Prestamos
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/prestamos/nuevoprestamo"
                className="dropdown-item text-dark"
              >
                Nuevo Prestamo
              </a>
            </li>

            <hr />

            <li>
              <a
                href="/prestamos/informeprestamos"
                className="dropdown-item text-dark"
              >
                Reportes
              </a>
            </li>

            <hr />

            <li>
              <a
                href="/prestamos/aprobarprestamos"
                className="dropdown-item text-dark"
              >
                Aprobacion de Prestamos
              </a>
            </li>

            <hr />

            <li>
              <a
                href="/prestamos/imprimircaratula"
                className="dropdown-item text-dark"
              >
                Imprimir Caratula
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
