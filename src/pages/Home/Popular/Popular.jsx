import { useContext } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "../../../Components/Slider/Slider";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import { AppContext } from "../../../Context/AppProvider";
import "./Popular.css";

const Popular = () => {
  const { onPopularSlideChange, popularRef, isPopularFirst, isPopularLast } =
    useContext(AppContext);

  return (
    <section className="desktop-max !mb-36">
      <div className="d-flex justify-content-between align-items-center">
        <span className="fs-1 fw-bold">Popular</span>
        <div className="d-flex justify-content-between align-items-center">
          <Link
            className="fs-3 font-medium mr-4 text-accent-color"
            to={"/add-more"}
          >
            AddMore
          </Link>

          <SliderButton
            slideRef={popularRef}
            popularFirst={isPopularFirst}
            popularLast={isPopularLast}
          ></SliderButton>
        </div>
      </div>

      <Slider
        slideRef={popularRef}
        onSlideChange={onPopularSlideChange}
      ></Slider>
    </section>
  );
};

export default Popular;
