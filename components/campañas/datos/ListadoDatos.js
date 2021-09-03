import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";

const ListadoDatos = ({ datos }) => {
  if (!datos) return <Spinner />;
  return (
    <div className="container border border-dark alert alert-primary p-4 mt-4">
      <h2 className="">Listado de Datos recolectados</h2>
      <div className="mt-4 list">
        <ReactTable
          data={datos}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Datos",
              columns: [
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: (d) => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true,
                },
                {
                  Header: "Nombre",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                },
                {
                  Header: "Edad",
                  id: "edad",
                  accessor: (d) => d.edad,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["edad"] }),
                  filterAll: true,
                },

                {
                  Header: "Telefono",
                  id: "telefono",
                  accessor: (d) => d.telefono,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["telefono"] }),
                  filterAll: true,
                },
                {
                  Header: "Celular",
                  id: "celular",
                  accessor: (d) => d.celular,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["celular"] }),
                  filterAll: true,
                },
                {
                  Header: "Domicilio",
                  id: "domicilio",
                  accessor: (d) => d.domicilio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["domicilio"] }),
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
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => d.fecha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
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

export default ListadoDatos;
