import React from "react";

const EstadoCartera = ({
  buscarAT,
  buscarATM,
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
    <div className="container">
      <h1 className="mt-4 mb-4 ">
        <u>Analisis De Cartera Segun Estado</u>
      </h1>
      <nav>
        <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
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
          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera Atrasada - WERCHOW</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
                onClick={buscarAT}
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera Atrasada - MUTUAL</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
                onClick={buscarATM}
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
          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera 1001 - WERCHOW</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
                onClick={buscarRec}
              >
                Buscar
              </button>
            </div>
            {array.length > 0 ? (
              <span className="badge badge-pill badge-dark text-white">
                {array.length}
              </span>
            ) : null}
          </div>

          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera 1001 - MUTUAL</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
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
          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera Reincidente - WERCHOW</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
                onClick={buscarRein}
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera Reincidente - MUTUAL</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
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
          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera a Blanquear - WERCHOW</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
                onClick={buscarBlan}
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera a Blanquear - MUTUAL</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
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
          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera Policia - WERCHOW</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
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
          <div className="jumbotron row mt-4">
            <div className="col-md-6">
              <h2>Buscar Cartera Auxiliar - WERCHOW</h2>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-block"
                onClick={buscarAux}
              >
                Buscar
              </button>
            </div>
          </div>

          {/* <div className="jumbotron row mt-4">
                        <div className="col-md-6">
                            <h2>Buscar Cartera Auxiliar - MUTUAL</h2>
                        </div>
                        <div className="col-md-6">
                            <button
                                className="btn btn-secondary btn-block"
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
