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

    await axios.post(`${ip}api/sgi/historialaccionesreghistorial`, historial)
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

export const registrarHistorialAprobacion = async (data) => {
    const historial = {
        operador: user.usuario,
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
