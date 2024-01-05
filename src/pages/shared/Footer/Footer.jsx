import { FaGoogle } from "react-icons/fa";
import { FaArrowRightLong, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-secondary-color py-24 md:py-12">
      <div className="desktop-max d-flex justify-content-between align-items-center">
        <div className="news-letter-container">
          <div>
            <div className="d-flex justify-content-between align-items-center search-bar  overflow-hidden rounded-xl md:rounded-[1.3em] bg-white pl-4 pr-2 w-full md:w-[88%] shadow-lg">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-[0.45em] outline-transparent"
              />

              <button
                type="button"
                className="d-flex align-items-center md:bg-accent-color text-secondary-color md:text-white rounded-none md:rounded-[0.8em] h-full py-3 pl-20 pr-10 fw-bold
               m-2"
              >
                Subscribe
                <FaArrowRightLong className="pl-4 text-5xl"></FaArrowRightLong>
              </button>
            </div>
          </div>

          <div className="mt-28 footer-content">
            <div>
              <div className="font-bold text-6xl py-9">
                pti<span className="text-accent-color">.</span>
              </div>

              <div>
                <p className="fw-bold">
                  Copyright&copy;Tripp. All Right Reserved{" "}
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-center mb-10 md:mb-0">
              <Link to={"/"} className="social-icon">
                <FaGoogle></FaGoogle>
              </Link>
              <Link to={"/"} className="social-icon">
                <FaTwitter></FaTwitter>
              </Link>
              <Link to={"/"} className="social-icon">
                <FaInstagram></FaInstagram>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[31rem] footer-img">
          <img className="w-full" src="/images/Image2.png" alt="footer image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
