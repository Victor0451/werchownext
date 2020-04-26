export const efecmediopago = (array1, flag) => {
  let total = 0;
  let cobrado = 0;

  if (array1) {
    total = array1.total;

    cobrado = array1.cobrado;

    let efectividad = (cobrado * 100) / total;
    let resultado = efectividad.toFixed(2);

    if (resultado === "NaN") {
      resultado = 0.0;
      return resultado;
    } else {
      return resultado;
    }
  }
};

export const efecsucursal = (array1, array2, array3, array4, array5) => {
  if (array1) {
    let total =
      parseInt(array2.total) +
      parseInt(array3.total) +
      parseInt(array4.total) +
      parseInt(array5.total) +
      parseInt(array1.total);
    let cobrado =
      parseInt(array2.cobrado) +
      parseInt(array3.cobrado) +
      parseInt(array4.cobrado) +
      parseInt(array5.cobrado) +
      parseInt(array1.cobrado);

    let efectividad = (parseInt(cobrado) * 100) / parseInt(total);
    let resultado = efectividad.toFixed(2);

    if (resultado === "NaN") {
      resultado = 0.0;
      return resultado;
    } else {
      return resultado;
    }
  }
};

export const efecsucursalm = (array1, array2, array3) => {

  if (array1) {

    let total =
      parseInt(array1.total) + parseInt(array2.total) + parseInt(array3.total);
    let cobrado =
      parseInt(array1.cobrado) +
      parseInt(array2.cobrado) +
      parseInt(array3.cobrado);
    let efectividad = (parseInt(cobrado) * 100) / parseInt(total);
    let resultado = efectividad.toFixed(2);
    if (resultado === "NaN") {
      resultado = 0.0;
      return resultado;
    } else {
      return resultado;
    }
  }

};

export const efecsucursalmsp = (array1, array2) => {

  if (array1) {

    let total =
      parseInt(array1.total) + parseInt(array2.total)
    let cobrado =
      parseInt(array1.cobrado) +
      parseInt(array2.cobrado)

    let efectividad = (parseInt(cobrado) * 100) / parseInt(total);
    let resultado = efectividad.toFixed(2);
    if (resultado === "NaN") {
      resultado = 0.0;
      return resultado;
    } else {
      return resultado;
    }
  }
}


export const efecempresa = (
  pericoCOB,
  pericoOF,
  pericoBAN,
  pericoTAR,
  pericoPOL,
  palpalaCOB,
  palpalaOF,
  palpalaBAN,
  palpalaTAR,
  palpalaPOL,
  sanPedroCOB,
  sanPedroOF,
  sanPedroBAN,
  sanPedroTAR,
  sanPedroPOL,
  CasaCentralCOB,
  CasaCentralOF,
  CasaCentralBAN,
  CasaCentralTAR,
  CasaCentralPOL
) => {
  let palpala = parseInt(
    efecsucursal(palpalaCOB, palpalaOF, palpalaTAR, palpalaBAN, palpalaPOL)
  );
  let perico = parseInt(
    efecsucursal(pericoCOB, pericoOF, pericoTAR, pericoBAN, pericoPOL)
  );
  let sanPedro = parseInt(
    efecsucursal(sanPedroCOB, sanPedroOF, sanPedroTAR, sanPedroBAN, sanPedroPOL)
  );

  let CasaCentral = parseInt(
    efecsucursal(
      CasaCentralCOB,
      CasaCentralOF,
      CasaCentralTAR,
      CasaCentralBAN,
      CasaCentralPOL
    )
  );

  let efectividad = (palpala + perico + sanPedro + CasaCentral) / 4;
  let resultado = efectividad.toFixed(2);
  return resultado;
};

export const efecempresam = (
  pericoCOBM,
  pericoOFM,
  pericoTARM,
  palpalaCOBM,
  palpalaOFM,
  palpalaTARM,
  sanPedroCOBM,
  sanPedroOFM,
  sanPedroTARM,
  CasaCentralCOBM,
  CasaCentralOFM,
  CasaCentralTARM
) => {
  let palpala = parseInt(efecsucursalm(palpalaCOBM, palpalaOFM, palpalaTARM));
  let perico = parseInt(efecsucursalm(pericoCOBM, pericoOFM, pericoTARM));
  let sanPedro = parseInt(
    efecsucursalmsp(sanPedroCOBM, sanPedroOFM)
  );

  let CasaCentral = parseInt(
    efecsucursalm(CasaCentralCOBM, CasaCentralOFM, CasaCentralTARM)
  );

  let efectividad = (palpala + perico + sanPedro + CasaCentral) / 4;
  let resultado = efectividad.toFixed(2);
  return resultado;
};
