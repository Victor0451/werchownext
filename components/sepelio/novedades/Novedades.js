import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import axios from "axios";
import { ip } from "../../../config/config";
import toastr from "toastr";
import moment from "moment";

const Novedades = () => {
  const [novedades, guardarNovedades] = useState([]);

  const traerNovedades = async () => {
    await axios
      .get(`${ip}api/sepelio/novedades/novedades`)
      .then((res) => {
        guardarNovedades(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer las novedades", "ATENCION");
      });
  };

  useEffect(() => {
    traerNovedades();
  }, []);

  if (novedades.length === 0)
    return (
      <div className="mt-4 alert alert-warning alert-dismissible fade show container">
        <h3 className="alert-heading mb-4">
          <strong>
            <u>Novedades Sepelio</u>
          </strong>
        </h3>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <p>No hay novedades registradas</p>
      </div>
    );

  return (
    <div>
      <div
        className="mt-4 alert alert-warning alert-dismissible fade show container"
        role="alert"
      >
        <h3 className="alert-heading mb-4">
          <strong>
            <u>Novedades Sepelio</u>
          </strong>
        </h3>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        {/* <p>* </p> */}
        <div className="list mt-4 border border-dark ">
          <ReactTable
            data={novedades}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
            columns={[
              {
                Header: "Listado De Servicios",
                columns: [
                  {
                    Header: "#",
                    id: "#",
                    filterAll: false,
                    width: 50,
                    Cell: (row) => <div>{row.index + 1}</div>,
                  },
                  {
                    Header: "Detalle",
                    id: "novedad",
                    accessor: (d) => d.novedad,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["novedad"] }),
                    filterAll: true,
                  },
                  {
                    Header: "Operador",
                    id: "operador",
                    accessor: (d) => d.operador,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["operador"] }),
                    filterAll: true,
                    width: 100,
                  },
                  {
                    Header: "Fecha",
                    id: "fecha",
                    accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["fecha"] }),
                    filterAll: true,
                    width: 100,
                  },
                ],
              },
            ]}
            defaultPageSize={5}
            className="-striped -highlight"
          />
        </div>

        <hr />
        <p className="mb-0 text-center"></p>
      </div>
    </div>
  );
};

export default Novedades;
