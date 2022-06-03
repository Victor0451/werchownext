import moment from "moment"
import axios from "axios"
import { ip } from '../config/config'
import toastr from "toastr"
import Router from "next/router"

export const registrarHistoria = async (accion, user) => {

    const historial = {
        operador: user,
        fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
        accion: accion
    }

    await axios.post(`${ip}api/sgi/historialacciones/reghistorial`, historial)
        .then(res => {

            if (res.status === 200) {
                // toastr.info("Esta accion se registo en el historial", "ATENCION")               
            }
        })
        .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al registrar la accion en el historial", "ATENCION")
        })

}

export const registrarHistorialAprobacion = async (data, user) => {
    const historial = {
        operador: user,
        idprestamo: data.original.ptm_id,
        contrato: data.original.ptm_ficha,
        afiliado: data.original.ptm_afi,
        fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
        productor: data.original.ptm_op,
    };

    await axios
        .post(`${ip}api/sgi/prestamos/reghistorial`, historial)
        .then((res) => {
            if (res.status === 200) {
                toastr.info("Esta accion se registrara en el historial", "ATENCION");
            }
        })
        .catch((error) => {
            console.log(error);
            toastr.error("Ocurrio un error al registrar el historial", "ATENCION");
        });
};


// CALCULO GASTO LUTO VIEJO
// export const gastoLuto = (plan, alta, cantadh) => {


//     const anti = parseInt(moment().format('YYYY') - moment(alta).format("YYYY"))

//     let gl = 0

//     let glf = 0

//     if (plan === "F" || plan === "MA" || plan === "MB" || plan === "MC") {

//         gl = 1000

//         if (anti <= 2) {

//             gl = 1000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 1000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 1000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 1000 + 4000

//         } else if (anti > 8) {

//             gl = 1000 + 5000

//         }


//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf



//     } else if (plan === "MP") {

//         if (anti <= 2) {

//             gl = 2000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 2000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 2000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 2000 + 4000

//         } else if (anti > 8) {

//             gl = 2000 + 5000

//         }


//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }

//         return glf


//     } else if (plan === "MN") {


//         if (anti <= 2) {

//             gl = 2500 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 2500 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 2500 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 2500 + 4000

//         } else if (anti > 8) {

//             gl = 2500 + 5000

//         }

//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf


//     } else if (plan === "MO" || plan === "A" || plan === "AB" || plan === "G0" || plan === "U0") {


//         if (anti <= 2) {

//             gl = 3000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 3000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 3000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 3000 + 4000

//         } else if (anti > 8) {

//             gl = 3000 + 5000

//         }

//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf


//     } else if (plan === "G1" || plan === "U1") {



//         if (anti <= 2) {

//             gl = 5000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 5000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 5000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 5000 + 4000

//         } else if (anti > 8) {

//             gl = 5000 + 5000

//         }

//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf


//     } else {

//         // gl = "no"

//         if (anti <= 2) {

//             gl = 1000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 1000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 1000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 1000 + 4000

//         } else if (anti > 8) {

//             gl = 1000 + 5000

//         }

//         return gl

//     }

// }



// CALCULO GASTO LUTO NUEVO


export const gastoLuto = (plan, alta, cantadh) => {


    const anti = parseInt(moment().format('YYYY') - moment(alta).format("YYYY"))

    let gl = 0

    let glf = 0

    let inte = cantadh + 1

    

    gl = 2000


    if (inte < 4) {

        glf = gl

    } else if (inte >= 4 && inte <= 6) {

        glf = gl + 1500

    } else if (inte >= 7) {

        glf = gl + 2000

    }


    return glf





}