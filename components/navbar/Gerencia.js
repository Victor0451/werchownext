import React, { Component } from "react";
import { ip } from "../../config/config";

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
            Administracion
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Personal
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/gestion/personal/legajovirtual"
                    className="dropdown-item text-dark"
                  >
                    Agregar Personal
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/gestion/personal/legajovirtual"
                    className="dropdown-item text-dark"
                  >
                    Legajo Virtual
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
                Campañas
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/campanas/estadosocio"
                    className="dropdown-item text-dark"
                  >
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
          </ul>
        </li>
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
                <hr />
                <li>
                  <a
                    href="/cobranza/sucursales"
                    className="dropdown-item text-dark"
                  >
                    Efectividad de Cobranza Por Sucursales
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/cobranza/general"
                    className="dropdown-item text-dark"
                  >
                    Efectividad de Cobranza General
                  </a>
                </li>
                <hr />

                <li>
                  <a href="/cobranza/mora" className="dropdown-item text-dark">
                    Efectividad de Mora
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
                Sepelio
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/sepelio/informes/balance"
                    className="dropdown-item text-dark"
                  >
                    Balance Mensual
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

            <hr />

            <li>
              <a href="/mutual/movimientos" className="dropdown-item text-dark">
                Mutual: Movimientos del Mes
              </a>
            </li>
            <hr />

            <li>
              <a href="/mapas/mapaasesor" className="dropdown-item text-dark">
                Asesores: Mapeo de ventas anual
              </a>
            </li>

            <hr />

            <li>
              <a href="/mapas/maparec" className="dropdown-item text-dark">
                Recuperadores: Mapeo de liquidaciones por periodo
              </a>
            </li>
            <hr />

            <li>
              <a href="/campanas/mapeo" className="dropdown-item text-dark">
                Campañas: Acciones registradas en campañas del mes
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
            Liquidacion
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/liquidacion/orgamerica"
                className="dropdown-item text-dark"
              >
                Org. America
              </a>
            </li>
            <hr />
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
                href="/prestamos/simulador"
                className="dropdown-item text-dark"
              >
                Simular Sub. Cont. Familiar
              </a>
            </li>
            <hr />
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
                href="/prestamos/aprobarprestamos"
                className="dropdown-item text-dark"
              >
                Aprobar Sub. Cont. Familiar
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
                Archivos (Descargas)
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href={`${ip}api/archivos/sepelio/descargararchivo/inst-convenios-fadedsfya.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Listado de Convenios FADEDSFYA
                  </a>
                </li>
                <hr />
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
                    href={`${ip}api/archivos/sepelio/descargararchivo/aut-policia-servdom.pdf`}
                    className="dropdown-item text-dark"
                  >
                    Modelo de autorizacion policial para serv. en domicilio
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
                <hr />
                <li>
                  <a
                    href="/sepelio/ataudes/ventasinservicio"
                    className="dropdown-item text-dark"
                  >
                    Venta De Ataud Sin Servicio
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/sepelio/ataudes/listadoventassinservicio"
                    className="dropdown-item text-dark"
                  >
                    Listado Se Ataudes Vendidos
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
                Parcelas
              </a>
              <ul className="dropdown-menu">
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
            <li>
              <a href="/socios/ficha/ficha" className="dropdown-item text-dark">
                Buscar Ficha
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
                Asesores
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/ventas/asesores/legajovirtual"
                    className="dropdown-item text-dark"
                  >
                    Legajo Virtual
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
            <li className="dropdown-submenu">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Obsequios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/ventas/obsequios/nuevo"
                    className="dropdown-item text-dark"
                  >
                    Nuevo Producto
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/ventas/obsequios/actualizar"
                    className="dropdown-item text-dark"
                  >
                    Actualizar Stock
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href="/ventas/obsequios/stock"
                    className="dropdown-item text-dark"
                  >
                    Stock
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
  }
}
