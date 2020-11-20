import React from "react";

const Adimn = () => {
  return (
    <ul className="navbar-nav">
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
                <a href="/cobranza/resumen" className="dropdown-item text-dark">
                  Resumen Efectividad de Cobranza
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/cobranza/administracion"
                  className="dropdown-item text-dark"
                >
                  Administracion
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
            <a href="/campanas/estadosocio" className="dropdown-item text-dark">
              Asignar Campañas
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
              Opciones
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/campanas/cerrar_campana"
                  className="dropdown-item text-dark"
                >
                  Cerrar Campañas Activas
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/campanas/resultado_campana"
                  className="dropdown-item text-dark"
                >
                  Resultados Campañas Activas
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
              Opciones
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/campanas/cerrar_campana"
                  className="dropdown-item text-dark"
                >
                  Cerrar Campañas Activas
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/campanas/resultado_campana"
                  className="dropdown-item text-dark"
                >
                  Resultados Campañas Activas
                </a>
              </li>
            </ul>
          </li>{" "}
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
          <a href="/noticias/nueva_noticia" className="dropdown-item text-dark">
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
                  href="/sepelio/servicios/liquidacion/liquidacion"
                  className="dropdown-item text-dark"
                >
                  Liquidar Servicio
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
                  href="/sepelio/servicios/administracion/administracion"
                  className="dropdown-item text-dark"
                >
                  Administracion
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
                <a href="/ventas/consulta" className="dropdown-item text-dark">
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
                  href="/socios/legajovirtual/subirarchivo"
                  className="dropdown-item text-dark"
                >
                  Subir Archivos
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/socios/ficha/ficha"
                  className="dropdown-item text-dark"
                >
                  Buscar Ficha
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

      <li className="nav-item dropdown">
        <a
          href=""
          className="nav-link dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Usuarios{" "}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a href="/auth/registro" className="dropdown-item text-dark">
            Registrar Usuario
          </a>

          <hr />

          <a href="/auth/editar" className="dropdown-item text-dark">
            Modificacion de Usuario
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Adimn;
