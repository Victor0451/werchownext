import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Link from "next/link";

const ListadoServicios = ({ listado }) => {
  //let casos = Object.values(listado);
  console.log(listado);

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

  if (!listado) return <Spinner />;

  return (
    <div className="container mt-4">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>Listado De Servicios</u>
        </strong>
      </h2>
      <ReactTable
        data={listado}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Listado De Servicios",
            columns: [
              {
                Header: "ID",
                id: "idservicio",
                accessor: (d) => d.idservicio,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["idservicio"] }),
                filterAll: true,
                width: 50,
              },
              {
                Header: "Empresa",
                id: "empresa",
                accessor: (d) => d.empresa,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["empresa"] }),
                filterAll: true,
                width: 200,
              },
              {
                Header: "Apellido",
                id: "apellido",
                accessor: (d) => d.apellido,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["apellido"] }),
                filterAll: true,
                width: 200,
              },
              {
                Header: "Nombre",
                id: "nombre",
                accessor: (d) => d.nombre,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["nombre"] }),
                filterAll: true,
                width: 200,
              },

              {
                Header: "Tipo Servicio",
                id: "tipo_servicio",
                accessor: (d) => d.tipo_servicio,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["tipo_servicio"] }),
                filterAll: true,
                width: 200,
              },

              {
                Header: "Estado",
                id: "estado",
                accessor: (d) => d.estado,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["estado"] }),
                filterAll: true,
                width: 100,
              },
              {
                Header: "Acciones",

                Cell: (row) => (
                  <div>
                    <Link
                      href={{
                        pathname: "/sepelio/servicios/impresion",
                        query: {
                          id: row.original.dni,
                        },
                      }}
                    >
                      <button
                        className="btn btn-primary mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Imprimir Solicitud"
                      >
                        <i className="fa fa-print" aria-hidden="true"></i>
                      </button>
                    </Link>
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

export default ListadoServicios;
