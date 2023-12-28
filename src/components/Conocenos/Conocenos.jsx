import { useTranslationHook } from "../../hooks/useI18nTranslation";

import "./Conocenos.css";
import Services from "../../utils/Servicios";

const Conocenos = () => {
  const { t } = useTranslationHook();

  return (
    <>
      <div
        className="features-cont w-full flex flex-col items-center pb-12 h-max lg:h-[100vh] overflow-visible"
        id="conocenos"
      >
        <div className="features-top flex flex-col justify-start content-center items-center pt-20 pb-4 overflow-visible">
          <h2
            className="info-title mb-8 font-extrabold text-2xl md:text-3xl overflow-visible z-[1] w-[100dvw] pb-4 pt-4 bg-black text-white text-center"
            data-aos="fade-left"
            data-aos-once="true"
          >
            {t("conocenos.nombreSeccion")}
          </h2>

          <div className="information-info flex-col flex w-[95dvw] md:w-[70dvw] items-center justify-center content-center gap-4">
            <h2
              className="text-white text-center font-extrabold m-auto text-2xl overflow-visible"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="100"
            >
              {t("conocenos.titulo")}{" "}
              <p className="text-green-400">{t("conocenos.tituloSpan")}</p>
            </h2>
            <p
              className="text-zinc text-center leading-[1.5rem] overflow-visible text-zinc-300"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="100"
            >
              {" "}
              {t("conocenos.texto")}{" "}
            </p>
          </div>
        </div>

        <div
          className="services-display h-full flex w-full"
          data-aos="zoom-out"
          data-aos-once="true"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <Services />
        </div>
      </div>
    </>
  );
};

export default Conocenos;
