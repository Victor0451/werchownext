import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Link from "next/link";
import moment from "moment";

const ListadoServicios = ({
  listado,
  desde,
  hasta,
  datatoggle,
  datatarget,
  getRow
}) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark list mt-4 p-4">
      {
        !desde ? (
          <h2>
            <strong>
              <u>Listado De Servicios</u>
            </strong>
          </h2>
        ) :
          (<h2>
            <strong>
              <u>Listado De Servicios:</u> desde:{" "}
              {moment(desde).format("DD/MM/YYYY")} hasta:{" "}
              {moment(hasta).format("DD/MM/YYYY")}
            </strong>
          </h2>)
      }


      <div className="mt-4 mb-4 border border-dark p-4">
        <div className="row" >


          <div className="col-md-6">
            <h4 className="">
              <strong>
                <u>Total de servicios:</u> {listado.length}
              </strong>
            </h4>
          </div>

        </div>
      </div>

      <div className="list border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                // {
                //   Header: "ID",
                //   id: "idservicio",
                //   accessor: (d) => d.idservicio,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, { keys: ["idservicio"] }),
                //   filterAll: true,
                //   width: 30,
                // },
                {
                  Header: "#",
                  filterAll: false,
                  width: 20,
                  Cell: (row) => <div>{row.index + 1}</div>,
                },
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: (d) => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true,
                  width: 110,
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
                  Header: "DNI",
                  id: "dni",
                  accessor: (d) => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni"] }),
                  filterAll: true,
                  width: 85,
                },
                {
                  Header: "Causa de Muerte",
                  id: "motivo",
                  accessor: (d) => d.motivo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["motivo"],
                    }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Servicio",
                  id: "tipo_servicio",
                  accessor: (d) => d.tipo_servicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["tipo_servicio"],
                    }),
                  filterAll: true,
                  width: 150,
                },

                {
                  Header: "Fecha de Fallecimiento",
                  id: "fecha_fallecimiento",
                  accessor: (d) => d.fecha_fallecimiento,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha_fallecimiento"],
                    }),
                  filterAll: true,
                  width: 105,
                },

                // {
                //   Header: "Estado",
                //   id: "estado",
                //   accessor: (d) => d.estado,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, { keys: ["estado"] }),
                //   filterAll: true,
                //   width: 100,
                //   Cell: (row) => (
                //     <div>
                //       {row.original.estado === 1 ? (
                //         <div>Aprobado</div>
                //       ) : row.original.estado === 0 ? (
                //         <div>Cancelado</div>
                //       ) : null}
                //     </div>
                //   ),
                // },
                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <button className="btn btn-primary btn-sm btn-block "
                        onClick={() => getRow(row.original)}
                        data-toggle={datatoggle}
                        data-target={datatarget}
                      >
                        Opciones
                      </button>
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

export default ListadoServicios;
