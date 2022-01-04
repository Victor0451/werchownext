import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../components/layout/Spinner";

const ListadoPadron = ({
  ventas,
  mes,
  ano,
  ventasase,
  ventaspago,
  ventaslocalidad,
}) => {
  if (ventas === null) return <Spinner />;

  const totalVentas = (ventas) => {
    let total = 0;

    for (let i = 0; i < ventas.length; i++) {
      if (ventas[i].prod_plan != "NOVELL") {
        total += ventas[i].prod_monto;
      }
    }

    return total;
  };

  return (
    <div className="container list mt-4 border border-dark list ">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>
            Ventas Realizadas en {mes}-{ano}
          </u>
        </strong>
      </h2>
      <div className="p-2">
        <div className="mt-4 mb-4 border border-dark alert alert-warning p-4 text-center text-uppercase">
          en este informe no se tienen en cuenta las ventas de Plan Novell ni
          venta de Adherentes
        </div>

        <div className="border border-dark p-4">
          <div className="d-flex justify-content-between border border-dark alert alert-info mt-4 mb-4 p-4">
            <div className="col-md-6">
              <strong>
                <u>Total de Ventas</u>
              </strong>
              : {ventas.length}
            </div>
            <div className="col-md-6">
              <strong>
                <u>Ingresos Por Ventas</u>
              </strong>
              :$ {totalVentas(ventas)}
            </div>
          </div>

          <div className="row">
            {ventasase ? (
              <div className=" mt-4 col-md-6">
                <h5 className="mb-2">
                  <u>Ventas por Asesor</u>
                </h5>

                <table class="table table-sm border border-dark list">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Asesor</th>
                      <th scope="col">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventasase.map((ventas, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ventas.asesor}</td>
                        <td>{ventas.cantidad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            {ventaspago ? (
              <div className=" mt-4 col-md-6">
                <h5 className="mb-2">
                  <u>Ventas por medio de pago</u>
                </h5>

                <table class="table table-sm border border-dark list">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Medio De Pago</th>
                      <th scope="col">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventaspago.map((ventas, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ventas.mediopago}</td>
                        <td>{ventas.cantidad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            {ventaslocalidad ? (
              <div className=" mt-4 col-md-6">
                <h5 className="mb-2">
                  <u>Ventas por localidad</u>
                </h5>

                <table class="table table-sm border border-dark list">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Localidad</th>
                      <th scope="col">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventaslocalidad.map((ventas, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ventas.localidad}</td>
                        <td>{ventas.cantidad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>

        <div className="border border-dark list">
          <ReactTable
            data={ventas}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
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
                    Header: "Empresa",
                    id: "prod_empre",
                    accessor: (d) => d.prod_empre,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["prod_empre"] }),
                    filterAll: true,
                    width: 50,
                  },

                  {
                    Header: "Contrato",
                    id: "prod_afiliado",
                    accessor: (d) => d.prod_afiliado,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["prod_afiliado"],
                      }),
                    filterAll: true,
                    width: 90,
                  },
                  {
                    Header: "Apellido",
                    id: "prod_apeafi",
                    accessor: (d) => d.prod_apeafi,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["prod_apeafi"],
                      }),
                    filterAll: true,
                    width: 100,
                  },
                  {
                    Header: "Nombre",
                    id: "prod_nomafi",
                    accessor: (d) => d.prod_nomafi,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["prod_nomafi"],
                      }),
                    filterAll: true,
                    width: 100,
                  },
                  {
                    Header: "DNI",
                    id: "prod_dniafi",
                    accessor: (d) => d.prod_dniafi,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["prod_dniafi"],
                      }),
                    filterAll: true,
                    width: 100,
                  },

                  {
                    Header: "Tipo de Pago",
                    id: "prod_pago",
                    accessor: (d) => d.prod_pago,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["prod_pago"] }),
                    filterAll: true,
                    width: 100,
                  },

                  {
                    Header: "Monto",
                    id: "prod_monto",
                    accessor: (d) => d.prod_monto,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["prod_monto"] }),
                    filterAll: true,
                    width: 50,
                  },
                  {
                    Header: "Estado",
                    id: "prod_estado",
                    accessor: (d) => d.prod_estado,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["prod_estado"],
                      }),
                    filterAll: true,
                    width: 100,
                  },
                  {
                    Header: "Carga Fox",
                    id: "carga",
                    accessor: (d) => d.carga,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["carga"] }),
                    filterAll: true,
                    width: 120,
                  },
                  {
                    Header: "Paga Fox",
                    id: "pago",
                    accessor: (d) => d.pago,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["pago"] }),
                    filterAll: true,
                    width: 120,
                  },
                  {
                    Header: "Asesor",
                    id: "usu_nick",
                    accessor: (d) => d.usu_nick,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["usu_nick"] }),
                    filterAll: true,
                    width: 100,
                  },
                ],
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    </div>
  );
};

export default ListadoPadron;
