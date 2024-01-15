import "./Servicios.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GetCommercial } from "../../data/services/commercial";
import { GetAssistencial } from "../../data/services/assistencial";
import { useTranslationHook } from "../../hooks/useI18nTranslation";

export const Servicios = () => {
  const { t } = useTranslationHook();

  const commercial = GetCommercial();
  const assistencial = GetAssistencial();

  return (
    <div
      className="flex flex-col overflow-visible"
      id="servicios"
    >
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

          <div className="w-[60vw] flex flex-col gap-8 justify-center items-center lg:flex-col overflow-visible">

              <p
                className="text-xl mt-8 md:mt-0 font-bold text-black shadow-xl z-[4] py-4 px-8 bg-white flex justify-center items-center rounded-xl mb-[-3.5rem]"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-delay="200"
              >
                Servicios Corporativos
              </p>

              <Swiper
                slidesPerView={1}
                cssMode={true}
                loop={true}
                direction="horizontal"
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                className="swiper-cont swiper-cont w-full md:w-[100%] md:min-w-[18rem] rounded-xl shadow-2xl"
              >
                {commercial.map((card, index) => (
                  <SwiperSlide className="card overflow-hidden" key={index}>
                    <div className="swiper-card overflow-hidden bg-white h-[19.5rem] md:h-[26rem] border-solid ">
                      <div className="swiper-image-cont flex content-center items-center">
                        <div
                          className={`swiper-image-bg image${card.id} h-[12rem] md:h-[15rem]`}
                          alt={card.title}
                        />
                      </div>
                      <style>
                        {`
                                    .swiper-button-next,
                                    .swiper-button-prev {
                                        color: #fff;
                                        transform: translateY(-4rem);
                                        opacity: 0.5;
                                    }

                                    .swiper-button-next:hover,
                                    .swiper-button-prev:hover {
                                        opacity: 1;
                                    }

                                    .image${card.id} {
                                        background-image: url(${card.background});
                                        width: 100%;
                                        margin-left: auto;
                                        margin-right: auto;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                  
                                    .swiper-image-char {
                                      width: 100%;
                                      height: 15rem;
                                      background-color: rgb(0 255 210 / 17%);
                                      opacity: 0.9;
                                      border-radius: 50%;
                                    }
                                  
                                    .card${card.id} {
                                      background-image: url(${card.img});
                                      background-size: contain;
                                      background-repeat: no-repeat;
                                      background-position: center;
                                    }
                                  
                                    .information-cont {
                                        width: 100dvw;
                                        height: 100vh;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background-color: white;
                                    }
                                `}
                      </style>
                      <div className="card-information flex flex-col items-center">
                        <h3 className="px-5 pt-5 text-xl font-bold text-center pb-1">
                          {card.title}
                        </h3>
                        <p className="px-5 pb-5 leading-4 text-center">
                          {card.text}
                        </p>
                        <button
                          type="button"
                          className="bg-lime-300 w-[9.5rem] text-s p-1 hidden md:block"
                        >
                          Próximamente...
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
           

              <p
                className="text-xl mt-8 md:mt-0 font-bold text-black shadow-xl z-[4] py-4 px-8 bg-white flex justify-center items-center rounded-xl mb-[-3.5rem]"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-delay="200"
              >
                Servicios Asistenciales
              </p>

              <Swiper
                slidesPerView={1}
                cssMode={true}
                direction="horizontal"
                spaceBetween={20}
                modules={[Autoplay]}
                loop={true}

                autoplay={{
                  delay: 3600,
                  disableOnInteraction: false,
                }}
                className="swiper-cont swiper-cont w-full md:w-[100%] md:min-w-[18rem] rounded-xl shadow-2xl"
              >
                {assistencial.map((card, index) => (
                  <SwiperSlide className="card overflow-hidden" key={index}>
                    <div className="swiper-card overflow-hidden bg-white h-[19.5rem] md:h-[26rem] border-solid ">
                      <div className="swiper-image-cont flex content-center items-center">
                        <div
                          className={`swiper-image-bg image${card.id} h-[12rem] md:h-[15rem]`}
                          alt={card.title}
                        />
                      </div>
                      <style>
                        {`
                                    .swiper-button-next,
                                    .swiper-button-prev {
                                        color: #fff;
                                        transform: translateY(-4rem);
                                        opacity: 0.5;
                                    }

                                    .swiper-button-next:hover,
                                    .swiper-button-prev:hover {
                                        opacity: 1;
                                    }

                                    
                                  
                                    .swiper-image-char {
                                      width: 100%;
                                      height: 15rem;
                                      background-color: rgb(0 255 210 / 17%);
                                      opacity: 0.9;
                                      border-radius: 50%;
                                    }
                                  
                               
                                  
                                    .information-cont {
                                        width: 100dvw;
                                        height: 100vh;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background-color: white;
                                    }
                                `}
                      </style>
                      <div className="card-information flex flex-col items-center">
                        <h3 className="px-5 pt-5 text-xl font-bold text-center pb-1">
                          {card.title}
                        </h3>
                        <p className="px-5 pb-5 leading-4 text-center">
                          {card.text}
                        </p>
                        <button
                          type="button"
                          className="bg-lime-300 w-[9.5rem] text-s p-1 hidden md:block"
                        >
                          Próximamente...
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
   
          </div>
        </div>
      </div>
    </div>
  );
};
