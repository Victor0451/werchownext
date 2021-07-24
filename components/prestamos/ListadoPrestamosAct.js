import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ListadoPrestamosAct = ({ prestamos }) => {
  let casos = Object.values(prestamos);

  return (
    <div className="mt-4">
      <ReactTable
        data={casos}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Sub. Cont. Familiar Activos",
            columns: [
              {
                Header: "Fecha de Solicitud",
                id: "ptm_fechasol",
                accessor: (d) => d.ptm_fechasol,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_fechasol"] }),
                filterAll: true,
              },
              {
                Header: "Operador",
                id: "ptm_op",
                accessor: (d) => d.ptm_op,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_op"] }),
                filterAll: true,
              },
              {
                Header: "Ficha",
                id: "ptm_ficha",
                accessor: (d) => d.ptm_ficha,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_ficha"] }),
                filterAll: true,
              },

              {
                Header: "Capital Prestamo",
                id: "ptm_prestamo",
                accessor: (d) => d.ptm_prestamo,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_prestamo"] }),
                filterAll: true,
              },

              {
                Header: "Cuotas",
                id: "ptm_cuotas",
                accessor: (d) => d.ptm_cuotas,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_cuotas"] }),
                filterAll: true,
              },
              {
                Header: "Cuota con Interes",
                id: "ptm_valcuota",
                accessor: (d) => d.ptm_valcuota,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_valcuota"] }),
                filterAll: true,
              },
              {
                Header: "Estado",
                id: "ptm_estado",
                accessor: (d) => d.ptm_estado,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptm_estado"] }),
                filterAll: true,
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

export default ListadoPrestamosAct;
