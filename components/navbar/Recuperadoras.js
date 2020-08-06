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

            {/* <hr />

            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Tareas Autoprogramadas
                </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/campanas/volverallamar"
                    className="dropdown-item text-dark"
                  >
                    Padron "Volver a LLamar"
                    </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/campanas/credixa"
                    className="dropdown-item text-dark"
                  >
                    Padron "Credixa"
                    </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/campanas/compromisopago"
                    className="dropdown-item text-dark"
                  >
                    Padron "Compromiso de Pago"
                    </a>
                </li>
              </ul>
            </li> */}
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
                href="/prestamos/imprimircaratula"
                className="dropdown-item text-dark"
              >
                Listado Prestamos Del Mes
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
