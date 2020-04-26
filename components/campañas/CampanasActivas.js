import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import axios from "axios";
import toastr from "toastr";

const CampanasActivas = ({ campanas }) => {
  let data = Object.values(campanas);

  const cerrarCamp = async (idcampana) => {
    axios
      .put(
        `http://190.231.32.232:5002/api/sgi/campanas/cerrarcamps/${idcampana}`
      )

      .then((res) => {
        let status = res.statusText;
        if (status === "OK") {
          toastr.success("Se cerror con exito la campaña", "Atencion");
        } else if (status === "Bad Request" || status === "Not Found")
          toastr.error("Ocurrio un error, no se cerro la campaa", "Atencion");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selcaso = (campana) => {
    let idcampana = campana.idcampana;

    cerrarCamp(idcampana);
  };

  return (
    <div className="container mt-4">
      <h1 className="mt-4 mb-4">
        <strong>
          <u>Campañas Activas Por Operador</u>
        </strong>
      </h1>

      <ReactTable
        data={data}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Campañas Activas",
            columns: [
              {
                Header: "ID Campana",
                id: "idcampana",
                accessor: (d) => d.idcampana,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["idcampana"] }),
                filterAll: true,
              },
              {
                Header: "Operador",
                id: "operador",
                accessor: (d) => d.operador,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["operador"] }),
                filterAll: true,
              },
              {
                Header: "Campaña",
                id: "descripcion",
                accessor: (d) => d.descripcion,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["descripcion"] }),
                filterAll: true,
              },
              {
                Header: "Empresa",
                id: "empresa",
                accessor: (d) => d.empresa,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["empresa"] }),
                filterAll: true,
              },
              {
                Header: "N° de Casos",
                id: "cantidad",
                accessor: (d) => d.cantidad,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["cantidad"] }),
                filterAll: true,
              },

              {
                Header: "Acciones",

                Cell: (row) => (
                  <div>
                    <a
                      href={"#"}
                      className="btn btn-danger"
                      onClick={() => selcaso(row.original)}
                    >
                      Cerrar Campaña
                    </a>
                  </div>
                ),
              },
            ],
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CampanasActivas;
