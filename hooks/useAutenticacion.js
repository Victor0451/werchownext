import React, { useEffect, useState } from "react";

function useAutenticacion(usuario) {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = () => {
      if (usuario.length > 0) {
        guardarUsuarioAutenticado(usuario);
      } else {
        guardarUsuarioAutenticado(null);
      }
    };

    return () => unsuscribe();
  }, []);

  return usuarioAutenticado;
}

export default useAutenticacion;
