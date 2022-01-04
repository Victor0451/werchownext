import React from "react";

const EstadoCartera = ({
  buscarAT,
  buscarATM,
  buscarAT2,
  buscarAT2M,
  buscarRec,
  buscarRecM,
  buscarRein,
  buscarReinM,
  buscarBlan,
  buscarBlanM,
  buscarAux,
  buscarPoli,
  array,
}) => {
  return (
    <div className="container  mt-4 list border border-dark p-4">
      <h2 className="mt-4 mb-4 ">
        <strong>
          {" "}
          <u>Analisis De Cartera Segun Estado</u>{" "}
        </strong>
      </h2>
      <nav>
        <div className=" nav nav-tabs mt-4" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Atrasados {""}
          </a>
          <a
            className="nav-item nav-link "
            id="nav-at2-tab"
            data-toggle="tab"
            href="#nav-at2"
            role="tab"
            aria-controls="nav-at2"
            aria-selected="false"
          >
            Atrasados2 {""}
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Recuperaciones {""}
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Reincidentes {""}
            <span className="badge badge-pill badge-dark text-white"></span>
          </a>

          <a
            className="nav-item nav-link"
            id="nav-blanqueo-tab"
            data-toggle="tab"
            href="#nav-blanqueo"
            role="tab"
            aria-controls="nav-blanqueo"
            aria-selected="false"
          >
            Blanqueo {""}
            <span className="badge badge-pill badge-dark text-white"></span>
          </a>

          <a
            className="nav-item nav-link"
            id="nav-poli-tab"
            data-toggle="tab"
            href="#nav-poli"
            role="tab"
            aria-controls="nav-poli"
            aria-selected="false"
          >
            Policia {""}
            <span className="badge badge-pill badge-dark text-white"></span>
          </a>

          <a
            className="nav-item nav-link"
            id="nav-aux-tab"
            data-toggle="tab"
            href="#nav-aux"
            role="tab"
            aria-controls="nav-aux"
            aria-selected="false"
          >
            Auxiliar {""}
            <span className="badge badge-pill badge-dark text-white"></span>
          </a>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {/* ATRASADOS */}
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Atrasada - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={buscarAT}>
                Buscar
              </button>
            </div>
          </div>

          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Atrasada - MUTUAL</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={buscarATM}>
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* ATRASADOS2 */}
        <div
          className="tab-pane fade  "
          id="nav-at2"
          role="tabpanel"
          aria-labelledby="nav-at2-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera At2 - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={buscarAT2}>
                Buscar
              </button>
            </div>
          </div>

          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera At2 - MUTUAL</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarAT2M}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* RECUPERACIONES */}
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera 1001 - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={buscarRec}>
                Buscar
              </button>
            </div>
            {array.length > 0 ? (
              <span className="badge badge-pill badge-dark text-white">
                {array.length}
              </span>
            ) : null}
          </div>

          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera 1001 - MUTUAL</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarRecM}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Reincidente - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarRein}
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Reincidente - Mutual</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarReinM}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-blanqueo"
          role="tabpanel"
          aria-labelledby="nav-blanqueo-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Blanqueo - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarBlan}
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Blanqueo - MUTUAL</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarBlanM}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-poli"
          role="tabpanel"
          aria-labelledby="nav-poli-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Policia - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                onClick={buscarPoli}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-aux"
          role="tabpanel"
          aria-labelledby="nav-aux-tab"
        >
          <div className="border border-dark p-4 row mt-4">
            <div className="col-md-6">
              <h4>
                <strong>
                  <u>Buscar Cartera Auxiliar - WERCHOW</u>
                </strong>
              </h4>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={buscarAux}>
                Buscar
              </button>
            </div>
          </div>

          {/* <div className="border border-dark p-4 row mt-4">
                        <div className="col-md-6">
                            <h2>Buscar Cartera Auxiliar - MUTUAL</h2>
                        </div>
                        <div className="col-md-6">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={buscarATM}
                            >
                                Buscar
                           </button>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default EstadoCartera;
