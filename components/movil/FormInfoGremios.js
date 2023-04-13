import React from 'react'

const FormRegGremios = ({

}) => {
    return (
        <div className='list container border border-dark p-4 mt-4 mb-4'>

            <div className="col-md-12 d-flex justify-content-center">

                <img src="/img/logo.png" className="werchowlogo" />

            </div>



            <div className='border border-dark mt-4 mb-4 p-4'>

                <div className='row'>

                    <div className='col-md-12'>


                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            {/* <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol> */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/img/movil/folleto.jpg" className="d-block w-100" alt="..." />

                                </div>
                                <div className="carousel-item">
                                    <img src="/img/movil/sorteo.jpg" className="d-block w-100" alt="..." />

                                </div>
                                <div className="carousel-item">
                                    <img src="/img/movil/contacto.jpg" className="d-block w-100" alt="..." />
                                    <a className='mt-4 btn btn-sm btn-success btn-block' href='https://wa.link/r6hoqy'>
                                        Contacta un asesor
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='col-md-12 mt-4 d-flex justify-content-between'>
                        <button className='btn btn-primary '
                            data-target="#carouselExampleCaptions" data-slide="prev"
                        >
                            Anterior
                        </button>


                        <button className='btn btn-primary '
                            data-target="#carouselExampleCaptions" data-slide="next"
                        >
                            Siguiente
                        </button>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormRegGremios