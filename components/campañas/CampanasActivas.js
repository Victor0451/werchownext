import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const CampanasActivas = ({ campanas, cerrarCamp }) => {
  let data = Object.values(campanas);

  const selcaso = (campana) => {
    let idcampana = campana.idcampana;

    cerrarCamp(idcampana);
  };

  return (
    <div className="container border border-dark alert alert-primary mt-4">
      <h1 className="mt-4 mb-4">
        <strong>
          <u>Campañas Activas Por Operador</u>
        </strong>
      </h1>

      <div className="list">
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
    </div>
  );
};

export default CampanasActivas;
