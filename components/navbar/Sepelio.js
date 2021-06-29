import React, { Component } from "react";
import { ip } from "../../config/config";

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
                Archivos (Descargas)
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href={`${ip}api/archivos/sepelio/descargararchivo/prot-inst-domicilio.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Protocolo Inst. en domicilio
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/sepelio/descargararchivo/ISJ-SOLI.pdf`}
                    className="dropdown-item text-dark"
                  >
                    ISJ - Solicitud de Pago
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href={`${ip}api/archivos/sepelio/descargararchivo/ISJ-DDJJ.pdf`}
                    className="dropdown-item text-dark"
                  >
                    ISJ - Declaracion Jurada
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
                Autos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/autos/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Ingresar Auto
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/autos/listado"
                    className="dropdown-item text-dark"
                  >
                    Listado Autos
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
                    href="/sepelio/servicios/gastoluto/listado"
                    className="dropdown-item text-dark"
                  >
                    Gasto de luto
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
                <hr />
                <li>
                  <a
                    href="/sepelio/servicios/venta/venta"
                    className="dropdown-item text-dark"
                  >
                    Cargar Servicios Vendidos
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
                Proveedores
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/proveedores/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Ingresar Proveedor
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/proveedores/listado"
                    className="dropdown-item text-dark"
                  >
                    Listado Proveedores
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
                    href="/sepelio/tareas/editar"
                    className="dropdown-item text-dark"
                  >
                    Editar Tarea
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

        <li className="nav-item dropdown ">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Liquidacion
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/sepelio/planificacion/liquidacion"
                className="dropdown-item text-dark"
              >
                Liquidacion Personal Sepelio
              </a>
            </li>
            <hr />
            <li>
              <a
                href="/sepelio/servicios/liquidacion/liquidacion"
                className="dropdown-item text-dark"
              >
                Liquidacion Tareas en Servicios
              </a>
            </li>
            <hr />
            <li>
              <a
                href="/sepelio/servicios/venta/liquidacion"
                className="dropdown-item text-dark"
              >
                Liquidacion Ventas de Servicios
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
