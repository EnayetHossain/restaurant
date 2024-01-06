import { Link } from "react-router-dom";
import SliderButton from "../../../Components/SliderButton/SliderButton";

const Recommended = () => {
  //   const [slidePosition, setSlidePosition] = useState({
  //     isFirst: true,
  //     isLast: false,
  //   });
  //   const newRef = useRef(null);

  //   const handleNext = (slideRef) => {
  //     slideRef.current.swiper.slideNext();
  //   };

  //   const handlePrev = (slideRef) => {
  //     slideRef.current.swiper.slidePrev();
  //   };

  //   const onSlideChange = (swiper) => {
  //     setSlidePosition({
  //       isFirst: swiper.isBeginning,
  //       isLast: swiper.isEnd,
  //     });
  //   };

  return (
    <section className="desktop-max">
      <div className="d-flex justify-content-between align-items-center">
        <span className="fs-1 fw-bold">Recommended</span>
        <div className="d-flex justify-content-between align-items-center">
          <Link
            className="fs-3 font-medium mr-4 text-accent-color"
            to={"/add-more"}
          >
            AddMore
          </Link>

          {/* <div className="d-flex justify-content-between align-items-center">
              <button
                onClick={() => handlePrev(slideRef)}
                className={`${isFirst ? "disabled" : ""}`}
              >
                <FaChevronLeft></FaChevronLeft>
              </button>
              <button
                onClick={() => handleNext(slideRef)}
                className={`${isLast ? "disabled" : ""}`}
              >
                <FaChevronRight></FaChevronRight>
              </button>
            </div> */}
          <SliderButton></SliderButton>
        </div>
      </div>

      {/* <Swiper
        slidesPerView={2}
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
      >
        <SwiperSlide>
          <SliderContent></SliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent></SliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent></SliderContent>
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
};

export default Recommended;
