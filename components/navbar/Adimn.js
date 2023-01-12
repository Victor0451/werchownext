import React from "react";
import { ip } from "../../config/config";

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
                  href="/gestion/personal/nuevo"
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
          <hr />
          <li className="dropdown-submenu">
            <a
              href="#"
              role="button"
              data-toggle="dropdown"
              className="  dropdown-toggle dropdown-item text-dark"
            >
              Historial del Sistema
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/gestion/historial/historialacciones"
                  className="dropdown-item text-dark"
                >
                  Historial de acciones
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/historial/historialprestamos"
                  className="dropdown-item text-dark"
                >
                  Historial Aprobacion Prestamos
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
              Noticias
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/noticias/nueva_noticia"
                  className="dropdown-item text-dark"
                >
                  Ingresar Noticia
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
              Usuarios
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/auth/registro" className="dropdown-item text-dark">
                  Registrar Usuario
                </a>
              </li>
              <hr />
              <li>
                <a href="/auth/editar" className="dropdown-item text-dark">
                  Modificacion de Usuario
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
              Contratos
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/gestion/contratos/nuevo"
                  className="dropdown-item text-dark"
                >
                  Generar Contrato
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
                <a href="/gestion/sucursales/caja/nueva" className="dropdown-item text-dark">
                  Registrar Caja
                </a>
              </li>
              <hr />
              <li>
                <a href="/gestion/sucursales/caja/listado" className="dropdown-item text-dark">
                  Listado de Cajas
                </a>
              </li>
              <hr />
              <li>
                <a href="/gestion/sucursales/caja/acumulado" className="dropdown-item text-dark">
                  Generar Acumulado
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
                <a href="/gestion/werchow/orden/autorizacionordenes" className="dropdown-item text-dark">
                  Autorizar Orden
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
              Servicios
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/gestion/werchow/servicios/emision"
                  className="dropdown-item text-dark"
                >
                  Emision de Ordenes
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/werchow/servicios/listadoordenes"
                  className="dropdown-item text-dark"
                >
                  Listado de Ordenes Emitidas
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/werchow/servicios/control"
                  className="dropdown-item text-dark"
                >
                  Listado de Control
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/werchow/servicios/caja"
                  className="dropdown-item text-dark"
                >
                  Caja Otero
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/werchow/servicios/listadocajas"
                  className="dropdown-item text-dark"
                >
                  Listado de Cajas Generadas
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/werchow/servicios/gestionturnos"
                  className="dropdown-item text-dark"
                >
                  Gestion de Turnos Medicos
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="/gestion/werchow/servicios/seguimientoplan"
                  className="dropdown-item text-dark"
                >
                  Seguimiento Plan Ortodoncia
                </a>
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <a
              href="/gestion/mutual/cobranza/emisionrecibo"
              className="dropdown-item text-dark"
            >
              Recibo
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
                <a href="/cobranza/resumen" className="dropdown-item text-dark">
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
                <a href="/cobranza/general" className="dropdown-item text-dark">
                  Efectividad de Cobranza General
                </a>
              </li>
              <hr />

              <li>
                <a href="/cobranza/mora" className="dropdown-item text-dark">
                  Efectividad de Mora
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
            <a
              href="/gestion/mutual/movimientos"
              className="dropdown-item text-dark"
            >
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
          <hr />
          <li>
            <a
              href="/gestion/werchow/servicios/liquidacion"
              className="dropdown-item text-dark"
            >
              Liquidacion Medicos
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
            <a href="/prestamos/simulador" className="dropdown-item text-dark">
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
                  href={`${ip}api/archivos/sepelio/descargararchivo/conformidad_servicio_moroso.pdf`}
                  className="dropdown-item text-dark"
                >
                  Conformidad de Servicio Para Morosos
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
              <hr />
              <li>
                <a
                  href="/sepelio/autos/novedades"
                  className="dropdown-item text-dark"
                >
                  Registar Novedades
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
              <hr />
              <li>
                <a
                  href="/sepelio/ataudes/listadoprecios"
                  className="dropdown-item text-dark"
                >
                  Listado Precios
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
                  href={`${ip}api/archivos/ventas/descargararchivo/sol-con-amanecer.pdf`}
                  className="dropdown-item text-dark"
                >
                  Solicitud y condiciones Amanecer Oficio
                </a>
              </li>
              <hr />
              <li>
                <a
                  href={`${ip}api/archivos/ventas/descargararchivo/sol-con-genesis.pdf`}
                  className="dropdown-item text-dark"
                >
                  Solicitud y condiciones Genesis Oficio
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
    </ul>
  );
};

export default Adimn;
