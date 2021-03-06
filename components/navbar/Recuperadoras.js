import React from "react";
import { ip } from "../../config/config";

const Recuperadoras = ({ usuario }) => {
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

      {usuario === "mgalian" ? (
        <li className="nav-item dropdown ">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Mutual
          </a>

          <ul className="dropdown-menu">
            <li>
              <a href="/mutual/movimientos" className="dropdown-item text-dark">
                Movimientos del Mes
              </a>
            </li>
          </ul>
        </li>
      ) : null}

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
              <hr />
              <li>
                <a
                  href="/socios/conveniodeuda/conveniodeuda"
                  className="dropdown-item text-dark"
                >
                  Convenio de Reconocimiento de Deuda
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
              Legajo Virtual
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/socios/ficha/ficha"
                  className="dropdown-item text-dark"
                >
                  Buscar Ficha
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/socios/ficha/print"
                  className="dropdown-item text-dark"
                >
                  Prints
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/socios/legajovirtual/subirarchivo"
                  className="dropdown-item text-dark"
                >
                  Subir Archivos
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
          <li>
            <a
              href="/socios/reportes/estadopadron"
              className="dropdown-item text-dark"
            >
              Reportes Atrasados
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
              Solicitudes (Descargas)
            </a>
            <ul className="dropdown-menu">
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
    </ul>
  );
};

export default Recuperadoras;
