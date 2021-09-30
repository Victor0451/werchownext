import React from "react";

const OpcionesServicios = ({ socio }) => {
  return (
    <div className="mt-4 border border-dark p-4">
      <h3>
        <strong>
          <u>Socio</u>: {socio.APELLIDOS}, {socio.NOMBRES}
        </strong>
      </h3>

      <div className="mt-4 row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card">
            <img
              src="/img/emision/farmacia.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Farmacia</h5>
              <p className="card-text">Emitir Orden de Farmacia</p>
              <button className="btn btn-primary btn-sm rounded">Generar</button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpcionesServicios;
