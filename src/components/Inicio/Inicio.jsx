import "./Inicio.css";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslationHook } from "../../hooks/useI18nTranslation";

const Inicio = () => {

  const { t } = useTranslationHook();

  return (
    <main className="main-cont" id="main">
      <div className="main lg:flex-row lg:h-[70%]">
        <div className="main-image main-section lg:w-[30%]">
          <div
            className="main-image-box"
            data-aos="fade-down"
            data-aos-once="true"
          />
          <div
            className="main-image-backdrop"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-delay="450"
            alt="pocki"
          >
            <div
              className="main-image-box2"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-delay="100"
              alt=""
            />
          </div>
        </div>
        <div className="main-info main-section lg:w-[40%]">
          <p
            className="text-sm text-center text-gray-400 overflow-visible"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {t("inicio.subtitulo")}
          </p>
          <p
            className="main-info-text text-center md:text-5xl md:w-full"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="200"
          >
            {t("inicio.titulo")}
          </p>
          <p
            className="main-info-sub text-xl text-center w-full overflow-visible"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="300"
          >
            {" "}
            <span>{t("inicio.textoSpan1")}</span>{t("inicio.texto")}{" "}
            <span> {t("inicio.textoSpan2")}</span>{" "}
          </p>
          <div className="main-info-cta overflow-visible w-[70%]">
            <a
              className="cta-button cta1 h-[15rem] shadow-xl text-center p-8 overflow-visible flex justify-center items-center"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="400"
              href="https://wa.link/mc6k5u"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="main-image-box4" />
              <p className="cta-content h-full w-full flex gap-4 items-center justify-center text-2xl flex-col pt-4">
                {" "}
                {t("inicio.cta")}{" "}
                <FaWhatsapp className="logo-wpp text-7xl" />
              </p>{" "}
              <div className="cta-glow absolute"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="brands-cont">
        <div className="brand" />
      </div>
    </main>
  );
};

export default Inicio;
