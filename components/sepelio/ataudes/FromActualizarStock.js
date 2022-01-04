import React from "react";
import Spinner from "../../layout/Spinner";

const FromActualizarStock = ({
  ataud,
  nuevoStockRef,
  observacionRef,
  idataudRef,
  sf,
  stockFinal,
  nRemitoRef,
  fechaRec,
}) => {
  if (!ataud) return <Spinner />;

  return (
    <div className="container border border-dark list p-4">
      <div className="row">
        <input
          type="hidden"
          className="form-control"
          ref={idataudRef}
          value={ataud.idataud}
          readOnly
        />
        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Nombre: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={ataud.nombre}
            readOnly
          />
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Tipo: </u>
            </strong>
          </label>
          <select className="custom-select" name="tipo" value={ataud.tipo}>
            <option selected>Elige una Opcion</option>
            <option value="BOVEDA">Boveda</option>
            <option value="BOVEDILLA">Bovedilla</option>
            <option value="BORLA">Borla</option>
            <option value="ANGELITO">Angelito</option>
            <option value="ARITOS">Aritos</option>
            <option value="EXTRAORDINARIO">Extraordinario</option>
            <option value="EXTRACAVA">Extracava</option>
            <option value="URNA">Urna</option>
            <option value="ECOLOGICOS">Ecologicos</option>
            <option value="RECUPERADOS">Recuperados</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Medidas: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="medidas"
            value={ataud.medidas}
            readOnly
          />
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Uso: </u>
            </strong>
          </label>
          <select className="custom-select" name="uso" value={ataud.uso}>
            <option selected>Elige una Opcion</option>
            <option value="TIERRA">Tierra</option>
            <option value="NICHO">Nicho</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Fabricante: </u>
            </strong>
          </label>
          <select
            className="custom-select"
            name="fabricante"
            value={ataud.fabricante}
          >
            <option selected>Elige una Opcion</option>
            <option value="ANSARDI">Ansardi</option>
            <option value="HECCAR">Heccar</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Fecha de Alta: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            value={ataud.fecha_alta}
            readOnly
          />
        </div>

        <div className="form-group col-md-2">
          <label>
            <strong>
              {" "}
              <u> Stock Actual: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="stock"
            value={ataud.stock}
          />
        </div>

        <div className="form-group col-md-2">
          <label>
            <strong>
              {" "}
              <u> Stock Ingresante: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="stock"
            ref={nuevoStockRef}
            onChange={() =>
              stockFinal(ataud.stock, nuevoStockRef.current.value)
            }
          />
        </div>

        <div className="form-group col-md-2">
          <label>
            <strong>
              {" "}
              <u> Stock Final: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="stock"
            defaultValue={sf}
          />
        </div>

        <div className="form-group col-md-2">
          <label>
            <strong>
              {" "}
              <u> Remito N°: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="stock"
            ref={nRemitoRef}
          />
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Fecha de Recepcion: </u>
            </strong>
          </label>
          <input
            type="date"
            className="form-control"
            name="stock"
            ref={fechaRec}
          />
        </div>

        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Operador Anterior: </u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={ataud.operador}
            readOnly
          />
        </div>

        <div className="mt-4 form-group col-md-8">
          <div className="alert alert-info p-2 text-center text-uppercase border border-dark">
            ¡¡¡¡Digitar solo el numero de stock ingresante y el stock final se
            calculara automaticamente.!!!!
          </div>
        </div>

        <div className="form-group col-md-12">
          <label>
            <strong>
              {" "}
              <u> Observaciones: </u>
            </strong>
          </label>
          <textarea
            rows="3"
            className="form-control"
            name="observaciones"
            defaultValue={ataud.observaciones}
            ref={observacionRef}
          />
        </div>
      </div>
    </div>
  );
};

export default FromActualizarStock;
