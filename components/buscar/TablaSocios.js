import React from "react";

const TablaSocios = ({ listSocio }) => {
  if (!listSocio) return null;

  const campañas = (idcampana) => {
    return (
      <div className="">
        {idcampana === 1
          ? ` RECUPERACION WERCHOW de MARIA GALIAN`
          : idcampana === 2
          ? ` RECUPERACION WERCHOW de GISELA GIMENEZ`
          : idcampana === 3
          ? ` RECUPERACION WERCHOW de MARISA CARRIZO`
          : idcampana === 4
          ? ` RECUPERACION WERCHOW de VANESA GOROSITO`
          : idcampana === 5
          ? ` RECUPERACION WERCHOW de SILVIA JUAREZ`
          : idcampana === 6
          ? ` REINCIDENTES WERCHOW de MARIA GALIAN`
          : idcampana === 7
          ? ` REINCIDENTES WERCHOW de GISELA GIMENEZ`
          : idcampana === 8
          ? ` REINCIDENTES WERCHOW de MARISA CARRIZO`
          : idcampana === 9
          ? ` REINCIDENTES WERCHOW de VANESA GOROSITO`
          : idcampana === 10
          ? ` REINCIDENTES WERCHOW de SILVIA JUAREZ`
          : idcampana === 11
          ? ` ATRASADOS WERCHOW de MARIA GALIAN`
          : idcampana === 12
          ? ` ATRASADOS WERCHOW de GISELA GIMENEZ`
          : idcampana === 13
          ? ` ATRASADOS WERCHOW de MARISA CARRIZO`
          : idcampana === 14
          ? ` ATRASADOS WERCHOW de VANESA GOROSITO`
          : idcampana === 15
          ? ` ATRASADOS WERCHOW de SILVIA JUAREZ`
          : idcampana === 16
          ? ` BLANQUEO WERCHOW de MARIA GALIAN`
          : idcampana === 17
          ? ` BLANQUEO WERCHOW de GISELA GIMENEZ`
          : idcampana === 18
          ? ` BLANQUEO WERCHOW de MARISA CARRIZO`
          : idcampana === 19
          ? ` BLANQUEO WERCHOW de VANESA GOROSITO`
          : idcampana === 20
          ? ` BLANQUEO WERCHOW de SILVIA JUAREZ`
          : idcampana === 21
          ? ` RECUPERACION WERCHOW de ALEJANDRA TEJERINA`
          : idcampana === 22
          ? ` AUXILIAR WERCHOW de MARIA GALIAN`
          : idcampana === 23
          ? ` AUXILIAR de GISELA GIMENEZ`
          : idcampana === 24
          ? ` AUXILIAR de MARISA CARRIZO`
          : idcampana === 25
          ? ` AUXILIAR de VANESA GOROSITO`
          : idcampana === 26
          ? ` AUXILIAR de SILVIA JUAREZ`
          : idcampana === 28
          ? ` ATRASADOS MUTUAL de MARIA GALIAN`
          : idcampana === 29
          ? ` ATRASADOS MUTUAL de GISELA GIMENEZ`
          : idcampana === 30
          ? ` ATRASADOS MUTUAL de MARISA CARRIZO`
          : idcampana === 31
          ? ` ATRASADOS MUTUAL de VANESA GOROSITO`
          : idcampana === 32
          ? ` ATRASADOS MUTUAL de SILVIA JUAREZ`
          : idcampana === 33
          ? ` RECUPERACION MUTUAL de MARIA GALIAN`
          : idcampana === 34
          ? ` RECUPERACION MUTUAL de GISELA GIMENEZ`
          : idcampana === 35
          ? ` RECUPERACION MUTUAL de MARISA CARRIZO`
          : idcampana === 36
          ? ` RECUPERACION MUTUAL de VANESA GOROSITO`
          : idcampana === 37
          ? ` RECUPERACION MUTUAL de SILVIA JUAREZ`
          : idcampana === 38
          ? ` REINCIDENTES MUTUAL de MARIA GALIAN`
          : idcampana === 39
          ? ` REINCIDENTES MUTUAL de GISELA GIMENEZ`
          : idcampana === 40
          ? ` REINCIDENTES MUTUAL de MARISA CARRIZO`
          : idcampana === 41
          ? ` REINCIDENTES MUTUAL de VANESA GOROSITO`
          : idcampana === 42
          ? ` REINCIDENTES MUTUAL de SILVIA JUAREZ`
          : idcampana === 43
          ? ` BLANQUEOS MUTUAL de MARIA GALIAN`
          : idcampana === 44
          ? ` BLANQUEOS MUTUAL de GISELA GIMENEZ`
          : idcampana === 45
          ? ` BLANQUEOS MUTUAL de MARISA CARRIZO`
          : idcampana === 46
          ? ` BLANQUEOS MUTUAL de VANESA GOROSITO`
          : idcampana === 47
          ? ` BLANQUEOS MUTUAL de SILVIA JUAREZ`
          : idcampana === 48
          ? ` ATRASADOS WERCHOW de ALEJANDRA TEJERINA`
          : idcampana === 49
          ? ` ATRASADOS MUTUAL de ALEJANDRA TEJERINA`
          : idcampana === 50
          ? ` POLICIAS WERCHOW de MARIA GALIAN`
          : idcampana === 51
          ? ` POLICIAS WERCHOW de GISELA GIMENEZ`
          : idcampana === 52
          ? ` POLICIAS WERCHOW de ALEJANDRA TEJERINA`
          : idcampana === 53
          ? ` POLICIAS WERCHOW de MARISA CARRIZO`
          : idcampana === 54
          ? ` POLICIAS WERCHOW de VANESA GOROSITO`
          : idcampana === 55
          ? ` POLICIAS WERCHOW de SILVIA JUAREZ`
          : idcampana === 56
          ? ` ATRASADOS WERCHOW de CAJA (PBANDUR)`
          : idcampana === 57
          ? ` RECUPERACION WERCHOW de VALERIA FIDAO`
          : idcampana === 58
          ? ` ATRASADOS WERCHOW de VALERIA FIDAO`
          : idcampana === 27
          ? ` ATRASADOS WERCHOW de CAJA (CVALDA)`
          : idcampana === 61
          ? ` POLICIAS WERCHOW de VALERIA FIDAO`
          : idcampana === 59
          ? ` REINCIDENTES WERCHOW de VALERIA FIDAO`
          : idcampana === 60
          ? ` BLANQUEO WERCHOW de VALERIA FIDAO`
          : idcampana === 62
          ? ` AUXILIAR WERCHOW de VALERIA FIDAO`
          : idcampana === 63
          ? ` RECUPERACION MUTUAL de VALERIA FIDAO`
          : idcampana === 64
          ? ` ATRASADOS MUTUAL de VALERIA FIDAO`
          : idcampana === 65
          ? ` REINCIDENTES MUTUAL de VFIDAO`
          : idcampana === 66
          ? ` BLANQUEO MUTUAL de VFIDAO`
          : null}
      </div>
    );
  };

  return (
    <>
      {Object.entries(listSocio).length !== 0 ? (
        <table className="table border border-dark">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">CAMPAÑA</th>
              <th scope="col">CONTRATO</th>
              <th scope="col">DNI</th>
              <th scope="col">APELLIDO</th>
              <th scope="col">NOMBRE</th>
            </tr>
          </thead>
          <tbody>
            {listSocio.map((socio, index) => (
              <tr className="border border-dark" key={index}>
                <td className="border border-dark">{index} </td>
                <td className="border border-dark">
                  {campañas(socio.idcampana)}{" "}
                </td>
                <td className="border border-dark">{socio.contrato}</td>
                <td className="border border-dark">{socio.dni}</td>
                <td className="border border-dark">{socio.apellido}</td>
                <td className="border border-dark">{socio.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
          <strong>El socio no se encuentra en campaña</strong>
        </div>
      )}
    </>
  );
};

export default TablaSocios;
