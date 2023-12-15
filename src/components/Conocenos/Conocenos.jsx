import { GetCards } from "../../data/dataCards";
import AsideCard from "../../utils/AsideCard";
import { useTranslationHook } from "../../hooks/useI18nTranslation";

import "./Conocenos.css";

const Conocenos = () => {
  const dataCards = GetCards();
  const { t } = useTranslationHook();

  return (
    <>
      <div
        className="features-cont w-full flex flex-col items-center pb-12 h-max md:h-[120vh] overflow-visible"
        id="conocenos"
      >
        <div className="features-top flex flex-col justify-start content-center items-center pt-20 pb-12 overflow-visible">
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

        <div className="max-w-[70rem] flex flex-row flex-wrap items-center gap-4 overflow-visible content-center justify-center">
          {dataCards.map((card) => (
            <AsideCard
              key={card.id}
              id={card.id}
              url={card.url}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Conocenos;
