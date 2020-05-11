import React from "react";

const Campcaso = ({ socioRes }) => {
  return (
    <div className=" alert alert-success mt-4">
      {socioRes.idcampana === 1
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION WERCHOW de MARIA GALIAN`
        : socioRes.idcampana === 2
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION WERCHOW de GISELA GIMENEZ`
        : socioRes.idcampana === 3
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION WERCHOW de MARISA CARRIZO`
        : socioRes.idcampana === 4
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION WERCHOW de VANESA GOROSITO`
        : socioRes.idcampana === 5
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION WERCHOW de SILVIA JUAREZ`
        : socioRes.idcampana === 6
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de MARIA GALIAN`
        : socioRes.idcampana === 7
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de GISELA GIMENEZ`
        : socioRes.idcampana === 8
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de MARISA CARRIZO`
        : socioRes.idcampana === 9
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de VANESA GOROSITO`
        : socioRes.idcampana === 10
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de SILVIA JUAREZ`
        : socioRes.idcampana === 11
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de MARIA GALIAN`
        : socioRes.idcampana === 12
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de GISELA GIMENEZ`
        : socioRes.idcampana === 13
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de MARISA CARRIZO`
        : socioRes.idcampana === 14
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de VANESA GOROSITO`
        : socioRes.idcampana === 15
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SILVIA JUAREZ`
        : socioRes.idcampana === 16
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEO WERCHOW de MARIA GALIAN`
        : socioRes.idcampana === 17
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEO WERCHOW de GISELA GIMENEZ`
        : socioRes.idcampana === 18
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEO WERCHOW de MARISA CARRIZO`
        : socioRes.idcampana === 19
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEO WERCHOW de VANESA GOROSITO`
        : socioRes.idcampana === 20
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEO WERCHOW de SILVIA JUAREZ`
        : socioRes.idcampana === 21
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION WERCHOW de ALEJANDRA TEJERINA`
        : socioRes.idcampana === 22
        ? `El socio ${socioRes.contrato} pertenece a la campaña de AUXILIAR WERCHOW de MARIA GALIAN`
        : socioRes.idcampana === 23
        ? `El socio ${socioRes.contrato} pertenece a la campaña AUXILIAR de GISELA GIMENEZ`
        : socioRes.idcampana === 24
        ? `El socio ${socioRes.contrato} pertenece a la campaña de AUXILIAR de MARISA CARRIZO`
        : socioRes.idcampana === 25
        ? `El socio ${socioRes.contrato} pertenece a la campaña de AUXILIAR de VANESA GOROSITO`
        : socioRes.idcampana === 26
        ? `El socio ${socioRes.contrato} pertenece a la campaña de AUXILIAR de SILVIA JUAREZ`
        : socioRes.idcampana === 28
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARIA GALIAN`
        : socioRes.idcampana === 29
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS MUTUAL de GISELA GIMENEZ`
        : socioRes.idcampana === 30
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARISA CARRIZO`
        : socioRes.idcampana === 31
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS MUTUAL de VANESA GOROSITO`
        : socioRes.idcampana === 32
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS MUTUAL de SILVIA JUAREZ`
        : socioRes.idcampana === 33
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION MUTUAL de MARIA GALIAN`
        : socioRes.idcampana === 34
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION MUTUAL de GISELA GIMENEZ`
        : socioRes.idcampana === 35
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION MUTUAL de MARISA CARRIZO`
        : socioRes.idcampana === 36
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION MUTUAL de VANESA GOROSITO`
        : socioRes.idcampana === 37
        ? `El socio ${socioRes.contrato} pertenece a la campaña de RECUPERACION MUTUAL de SILVIA JUAREZ`
        : socioRes.idcampana === 38
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de MARIA GALIAN`
        : socioRes.idcampana === 39
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de GISELA GIMENEZ`
        : socioRes.idcampana === 40
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de MARISA CARRIZO`
        : socioRes.idcampana === 41
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de VANESA GOROSITO`
        : socioRes.idcampana === 42
        ? `El socio ${socioRes.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de SILVIA JUAREZ`
        : socioRes.idcampana === 43
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de MARIA GALIAN`
        : socioRes.idcampana === 44
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de GISELA GIMENEZ`
        : socioRes.idcampana === 45
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de MARISA CARRIZO`
        : socioRes.idcampana === 46
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de VANESA GOROSITO`
        : socioRes.idcampana === 47
        ? `El socio ${socioRes.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de SILVIA JUAREZ`
        : socioRes.idcampana === 48
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de ALEJANDRA TEJERINA`
        : socioRes.idcampana === 49
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS MUTUAL de ALEJANDRA TEJERINA`
        : socioRes.idcampana === 50
        ? `El socio ${socioRes.contrato} pertenece a la campaña de POLICIAS WERCHOW de MARIA GALIAN`
        : socioRes.idcampana === 51
        ? `El socio ${socioRes.contrato} pertenece a la campaña de POLICIAS WERCHOW de GISELA GIMENEZ`
        : socioRes.idcampana === 52
        ? `El socio ${socioRes.contrato} pertenece a la campaña de POLICIAS WERCHOW de ALEJANDRA TEJERINA`
        : socioRes.idcampana === 53
        ? `El socio ${socioRes.contrato} pertenece a la campaña de POLICIAS WERCHOW de MARISA CARRIZO`
        : socioRes.idcampana === 54
        ? `El socio ${socioRes.contrato} pertenece a la campaña de POLICIAS WERCHOW de VANESA GOROSITO`
        : socioRes.idcampana === 55
        ? `El socio ${socioRes.contrato} pertenece a la campaña de POLICIAS WERCHOW de SILVIA JUAREZ`
        : socioRes.idcampana === 56
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de CAJA (PBANDUR)`
        : socioRes.idcampana === 57
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SOPORTE 1`
        : socioRes.idcampana === 58
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SOPORTE 2`
        : socioRes.idcampana === 27
        ? `El socio ${socioRes.contrato} pertenece a la campaña de ATRASADOS WERCHOW de CAJA (CVALDA)`
        : null}
    </div>
  );
};

export default Campcaso;
