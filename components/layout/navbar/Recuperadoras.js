import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Recuperadoras extends Component {
    render() {
        return (
            <li className="nav-item dropdown ">
            <Link
              to="#"
              role="button"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle"
            >
              Campañas
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/campanacaso" className="dropdown-item text-dark">
                  Casos Asignados
                </Link>
              </li>

              <hr />

              <li className="dropdown-submenu">
                <Link
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  className="  dropdown-toggle dropdown-item text-dark"
                >
                  Tareas Autoprogramadas
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/campanas/volverallamar"
                      className="dropdown-item text-dark"
                    >
                      Padron "Volver a LLamar"
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/campanas/credixa"
                      className="dropdown-item text-dark"
                    >
                      Padron "Credixa"
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/campanas/compromisopago"
                      className="dropdown-item text-dark"
                    >
                      Padron "Compromiso de Pago"
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        )
    }
}
