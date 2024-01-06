import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../../../Components/Slider/Slider";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import { AppContext } from "../../../Context/AppProvider";

const Recommended = () => {
  const {
    isRecommendedFirst,
    isRecommendedLast,
    recommendedRef,
    onRecommendedSlideChange,
  } = useContext(AppContext);

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const getRecommended = (item) => item.IsRecommended === true;

    const getData = async () => {
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );

      const data = await response.json();

      setRecommended(data.Items.filter(getRecommended));
    };

    getData();
  }, []);

  return (
    <section className="desktop-max !mt-24 !mb-72">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fs-1 fw-bold">Recommended</span>
        <div className="d-flex justify-content-between align-items-center">
          <Link
            className="fs-3 font-medium mr-4 text-accent-color"
            to={"/add-more"}
          >
            AddMore
          </Link>

          <SliderButton
            slideRef={recommendedRef}
            popularFirst={isRecommendedFirst}
            popularLast={isRecommendedLast}
          ></SliderButton>
        </div>
      </div>

      <Slider
        data={recommended}
        slideRef={recommendedRef}
        onSlideChange={onRecommendedSlideChange}
      ></Slider>
    </section>
  );
};

export default Recommended;
