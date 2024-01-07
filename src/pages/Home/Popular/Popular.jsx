import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import MyModal from "../../../Components/Modal/Modal";
import Slider from "../../../Components/Slider/Slider";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import { AppContext } from "../../../Context/AppProvider";
import useDataFetching from "../../../hooks/useDataFetching";
import "./Popular.css";

const Popular = () => {
  const [show, setShow] = useState(false);

  // State for managing the locally added items
  const [localItems, setLocalItems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { onPopularSlideChange, popularRef, isPopularFirst, isPopularLast } =
    useContext(AppContext);

  // Fetch initial data from the database
  const filterCondition = (item) => item.IsPopular === true;
  const initialPopularData = useDataFetching(filterCondition);

  // Combine the initial data with locally added items
  const popularData = [...initialPopularData, ...localItems];

  const onSubmit = (data) => {
    // Generate unique Id
    data.Id = Date.now().toString();
    data.IsPopular = true;
    data.IsRecommended = false;

    // Update the state for locally added items
    setLocalItems((prevItems) => [...prevItems, data]);

    // Reset form and hide the pop-up
    document.getElementById("submission-form").reset();
  };

  return (
    <section className="desktop-max">
      <MyModal
        show={show}
        handleClose={handleClose}
        submit={onSubmit}
      ></MyModal>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fs-1 font-normal">Popular</span>
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="fs-3 font-medium mr-4 text-accent-color"
            onClick={handleShow}
          >
            AddMore
          </button>

          <SliderButton
            slideRef={popularRef}
            popularFirst={isPopularFirst}
            popularLast={isPopularLast}
          ></SliderButton>
        </div>
      </div>

      <Slider
        data={popularData}
        slideRef={popularRef}
        onSlideChange={onPopularSlideChange}
      ></Slider>
    </section>
  );
};

export default Popular;
