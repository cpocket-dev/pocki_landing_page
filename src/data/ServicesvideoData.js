import Inmobiliaria from "../components/Servicios/inmobiliaria.mp4"


export const getVideoData = (name) => {
    switch (name) {
      case "VideoTest":
        return Inmobiliaria;
    }
  };