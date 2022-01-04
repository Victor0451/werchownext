import React from "react";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";
import axios from "axios";
import toastr from "toastr";

// Import React Table
import ReactTable from "react-table";

const ListadoSolicitudes = ({ listsolicitudes }) => {
  if (!listsolicitudes) return <Spinner />;

  const prueba = async (id) => {
    await axios
      .put(`http://190.231.32.232:5002/api/clubwerchow/socios/solcargada/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Chekeado", "ATENCION");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container list border border-dark p-2 mt-4">
      <h2 className="mt-4 mb-4 ">
        <strong>
          <u>Listado De Solicitudes</u> - Total: {listsolicitudes.length}
        </strong>
      </h2>

      <hr className="mt-4 mb-4" />

      <div className="border border-dark p-4 list">
        <ReactTable
          data={listsolicitudes}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Solicitudes",
              columns: [
                {
                  Header: "Fecha De Solicitud",
                  id: "fecha_solicitud",
                  accessor: (d) => d.fecha_solicitud,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha_solicitud"],
                    }),
                  filterAll: true,
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
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                },
                {
                  Header: "DNI",
                  id: "dni",
                  accessor: (d) => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni"] }),
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
                  Header: "Mail",
                  id: "mail",
                  accessor: (d) => d.mail,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mail"] }),
                  filterAll: true,
                },
                {
                  Header: "Socio",
                  id: "socio",
                  accessor: (d) => d.socio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["socio"] }),
                  filterAll: true,
                  width: 80,
                  Cell: (row) => (
                    <div>
                      {row.original.socio === 1 ? (
                        <div>
                          <strong>SI</strong>
                        </div>
                      ) : row.original.socio === 0 ? (
                        <div>
                          <strong>NO</strong>
                        </div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "No Socio",
                  id: "nosocio",
                  accessor: (d) => d.nosocio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nosocio"] }),
                  filterAll: true,
                  width: 80,
                  Cell: (row) => (
                    <div>
                      {row.original.nosocio === 1 ? (
                        <div>
                          <strong>SI</strong>
                        </div>
                      ) : row.original.nosocio === 0 ? (
                        <div>
                          <strong>NO</strong>
                        </div>
                      ) : null}
                    </div>
                  ),
                },
                {
                  Header: "Referido",
                  id: "referido",
                  accessor: (d) => d.referido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["referido"] }),
                  filterAll: true,
                  width: 80,
                  Cell: (row) => (
                    <div>
                      {row.original.referido === 1 ? (
                        <div>
                          <strong>SI</strong>
                        </div>
                      ) : row.original.referido === 0 ? (
                        <div>
                          <strong>NO</strong>
                        </div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Cargado",
                  width: 80,
                  Cell: (row) => (
                    <div>
                      {row.original.cargada === 1 ? (
                        <div>
                          <strong>SI</strong>
                        </div>
                      ) : (
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                            onClick={() => prueba(row.original.idsocio)}
                          />
                        </div>
                      )}
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

export default ListadoSolicitudes;
