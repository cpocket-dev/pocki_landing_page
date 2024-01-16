import "./Inicio.css";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslationHook } from "../../hooks/useI18nTranslation";
import Lottie from "react-lottie";
import Chart from "../../assets/animatedIcons/chart.json";
import Analitycs from "../../assets/animatedIcons/analytics.json";
import Articles from "../../assets/animatedIcons/articles.json";
import Whatsapp from "../../assets/animatedIcons/whatsapp.json";

const Inicio = () => {
  const { t } = useTranslationHook();

  const chartStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <main
        className="main-cont overflow-hidden pt-[5rem] h-[110vh] md:h-[110vh] lg:h-screen text-white flex flex-col justify-center items-center relative mb-6 pb-10"
        id="main"
      >
        <div className="scale-y-50 translate-y-[-1.5rem] md:scale-y-75 md:translate-y-[-1rem] lg:scale-y-100 lg:translate-y-100 custom-shape-divider-top-1705105930 absolute top-[4rem]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="main flex flex-col-reverse lg:flex-row-reverse items-center h-full lg:h-[70%] w-[100vw] pt-12 lg:pt-0 justify-end lg:justify-center content-center z-[1] overflow-visible mb-8 relative">
          <div className="mockup overflow-hidden flex w-full bottom-0 lg:w-[50%] justify-center items-center content-center xl:w-[40%] absolute lg:relative before:rounded-t-xl  before:content-[''] border-b-[3px] border-white rounded-b-xl h-[60%] lg:h-full before:w-[95vw] sm:before:w-[80vw] lg:before:w-full before:mx-auto before:h-[60%] before:bottom-0 before:bg-black before:bg-opacity-70 before:absolute">
            <div className="mockup-img absolute left-2 md:relative flex opacity-0 translate-y-[5rem] overflow-visible bg-contain sm:bg-contain h-full w-full bg-[bottom] bg-no-repeat"></div>
            <div className="custom-shape-divider-bottom-1705093195 drop-shadow-2xl opacity-95 border-none rounded-xl w-full mx-auto">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>

          <div className="main-info w-full overflow-visible lg:h-full main-section lg:w-[40%]">
            <p
              className="main-info-text text-center text-3xl font-extrabold px-4 text-white lg:text-5xl w-full md:w-full overflow-visible"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="200"
            >
              {t("inicio.titulo")}
            </p>
            <p
              className="main-info-sub text-xl text-center w-full overflow-visible text-white px-6"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="300"
            >
              {" "}
              {t("inicio.textoSpan1")}
              <span>{t("inicio.texto")}</span> {t("inicio.textoSpan2")}{" "}
            </p>

            <div
              className="main-info-cta relative overflow-visible w-[70%]"

            >
              <a
                className="cta-button cta1 border-glow h-[10rem] w-[10rem] lg:h-[13rem] lg:w-[13rem]  text-center p-2 overflow-visible flex justify-center items-center"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-delay="400"
                href="https://wa.link/mc6k5u"
                target="_blank"
                rel="noopener noreferrer"
              >
               {/*  <div className="main-image-box4" />
                <div className="cta-content h-full w-full flex gap-4 items-center justify-center relative content-center text-2xl stroke flex-col pt-4">
                  <FaWhatsapp className="logo-wpp text-9xl translate-y-[-0.5rem] absolute mx-auto w-full opacity-40" />
                </div> */}
                <Lottie
                  options={{ animationData: Whatsapp }}
                  speed={1.14}
                  style={chartStyle}
                />
                <div className="cta-glow absolute"></div>
              </a>
              
            </div>
          </div>
        </div>
        <div className="brands-cont w-full h-[5rem] bg-white flex justify-center items-center gap-[1rem] opacity-0 ">
          <div className="brand" />
        </div>

        <div className="rotate-180 scale-y-50 translate-y-[1.5rem] md:scale-y-75 md:translate-y-[1rem] lg:scale-y-100 lg:translate-y-100 custom-shape-divider-bottom-1705183416 absolute bottom-[-1rem]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </main>

      <div className="stats-icons w-full flex justify-center gap-x-4 gap-y-12 flex-wrap items-center content-center py-4 z-20 h-max bg-white overflow-visible translate-y-14 lg:w-[75vw] mx-auto pointer-events-none select-none">
        <div className="icon-cont h-max w-[10rem] sm:w-[30%] overflow-visible flex flex-col justify-center items-center content-center gap-4">
          <div className="icon h-[5rem] bg-white rounded-full p-2 aspect-square border-4 border-green-500 shadow-2xl flex ">
            <Lottie
              options={{ animationData: Chart }}
              speed={0.7}
              style={chartStyle}
            />
          </div>
          <div className="stat-text  text-green-500 text-center overflow-visible">
            <p className="text-5xl font-extrabold overflow-visible">+30%</p>
            <p className="font-semibold overflow-visible">Productividad</p>
          </div>
        </div>

        <div className="icon-cont h-max w-[10rem] sm:w-[30%] overflow-visible flex flex-col justify-center items-center content-center gap-4">
          <div className="icon h-[5rem] bg-white rounded-full p-2 aspect-square border-4 border-green-500 shadow-2xl flex ">
            <Lottie
              options={{ animationData: Analitycs }}
              speed={0.7}
              style={chartStyle}
            />
          </div>
          <div className="stat-text  text-green-500 text-center overflow-visible">
            <p className="text-5xl font-extrabold overflow-visible">25K+</p>
            <p className="font-semibold overflow-visible">Interacciones</p>
          </div>
        </div>

        <div className="icon-cont h-max w-[10rem] sm:w-[30%] overflow-visible flex flex-col justify-center items-center content-center gap-4">
          <div className="icon h-[5rem] bg-white rounded-full p-2 aspect-square border-4 border-green-500 shadow-2xl flex ">
            <Lottie
              options={{ animationData: Articles }}
              speed={0.9}
              style={chartStyle}
            />
          </div>
          <div className="stat-text  text-green-500 text-center overflow-visible">
            <p className="text-5xl font-extrabold overflow-visible">10+</p>
            <p className="font-semibold overflow-visible">Artículos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
