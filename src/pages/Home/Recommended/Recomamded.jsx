import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import MyModal from "../../../Components/Modal/Modal";
import Slider from "../../../Components/Slider/Slider";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import { AppContext } from "../../../Context/AppProvider";
import useDataFetching from "../../../hooks/useDataFetching";

const Recommended = () => {
  const [show, setShow] = useState(false);
  const { reset } = useForm();

  const {
    isRecommendedFirst,
    isRecommendedLast,
    recommendedRef,
    onRecommendedSlideChange,
  } = useContext(AppContext);

  // State for managing the locally added items
  const [localItems, setLocalItems] = useState([]);

  const filterCondition = (item) => item.IsRecommended === true;
  const initialRecommendedData = useDataFetching(filterCondition);

  const recommendedData = [...initialRecommendedData, ...localItems];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    // Generate unique Id
    data.Id = Date.now().toString();
    data.IsPopular = false;
    data.IsRecommended = true;

    // Update the state for locally added items
    setLocalItems((prevItems) => [...prevItems, data]);
    console.log(recommendedData);
    // Reset form and hide the pop-up
    reset();
    setShow(false);
  };

  return (
    <section className="desktop-max !mt-24 !mb-72">
      <MyModal
        show={show}
        handleClose={handleClose}
        submit={onSubmit}
      ></MyModal>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fs-1 fw-bold">Recommended</span>
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
