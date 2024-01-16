import * as Images from "../assets/know-us/Images";
import { GetCards } from "../data/dataCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

const Servicios = () => {
  const services = GetCards();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-8 h-[50%] justify-center content-center items-center shadow-2xl overflow-hidden">
        {services.map((s, index) => {
          const ServiceImage = Images[s.serviceImage];
          const ServiceBg = Images[s.serviceBg];

          return (
            <div key={index} className="overflow-visible w-full md:w-[80%] lg:w-[40%]"
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-duration="1000"
            >
              <p className="flex justify-center items-center text-xl overflow-visible font-bold z-[2] h-[4rem] text-center bg-white py-2 w-full">
                {s.title}
              </p>
              <div
                className={`services-image-cont w-full flex flex-col justify-center items-center overflow-visible relative text-center z-10 services${index} bg-transparent`}
              >
                <div className="services-svg flex w-full h-[25rem]  items-center content-center overflow-visible justify-center rounded-xl shadow-2xl">
                  {ServiceImage && (
                    <ServiceImage className="services-img absolute max-h-[100%] overflow-visible" />
                  )}
                  {ServiceBg && (
                    <ServiceBg className="services-bg max-h-[130%] absolute overflow-visible" />
                  )}
                </div>
                <div
                  className={`services-text services-text${index} z-[1] text-base font-extralight p-2 overflow-visible rounded-lg max-w-[100%]`}
                >
                  <p className="services-text-desk shadow-xl md:h-[8rem] overflow-visible flex justify-center content-center items-center rounded-xl p-3 w-[95%] mx-auto border-2 text-white border-white">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Servicios;
