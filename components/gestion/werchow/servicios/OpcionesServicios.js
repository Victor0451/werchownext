import React from "react";
import ModalConsulta from "./ModalConsulta";
import ModalEnfermeria from "./ModalEnfermeria";
import ModalFarmacia from "./ModalFarmacia";
import ModalPractica from "./ModalPracticas";

const OpcionesServicios = ({
  socio,
  sucursales,
  espec,
  traerMedicosPorSuc,
  medicos,
  farmaciaRef,
  modalidadRef,
  descuentoRef,
  especialidadRef,
  especialidadRefP,
  sucursalRef,
  sucursalRefP,
  medicoRef,
  medicoRefP,
  traerDetalleMedSelec,
  detalleMed,
  registrarOrdenUsos,
  practicas,
  agregarPractica,
  pracSocio,
  eliminarPracticaPrecargado,
  calcularTotalPracticas,
  registrarPracticaUso,
  farmacias,
  gestionDescuento,
  descFarma,
  registrarFarmaciaUso,
  enfer,
  sucursalRefE,
  traerEnfer,
  detEnf,
  medicoRefE,
  practEnfer,
  prestacionRefE,
  cantidadRefE,
  registrarEnfermeriaUso,
  cantidadRefP,
  priUso,
  nFisio,
  selector,
  isj,
  importeOrden,
}) => {
  return (
    <div className="mt-4 border border-dark p-4">
      <h3>
        <strong>
          <u>Socio</u>: {socio.APELLIDOS}, {socio.NOMBRES}
        </strong>
      </h3>

      <div className="mt-4 row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card border border-dark">
            <img
              src="/img/emision/farmacia.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Farmacia</h5>
              <p className="card-text">Emitir Orden de Farmacia</p>
              <button className="btn btn-primary btn-sm rounded"
                data-toggle="modal" data-target="#modalFarmacia"
              >Generar</button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card border border-dark">
            <img src="/img/emision/consulta.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Consultas</h5>
              <p className="card-text">Emitir Consulta Medica</p>
              <button className="btn btn-primary btn-sm rounded"
                data-toggle="modal" data-target="#modalConsulta"
              >Generar</button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card border border-dark">
            <img src="/img/emision/practicas.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Practicas</h5>
              <p className="card-text">Emitir Orden de Practicas</p>
              <button className="btn btn-primary btn-sm rounded"
                data-toggle="modal" data-target="#modalPractica"
              >Generar</button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card border border-dark">
            <img src="/img/emision/enfermeria.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Enfermeria</h5>
              <p className="card-text">Emitir Orden de Enfermeria</p>
              <button className="btn btn-primary btn-sm rounded"
                data-toggle="modal" data-target="#modalEnfermeria"
              >Generar</button>
            </div>
          </div>
        </div>
        {/*
        <div className="col mb-4 ">
          <div className="card border border-dark">
            <img src="/img/emision/reintegro.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Reintegros</h5>
              <p className="card-text">Emitir Reintegro</p>
              <button className="btn btn-primary btn-sm rounded"
                data-toggle="modal" data-target="#modalFarmacia"
              >Generar</button>
            </div>
          </div>
        </div> 
        */}
      </div>


      {/* MODALES */}

      <ModalFarmacia
        socio={socio}
        farmacias={farmacias}
        farmaciaRef={farmaciaRef}
        modalidadRef={modalidadRef}
        descuentoRef={descuentoRef}
        gestionDescuento={gestionDescuento}
        descFarma={descFarma}
        registrarFarmaciaUso={registrarFarmaciaUso}
        priUso={priUso}
      />

      <ModalConsulta
        socio={socio}
        sucursales={sucursales}
        espec={espec}
        medicos={medicos}
        traerMedicosPorSuc={traerMedicosPorSuc}
        especialidadRef={especialidadRef}
        sucursalRef={sucursalRef}
        medicoRef={medicoRef}
        traerDetalleMedSelec={traerDetalleMedSelec}
        detalleMed={detalleMed}
        registrarOrdenUsos={registrarOrdenUsos}
        priUso={priUso}
        selector={selector}
        isj={isj}
        importeOrden={importeOrden}
      />

      <ModalPractica
        socio={socio}
        sucursales={sucursales}
        espec={espec}
        medicos={medicos}
        especialidadRefP={especialidadRefP}
        sucursalRefP={sucursalRefP}
        medicoRefP={medicoRefP}
        traerMedicosPorSuc={traerMedicosPorSuc}
        traerDetalleMedSelec={traerDetalleMedSelec}
        detalleMed={detalleMed}
        practicas={practicas}
        agregarPractica={agregarPractica}
        pracSocio={pracSocio}
        eliminarPracticaPrecargado={eliminarPracticaPrecargado}
        calcularTotalPracticas={calcularTotalPracticas}
        registrarPracticaUso={registrarPracticaUso}
        cantidadRefP={cantidadRefP}
        priUso={priUso}
        nFisio={nFisio}
      />


      <ModalEnfermeria
        socio={socio}
        sucursales={sucursales}
        enfer={enfer}
        sucursalRefE={sucursalRefE}
        traerEnfer={traerEnfer}
        detEnf={detEnf}
        traerDetalleMedSelec={traerDetalleMedSelec}
        medicoRefE={medicoRefE}
        practEnfer={practEnfer}
        prestacionRefE={prestacionRefE}
        cantidadRefE={cantidadRefE}
        registrarEnfermeriaUso={registrarEnfermeriaUso}
        priUso={priUso}
      />

      {/* --------------------------- */}

    </div>
  );
};

export default OpcionesServicios;
