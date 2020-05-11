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
          </li>

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
              <hr />
              <li>
                <a href="/cobranza/resumen" className="dropdown-item text-dark">
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
            <a href="/prestamos/listado" className="dropdown-item text-dark">
              Listado de Prestamos
            </a>
          </li>

          <hr />

          <li>
            <a href="/prestamos/informes" className="dropdown-item text-dark">
              Reportes
            </a>
          </li>

          <hr />

          <li>
            <a href="/prestamos/aprobar" className="dropdown-item text-dark">
              Aprobacion de Prestamos
            </a>
          </li>

          <hr />

          <li>
            <a href="/prestamos/imprimir" className="dropdown-item text-dark">
              Imprimir Caratula
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
              Caja
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/sepelio/nuevacaja"
                  className="dropdown-item text-dark"
                >
                  Ingresar Caja
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/sepelio/listadocajas"
                  className="dropdown-item text-dark"
                >
                  Listado Cajas Sepelio
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
                <a
                  href="/ventas/consultaventas"
                  className="dropdown-item text-dark"
                >
                  Ventas por periodo
                </a>
              </li>
              <hr />
              <li>
                {/* <a
                            href="/sepelio/listadocajas"
                            className="dropdown-item text-dark"
                          >
                            Listado Cajas Sepelio
                          </a> */}
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
          Usuarios{" "}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a href="/register" className="dropdown-item text-dark">
            Registrar Usuario
          </a>

          <hr />

          <a href="/edit" className="dropdown-item text-dark">
            Modificacion de Usuario
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Adimn;
