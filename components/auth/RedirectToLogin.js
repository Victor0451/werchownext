import React from "react";

const RedirectToLogin = () => {
  return (
    <div className="container ">
      <div className=" border border-dark p-4 mt-4 mb-4 ">
        <h1 className="text-center">
          <strong>
            <u>
              No estas logueado, debes iniciar session para acceder al sistema
            </u>
          </strong>
        </h1>

        <img src="/img/logerr.jpeg" className="logerr p-4"></img>

        <div className="mt-4 mb-4 d-flex justify-content-center">
          <a href="/" className="btn btn-primary">
            Iniciar Session
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedirectToLogin;
