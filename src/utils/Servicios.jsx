import * as Images from "../assets/services/Images";
import { GetCards } from "../data/dataCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from 'react';

const Servicios = () => {
  const services = GetCards();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {windowWidth > 1024 ? (
        <Swiper
          slidesPerView={1}
          cssMode={true}
          direction="horizontal"
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true, disableOnInteraction: false }}
          className="h-full overflow-hidden w-full max-w-[70%] bg-zinc-100 rounded-xl"
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          {services.map((s, index) => {
            const ServiceImage = Images[s.serviceImage];
            const ServiceBg = Images[s.serviceBg];

            return (
              <SwiperSlide key={index}>
                <p className="flex justify-center items-center text-xl translate-y-1 shadow-lg font-bold z-[2] h-[10%] w-full text-center bg-white">
                  {s.title}
                </p>
                <div
                  className={`services-image-cont w-full h-[90%] px-8 flex justify-center items-center relative text-center overflow-hidden -z-10 services${index}`}
                >
                  <div className="services-svg flex w-[80%] h-[90%] scale-[0.9] items-center content-center overflow-visible justify-center rounded-xl shadow-2xl">
                    {ServiceImage && (
                      <ServiceImage className="services-img absolute max-h-[130%] overflow-visible" />
                    )}
                    {ServiceBg && (
                      <ServiceBg className="services-bg max-h-[130%] absolute overflow-visible" />
                    )}
                  </div>
                  <p
                    className={`services-text services-text${index} z-[1] text-xl font-extralight h-max rounded-lg p-4 max-w-[30%] bg-green-500 shadow-2xl border odd:translate-x-[-3rem] text-white right-0`}
                  >
                    {s.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="flex flex-col gap-8">
          {services.map((s, index) => {
            const ServiceImage = Images[s.serviceImage];
            const ServiceBg = Images[s.serviceBg];

            return (
              <div key={index} className="rounded-xl">
                <p className="flex justify-center items-center text-xl shadow-lg font-bold z-[2] h-[10%] w-full text-center bg-white py-2 w-full">
                  {s.title}
                </p>
                <div
                  className={`services-image-cont w-full h-[90%] p-8 flex flex-col justify-center items-center relative text-center overflow-hidden -z-10 services${index} bg-zinc-100`}
                >
                  <div className="services-svg flex w-full h-[90%] scale-[0.9] items-center content-center overflow-visible justify-center rounded-xl shadow-2xl">
                    {ServiceImage && (
                      <ServiceImage className="services-img absolute max-h-[130%] overflow-visible" />
                    )}
                    {ServiceBg && (
                      <ServiceBg className="services-bg max-h-[130%] absolute overflow-visible" />
                    )}
                  </div>
                  <p
                    className={`services-text services-text${index} z-[1] text-xl font-extralight h-max rounded-lg p-4 max-w-[80%] bg-green-500 shadow-2xl border odd:translate-x-[-3rem] text-white right-0`}
                  >
                    {s.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Servicios;
