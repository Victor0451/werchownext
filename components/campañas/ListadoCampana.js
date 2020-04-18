import React from 'react';
import ReactTable from 'react-table';

const ListadoCampana = ({ data }) => {
    return (
        <div className="container mt-4">
            <ReactTable
                data={data}
                filterable
                defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                columns={[
                    {
                        Header: "Cartera",
                        columns: [
                            {
                                Header: "Contrato",
                                id: "CONTRATO",
                                accessor: d => d.CONTRATO,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                filterAll: true
                            },
                            {
                                Header: "Apellido",
                                id: "APELLIDOS",
                                accessor: d => d.APELLIDOS,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                                filterAll: true
                            },
                            {
                                Header: "Nombre",
                                id: "NOMBRES",
                                accessor: d => d.NOMBRES,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
                                filterAll: true
                            },
                            {
                                Header: "DNI",
                                id: "NRO_DOC",
                                accessor: d => d.NRO_DOC,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                                filterAll: true
                            },
                            {
                                Header: "Calle",
                                id: "CALLE",
                                accessor: d => d.CALLE,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["CALLE"] }),
                                filterAll: true
                            },
                            {
                                Header: "N°",
                                id: "NRO_CALLE",
                                accessor: d => d.NRO_CALLE,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["NRO_CALLE"] }),
                                filterAll: true
                            },
                            {
                                Header: "Barrio",
                                id: "BARRIO",
                                accessor: d => d.BARRIO,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["BARRIO"] }),
                                filterAll: true
                            },
                            {
                                Header: "Localidad",
                                id: "LOCALIDAD",
                                accessor: d => d.LOCALIDAD,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["LOCALIDAD"] }),
                                filterAll: true
                            },
                            {
                                Header: "Cuota",
                                id: "IMPORTE",
                                accessor: d => d.IMPORTE,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                filterAll: true
                            },
                            {
                                Header: "Mes",
                                id: "MES",
                                accessor: d => d.MES,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["MES"] }),
                                filterAll: true
                            },
                            {
                                Header: "Año",
                                id: "ANO",
                                accessor: d => d.ANO,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["ANO"] }),
                                filterAll: true
                            }
                        ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />
        </div>
    );
};

export default ListadoCampana;