import Inmobiliaria from "../components/Servicios/inmobiliaria.mp4"  // ACOMODAR BIEN LAS RUTAS PARA LOS VIDEOS, LO DEJE AHI SOLAMENTE EN MODO DE PRUEBA


export const getVideoData = (name) => {
    switch (name) {
      case "VideoTest":
        return Inmobiliaria;
    }
  };