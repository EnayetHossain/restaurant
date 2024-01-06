/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [popularSlidePosition, setPopularSlidePosition] = useState({
    isFirst: true,
    isLast: false,
  });

  const [recommendedSlidePosition, setRecommendedSlidePosition] = useState({
    isFirst: true,
    isLast: false,
  });

  const popularRef = useRef(null);
  const recommendedRef = useRef(null);

  const onPopularSlideChange = (swiper) => {
    setPopularSlidePosition({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const onRecommendedSlideChange = (swiper) => {
    setRecommendedSlidePosition({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const handleNext = (slideRef) => {
    slideRef.current.swiper.slideNext();
  };

  const handlePrev = (slideRef) => {
    slideRef.current.swiper.slidePrev();
  };

  const appInfo = {
    isPopularFirst: popularSlidePosition.isFirst,
    isPopularLast: popularSlidePosition.isLast,
    isRecommendedFirst: recommendedSlidePosition.isFirst,
    isRecommendedLast: recommendedSlidePosition.isLast,
    onPopularSlideChange,
    onRecommendedSlideChange,
    handleNext,
    handlePrev,
    popularRef,
    recommendedRef,
  };
  return (
    <>
      <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
