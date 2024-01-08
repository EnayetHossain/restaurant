/* eslint-disable react/prop-types */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderContent from "../SliderContent/SliderContent";
import "./Slider.css";

const Slider = ({ slideRef, onSlideChange, data }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      className={"mySwiper"}
      ref={slideRef}
      onSlideChange={onSlideChange}
      pagination={{
        el: ".swiper-paginations",
        type: "fraction",
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },

        530: {
          slidesPerView: 3,
        },

        710: {
          slidesPerView: 4,
        },

        950: {
          slidesPerView: 5,
        },

        1121: {
          spaceBetween: 20,
        },
      }}
    >
      {data?.map((dt) => (
        <SwiperSlide key={dt.Id}>
          <SliderContent data={dt}></SliderContent>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
