/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AppContext } from "../../Context/AppProvider";
import "./SliderButton.css";

const SliderButton = ({ slideRef, popularFirst, popularLast }) => {
  const { handleNext, handlePrev } = useContext(AppContext);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        onClick={() => handlePrev(slideRef)}
        className={`${popularFirst ? "disabled" : ""}`}
      >
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button
        onClick={() => handleNext(slideRef)}
        className={`${popularLast ? "disabled" : ""}`}
      >
        <FaChevronRight></FaChevronRight>
      </button>
    </div>
  );
};

export default SliderButton;
