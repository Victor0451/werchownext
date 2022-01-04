import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";
import ModalDetalles from "./ModalDetalles";

const ListadoPersonal = ({
  personal,
  traerDetalle,
  detalle,
  titulo,
  archivos,
  eliminarArchivos,
  traerArchivos,
}) => {
  if (!personal) return <Spinner />;

  return (
    <div className="mt-4 container border border-dark list p-4">
      <h2>
        <strong>
          <u>Personal Activo</u>
        </strong>
      </h2>

      <div className="border border-dark mt-4">
        <ReactTable
          data={personal}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Ventas En Produccion",
              columns: [
                {
                  Header: "#",
                  filterAll: false,
                  width: 50,
                  Cell: (row) => <div>{row.index + 1}</div>,
                },
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
                    matchSorter(rows, filter.value, {
                      keys: ["nombre"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "DNI",
                  id: "dni",
                  accessor: (d) => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["dni"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "Alta",
                  id: "alta",
                  accessor: (d) => d.alta,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["alta"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "Rol",
                  id: "rol",
                  accessor: (d) => d.rol,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["rol"],
                    }),
                  filterAll: true,
                },
              ],
            },
            {
              Header: "Acciones",

              Cell: (row) => (
                <div>
                  <button
                    className="btn btn-sm btn-info"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() =>
                      traerDetalle(
                        row.original.idpersonal,
                        row.original.apellido,
                        row.original.nombre
                      )
                    }
                  >
                    Ver Legajo
                  </button>
                </div>
              ),
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>

      {/* MODAL */}

      <ModalDetalles
        detalle={detalle}
        titulo={titulo}
        archivos={archivos}
        eliminarArchivos={eliminarArchivos}
        traerArchivos={traerArchivos}
      />
    </div>
  );
};

export default ListadoPersonal;
