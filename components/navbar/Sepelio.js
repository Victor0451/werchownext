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
                Ataudes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/ataudes/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Nuevo Ataud
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/ataudes/actualizarstock"
                    className="dropdown-item text-dark"
                  >
                    Actualizar Stock
                  </a>
                </li>

                <hr />
                <li>
                  <a
                    href="/sepelio/ataudes/stock"
                    className="dropdown-item text-dark"
                  >
                    Stock Actual
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
                Caja
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/caja/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Habilitar Caja
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/caja/listado"
                    className="dropdown-item text-dark"
                  >
                    Listado de Cajas
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
                <hr />
                <li>
                  <a
                    href="/sepelio/servicios/listadohistorico"
                    className="dropdown-item text-dark"
                  >
                    Listado De Serv Historicos
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
                Parcelas
            </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/parcelas/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Nueva Parcela
                </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/parcelas/stock"
                    className="dropdown-item text-dark"
                  >
                    Stock Actual
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
                Tareas
            </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/tareas/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Nueva Tarea
                </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/tareas/calendario"
                    className="dropdown-item text-dark"
                  >
                    Tareas Programadas
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
