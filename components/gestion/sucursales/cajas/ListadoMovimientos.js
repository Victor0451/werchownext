import React from "react";
import moment from "moment";

const ListadoMovimientos = ({
    listado,
    eliminarPrecarga,
    f
}) => {
    return (
        <div className="mt-4 border border-dark list">

            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {
                            f === 'list' ? null
                                : (<th scope="col">Accion</th>)
                        }
                        <th scope="col">Fecha</th>
                        <th scope="col">concepto</th>
                        <th scope="col">importe</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listado.map((i, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                {
                                    f === 'list' ? null
                                        : (<td>
                                            <button className="btn btn-sm btn-danger" onClick={() => { eliminarPrecarga(index, i.movimiento) }}>
                                                X
                                            </button>
                                        </td>
                                        )
                                }
                                <td>{moment(i.fecha_movimiento).format('DD/MM/YYYY')}</td>
                                <td>{i.concepto}</td>
                                <td>{i.importe}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>


        </div>
    )
}

export default ListadoMovimientos