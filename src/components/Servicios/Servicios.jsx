import "./Servicios.css";

import { useTranslationHook } from "../../hooks/useI18nTranslation";
import { ServiciosAsistencial } from "./ServiciosAsistencial";
import { ServiciosCorporativo } from "./ServiciosCorporativo";

export const Servicios = () => {
  const { t } = useTranslationHook();




  return (
    <div className="flex flex-col overflow-visible" id="servicios">
      <div className="information relative flex flex-col h-full justify-center items-center gap-8 pt-4 pb-12 xl:overflow-hidden">
        <h2
          className="services-title shadow-2xl font-extrabold text-2xl md:text-3xl py-4 text-white flex justify-center mt-16 items-center overflow-visible z-[1] w-[100dvw] bg-black"
          data-aos="fade-left"
          data-aos-once="true"
        >
          {t("servicios.nombreSeccion")}
        </h2>
        <div className="info overflow-visible gap-10 flex-col lg:flex-col w-[95dvw] md:w-[70vw] xl:w-[90vw] my-auto flex items-center content-center justify-center pb-4">
          <div className="md:min-w-[23rem] flex flex-col mx-auto items-center overflow-hidden justify-center content-center w-[full]">
            <h2
              className="font-extrabold text-black w-full mb-4 text-2xl md:text-3xl md:px-8 text-center overflow-hidden"
              data-aos="fade-left"
              data-aos-once="true"
            >
              {t("servicios.titulo")} <br></br>
              <span className="text-green-500">
                {t("servicios.tituloSpan")}.
              </span>
            </h2>
            <p
              className="md:px-6 w-full text-base text-zinc-800 text-center overflow-y-hidden"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="200"
            >
              {t("servicios.texto")}
            </p>
          </div>

          <div className="w-[95vw] lg:w-[70vw] h-max flex flex-col gap-8 justify-center items-center lg:flex-col overflow-visible">
           <ServiciosCorporativo />
            <ServiciosAsistencial />
          </div>
        </div>
      </div>
    </div>
  );
};
