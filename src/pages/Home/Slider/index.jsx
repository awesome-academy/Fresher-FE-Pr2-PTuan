import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.scss";
import slider_1 from "../../../assets/Slider/slider_1.webp";
import slider_2 from "../../../assets/Slider/slider_2.webp";
import slider_3 from "../../../assets/Slider/slider_3.webp";
import slider_4 from "../../../assets/Slider/slider_4.webp";

const Slider = () => {
  const srcImg = [slider_1, slider_2, slider_3, slider_4];
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {srcImg.map((img, index) => (
          <SwiperSlide key={index}>
            <a href="#!">
              <img className="header-Slider w-100" src={img} alt="slider" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
