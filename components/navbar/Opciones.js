import React from "react";
import Logout from './Logout'

const Opciones = ({
  userData,
  msj
}) => {
  return (
    <ul className="navbar-nav ">
      <li className="nav-item dropdown ">
        <a
          href="#"
          role="button"
          data-toggle="dropdown"
          className="nav-link dropdown-toggle"
        >

          {msj > 0 ? (
            <>
              <span className="badge badge-light text-uppercase mr-2 ">
                Bienvenido {userData.usuario}
              </span> <span className="badge badge-danger">{msj}</span>
            </>
          ) : (
            <span className="badge badge-light text-uppercase mr-2 ">
              Bienvenido {userData.usuario}
            </span>
          )}

        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="/mensajeria/nuevo"
              role="button"
              className="dropdown-item text-dark"
            >

              {msj > 0 ? (
                <>
                  Mail Interno <span className="badge badge-danger">{msj}</span>
                </>
              ) : (
                <>
                  Mail Interno
                </>
              )}


            </a>
          </li>
          <hr />
          <li>
            <Logout />
          </li>
        </ul>
      </li >


    </ul >
  )
}

export default Opciones
