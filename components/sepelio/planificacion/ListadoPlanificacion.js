import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import moment from "moment-timezone";

const ListadoPlanificacion = ({ plani, mes }) => {
  //let casos = Object.values(listado);

  const selcaso = (index) => {
    console.log(index);
  };

  // const handleChange = (value, flag) => {
  //   if (flag === "accion") {
  //     const accion = value.value;
  //     guardarAccion(accion);
  //   } else if (flag === "nuevaaccion") {
  //     const nuevaaccion = value.value;
  //     guardarNuevaAccion(nuevaaccion);
  //   }
  // };

  if (!plani) return <div>No Hay Planificacion Aun</div>;

  return (
    <div className="container mt-4 border border-dark p-4 alert alert-primary">
      <h2 className=" mb-4">
        <strong>
          <u>Planificacion de {mes}</u>
        </strong>
      </h2>

      <div className="list border border-dark p-4">
        <ReactTable
          data={plani}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Planificacion",
              columns: [
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
                  //   width: 150,
                },
                {
                  Header: "Operador",
                  id: "operador",
                  accessor: (d) => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["operador"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Inicio",
                  id: "hs_inicio",
                  accessor: (d) => d.hs_inicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["hs_inicio"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Fin",
                  id: "hs_fin",
                  accessor: (d) => d.hs_fin,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["hs_fin"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Horas",
                  id: "horas",
                  accessor: (d) => d.horas,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["horas"] }),
                  filterAll: true,
                  //   width: 100,
                },
                {
                  Header: "Lugar",
                  id: "lugar",
                  accessor: (d) => d.lugar,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["lugar"],
                    }),
                  filterAll: true,
                  //   width: 120,
                  Cell: (row) => (
                    <div>
                      {row.original.lugar === "cc" ? (
                        <div>
                          <strong>Casa Central</strong>
                        </div>
                      ) : row.original.lugar === "sv" ? (
                        <div>
                          <strong>Sala Velatoria</strong>
                        </div>
                      ) : null}
                    </div>
                  ),
                },

                // {
                //   Header: "Acciones",

                //   Cell: (row) => (
                //     <div>
                //       <a
                //         href={"#"}
                //         className="btn btn-primary"
                //         onClick={() => selcaso(row)}
                //       >
                //         Acciones
                //       </a>
                //     </div>
                //   ),
                // },
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

export default ListadoPlanificacion;
