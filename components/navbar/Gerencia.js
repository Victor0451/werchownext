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
            Campañas
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/campanas/resultado_campana"
                className="dropdown-item text-dark"
              >
                Resultado Campañas Activas
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
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Legajo Virtual Sub. Cont. Familiar
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/prestamos/imprimircaratula"
                    className="dropdown-item text-dark"
                  >
                    Subir Archivos
                  </a>
                </li>
                {/* <hr />
              <li>
                <a
                  href="/prestamos/legajovirtual/legajo"
                  className="dropdown-item text-dark"
                >
                  Buscar Ficha
                </a>
              </li> */}
              </ul>
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
                href="/prestamos/imprimircaratula"
                className="dropdown-item text-dark"
              >
                Listado Sub. Cont. Familiar Del Mes
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
            href=""
            className="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Noticias{" "}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a
              href="/noticias/nueva_noticia"
              className="dropdown-item text-dark"
            >
              Ingresar Noticia
            </a>
          </div>
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
                Venta de Novells
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/ventas/ventaplan/novell"
                    className="dropdown-item text-dark"
                  >
                    Venta
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/ventas/ventaplan/listadonovell"
                    className="dropdown-item text-dark"
                  >
                    Listado
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
