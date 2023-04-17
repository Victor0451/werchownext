import React from "react";

const RedirectToLogin = () => {
  return (
    <div className="container border border-dark p-4 d-flex justify-content-center list mt-4 ">
      <div className="  mt-4 mb-4  ">
        <h1 className="text-center">
          <strong>

            No estas logueado, debes iniciar session para acceder al sistema

          </strong>
        </h1>

        <div className="d-flex justify-content-center">
          <img
            src="/img/logerr.jpg"
            className="logerr mt-4 mb-4 border border-dark 
        "
          />
        </div>

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
