import React from 'react'
import Link from "next/link";

const Campana = ({
    titulo,
    camp,
    empresa,
    operador
}) => {
    return (
        <div className="col-md-6 mt-4">
            <div className="card bg-light mb-3">
                <div className="card-header">{titulo}</div>
                <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                        href={{
                            pathname: "/campanas/gestioncaso/[campana]",

                            query: {
                                camp: camp,
                                empresa: empresa,
                                operador: operador
                            },
                        }}
                        as="/campanas/gestioncaso/campana"
                    >
                        <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Campana