import * as Images from "../assets/services/Images";
import { GetCards } from "../data/dataCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Servicios = () => {
  const services = GetCards();

  return (
    <>
      <Swiper
        slidesPerView={1}
        cssMode={true}
        direction="horizontal"
        modules={[Autoplay]}
        className="h-full overflow-hidden"
        autoplay={{
          delay: 800000,
          disableOnInteraction: false,
        }}
        /* data-aos="flip-left"
        data-aos-once="true"
        data-aos-delay="500"
        data-aos-duration="1000" */
      >
        {services.map((s, index) => {
          const ServiceImage = Images[s.serviceImage]; // Access the correct component from the imported Images
          const ServiceBg = Images[s.serviceBg]; // Access the correct component from the imported bg Images

          return (
            <SwiperSlide key={index}>
              <p className="flex justify-center items-center text-lg font-bold z-[2] h-[10%] w-full text-center bg-black text-white">{s.title}</p>
              <div className={`services-image-cont w-full h-[80%] translate-y-4 px-8 flex justify-center items-center relative text-center overflow-hidden -z-10 services${index}`}>
                <div className="services-svg flex w-[80%] h-[90%] translate-y-4 scale-[0.9] items-center content-center overflow-visible justify-center rounded-lg">
                  {ServiceImage && (
                    <ServiceImage className="services-img absolute max-h-[130%] overflow-visible" />
                  )}
                  {ServiceBg && (
                    <ServiceBg className="services-bg max-h-[130%] absolute overflow-visible" />
                  )}
                </div>
                <p className={`services-text services-text${index} z-[1] h-max rounded-lg p-4 max-w-[30%] bg-black odd:translate-x-[-3rem] text-white right-0`}>{s.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Servicios;
