import React from "react";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";
import axios from "axios";
import toastr from "toastr";

// Import React Table
import ReactTable from "react-table";

const ListadoParticipantes = ({ participantes }) => {
  if (!participantes) return <Spinner />;

  return (
    <div className="container list border border-dark p-2 mt-4">
      <h2 className="mt-4 mb-4 ">
        <strong>
          <u>Listado De Solicitudes</u> - Total: {participantes.length}
        </strong>
      </h2>

      <hr className="mt-4 mb-4" />

      <div className="border border-dark p-4 list">
        <ReactTable
          data={participantes}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Participantes",
              columns: [
                {
                  Header: "N°",
                  id: "idparticipante",
                  accessor: (d) => d.idparticipante,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["idparticipante"],
                    }),
                  filterAll: true,
                },

                {
                  Header: "Participante",
                  id: "participante",
                  accessor: (d) => d.participante,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["participante"],
                    }),
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

export default ListadoParticipantes;
