import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../components/layout/Spinner";

const ListadoPadron = ({ ventas, mes, ano }) => {
  if (ventas === null) return <Spinner />;

  const totalVentas = (ventas) => {
    let total = 0;

    for (let i = 0; i < ventas.length; i++) {
      total += ventas[i].prod_monto;
    }

    return total;
  };

  return (
    <div className="container mt-4 border border-dark ">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>
            Ventas Realizadas en {mes}-{ano}
          </u>
        </strong>
      </h2>
      <div className="border border-dark p-2">
        <div className="mt-4 mb-4 alert alert-info text-center text-uppercase">
          <div className="d-flex justify-content-between">
            <div className="col-md-6">
              <u>Total de Ventas</u>: {ventas.length}
            </div>
            <div className="col-md-6">
              <u>Ingresos Por Ventas</u>:$ {totalVentas(ventas)}
            </div>
          </div>
        </div>

        <ReactTable
          data={ventas}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Ventas En Produccion",
              columns: [
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
                    matchSorter(rows, filter.value, { keys: ["prod_apeafi"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Nombre",
                  id: "prod_nomafi",
                  accessor: (d) => d.prod_nomafi,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["prod_nomafi"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "DNI",
                  id: "prod_dniafi",
                  accessor: (d) => d.prod_dniafi,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["prod_dniafi"] }),
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
                  Header: "Recibo",
                  id: "prod_recibo",
                  accessor: (d) => d.prod_recibo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["prod_recibo"] }),
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
                    matchSorter(rows, filter.value, { keys: ["prod_estado"] }),
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
  );
};

export default ListadoPadron;
