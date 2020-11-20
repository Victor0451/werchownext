import React, { Component } from "react";

export default class Recuperadoras extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item dropdown ">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Campañas
          </a>

          <ul className="dropdown-menu">
            <li>
              <a href="/campanas/campanas" className="dropdown-item text-dark">
                Casos Asignados
              </a>
            </li>
            <hr />
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Datos En Campo
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/campanas/datos/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Cargar
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/campanas/datos/listado"
                    className="dropdown-item text-dark"
                  >
                    Listado De Datos
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
            Sub. Cont. Familiar
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/prestamos/nuevoprestamo"
                className="dropdown-item text-dark"
              >
                Nuevo Sub. Cont. Familiar
              </a>
            </li>

            <hr />

            <li>
              <a
                href="/prestamos/imprimircaratula"
                className="dropdown-item text-dark"
              >
                Listado Sub. Cont. Familiar
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
          </ul>
        </li>
      </ul>
    );
  }
}
