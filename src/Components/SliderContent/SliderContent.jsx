/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SliderContent.css";

const SliderContent = ({ data }) => {
  return (
    <div className="card">
      <div className="slider-img-wrapper">
        <img src={data.ImageUrl} alt={data.Name} />
      </div>

      <div className="mt-3 text-center break-words">{data.Name}</div>
    </div>
  );
};

export default SliderContent;
