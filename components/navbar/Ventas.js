import React, { Component } from "react";
import { ip } from "../../config/config";

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
            Gestion
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Mesa de Entrada
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/gestion/mesaentrada/datos"
                    className="dropdown-item text-dark"
                  >
                    Registrar Datos
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
                Orden de Pago
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/gestion/werchow/orden/ordenpago" className="dropdown-item text-dark">
                    Generar Orden
                  </a>
                </li>
                <hr />
                <li>
                  <a href="/gestion/werchow/orden/estadoordenes" className="dropdown-item text-dark">
                    Listado ordenes
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
                    href="/gestion/sucursales/tareas/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Nueva Tarea
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/gestion/sucursales/tareas/calendario"
                    className="dropdown-item text-dark"
                  >
                    Calendario
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/gestion/sucursales/tareas/editar"
                    className="dropdown-item text-dark"
                  >
                    Editar Tarea
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </li >

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
                    Solicitudes de tarjeta
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/socios/clubwerchow/solicitudsorteo"
                    className="dropdown-item text-dark"
                  >
                    Solicitudes de sorteo
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/socios/clubwerchow/realizarsorteo"
                    className="dropdown-item text-dark"
                  >
                    Realizar Sorteo
                  </a>
                </li>
              </ul>
            </li>
            <hr />
            <li>
              <a
                href="/socios/carnet/emitir"
                className="dropdown-item text-dark"
              >
                Emitir Carnet
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
                Gestion Turnos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/socios/turnobajas/turno"
                    className="dropdown-item text-dark"
                  >
                    Recepcion Bajas
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/socios/turnobajas/listado"
                    className="dropdown-item text-dark"
                  >
                    Listado Turnos
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
                    Solicitud de Afiliacion
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
                Solicitudes (Descargas)
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/solicitud-novell.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Solicitud Novell
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/solicitud-genesis.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Solicitud Genesis
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/condiciones-genesis.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Condiciones Genesis
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/sol-cond-amanecer.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Solicitud y condiciones Amanecer Oficio
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/sol-cond-genesis.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Solicitud y condiciones Genesis Oficio
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/modificacion-datos.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Modificacion de Datos
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/autorizacion-debito.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Autorizacion de Retencion de Haberes
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/sub-10000.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Subsidio de 10000
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/ventas/descargararchivo/sub-30000.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Subsidio de 30000
                  </a>
                </li>
              </ul>
            </li>
            <hr />
            <li>
              <a
                href="/ventas/precioplan/precios"
                className="dropdown-item text-dark"
              >
                Planes Vigentes
              </a>
            </li>
          </ul>
        </li>
      </ul >
    );
  }
}
