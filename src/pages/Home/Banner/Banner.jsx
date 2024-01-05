import "./Banner.css";

const Banner = () => {
  return (
    <header className="my-32 md:my-52 px-3">
      <div className="desktop-max bg-secondary-color text-white rounded-[1.8em] hero-container">
        <div className="hero-content">
          <h1 className="text-6xl font-semibold break-words max-w-[40rem]">
            Deliver Food To Your Door Step|
          </h1>
          <p className="text-3xl hero-description">
            Authentic Food|,Quick Service Fast Delivery
          </p>
        </div>

        <div className="hero-image">
          <img className="w-full" src="/images/Image1.png" alt="hero image" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
