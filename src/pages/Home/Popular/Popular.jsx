import { useContext, useEffect, useState } from "react";
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

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = (item) => item.IsPopular === true;

    const getData = async () => {
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );

      const data = await response.json();
      setPopular(data.Items.filter(getPopular));
    };

    getData();
  }, []);

  return (
    <section className="desktop-max">
      <div className="d-flex justify-content-between align-items-center mb-3">
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
        data={popular}
        slideRef={popularRef}
        onSlideChange={onPopularSlideChange}
      ></Slider>
    </section>
  );
};

export default Popular;
