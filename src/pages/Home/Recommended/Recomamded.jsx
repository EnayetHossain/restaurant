/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import MyModal from "../../../Components/Modal/Modal";
import Slider from "../../../Components/Slider/Slider";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import { AppContext } from "../../../Context/AppProvider";

const Recommended = ({ initialData }) => {
  const [show, setShow] = useState(false);
  const [localItems, setLocalItems] = useState([]);

  const recommendedFilter = (item) => item.IsRecommended === true;

  const {
    isRecommendedFirst,
    isRecommendedLast,
    recommendedRef,
    onRecommendedSlideChange,
  } = useContext(AppContext);

  const recommendedData = [...initialData, ...localItems].filter(
    recommendedFilter
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    // Generate unique Id
    data.Id = Date.now().toString();
    data.IsPopular = false;
    data.IsRecommended = true;

    // Update the state for locally added items
    setLocalItems((prevItems) => [...prevItems, data]);

    // Reset form and hide the pop-up
    document.getElementById("submission-form").reset();
  };

  return (
    <section className="desktop-max !mt-24 !mb-72">
      <MyModal
        show={show}
        handleClose={handleClose}
        submit={onSubmit}
      ></MyModal>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fs-1">Recommended</span>
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="fs-3 font-medium mr-4 text-accent-color"
            onClick={handleShow}
          >
            AddMore
          </button>

          <SliderButton
            slideRef={recommendedRef}
            popularFirst={isRecommendedFirst}
            popularLast={isRecommendedLast}
          ></SliderButton>
        </div>
      </div>

      <Slider
        data={recommendedData}
        slideRef={recommendedRef}
        onSlideChange={onRecommendedSlideChange}
      ></Slider>
    </section>
  );
};

export default Recommended;
