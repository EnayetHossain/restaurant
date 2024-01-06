import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SliderContent.css";

const SliderContent = () => {
  return (
    <div className="card">
      <div className="slider-img-wrapper">
        <img src="/images/4.jpg" alt="slider image" />
      </div>

      <div className="mt-3 text-center break-words">Name of the food</div>
    </div>
  );
};

export default SliderContent;
