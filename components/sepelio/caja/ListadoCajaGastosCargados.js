import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import Link from "next/link";
import Spinner from "../../layout/Spinner";

const ListadoCajaGastosCargados = ({
  listado,
  deleteGastos,
}) => {

  if (!listado) return <Spinner />

  return (
    <div className="list mt-4 border border-dark">

      <ReactTable
        data={listado}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Gastos Cargados",
            columns: [
              {
                Header: "Fecha",
                id: "fecha",
                accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["fecha"] }),
                filterAll: true,
                width: 150,
              },
              {
                Header: "Empresa",
                id: "empresa",
                accessor: (d) => d.empresa,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["empresa"] }),
                filterAll: true,
                width: 150,
              },
              {
                Header: "Concepto",
                id: "concepto",
                accessor: (d) => d.concepto,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["concepto"] }),
                filterAll: true,
                width: 200,
              },

              {
                Header: "Pto Venta",
                id: "ptoventa",
                accessor: (d) => d.ptoventa,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["ptoventa"] }),
                filterAll: true,
                width: 80,
              },

              {
                Header: "N° Factura",
                id: "nfactura",
                accessor: (d) => d.nfactura,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["nfactura"] }),
                filterAll: true,
              },

              {
                Header: "Total",
                id: "total",
                accessor: (d) => d.total,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["total"] }),
                filterAll: true,
                width: 100,
              },

              {
                Header: "Operador",
                id: "operadortramite",
                accessor: (d) => d.operadortramite,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["operadortramite"],
                  }),
                filterAll: true,
              },

              // {
              //   Header: "Acciones",

              //   Cell: (row) => (
              //     <>
              //       <button
              //         className="btn btn-danger btn-sm mr-1"
              //         data-toggle="tooltip"
              //         data-placement="top"
              //         data-dismiss="modal"
              //         title="Eliminar Gastos"
              //         onClick={() =>
              //           deleteGastos(row.original)
              //         }
              //       >
              //         <i className="fa fa-trash" aria-hidden="true"></i>
              //       </button>
              //     </>
              //   ),
              // },
            ],
          },
        ]}
        defaultPageSize={20}
        className="-striped -highlight"
      />
    </div>

  );
};

export default ListadoCajaGastosCargados;
