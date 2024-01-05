import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BiUser } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="desktop-max py-5 d-flex justify-content-between align-items-center">
        <div className="font-bold text-5xl">pti.</div>

        <div className="d-flex justify-content-center align-items-center w-full bar">
          <div className="d-flex justify-content-between align-items-center search-bar bg-white overflow-hidden rounded-[0.5em]">
            <CgSearch className="pl-2 text-4xl text-accent-color"></CgSearch>
            <input
              type="search"
              placeholder="Search Audiobook"
              className="p-[0.45em]"
            />
          </div>

          <div className="drop-down-container">
            <Dropdown onClick={() => setShow(!show)}>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="drop-down fs-4 text-uppercase fw-bold d-flex justify-content-between align-items-center ml-4"
              >
                Menu
                <FaChevronDown
                  className={`text-secondary-color transition-all duration-300 ease-in-out ${
                    show ? "rotate-0" : "rotate-180"
                  }`}
                ></FaChevronDown>
              </Dropdown.Toggle>

              <Dropdown.Menu className="fs-4 drop mt-2 border-0">
                <Dropdown.Item className="py-2" href="/">
                  Home
                </Dropdown.Item>
                <Dropdown.Item className="py-2" href="/details">
                  Details
                </Dropdown.Item>
                <Dropdown.Item className="py-2" href="/category">
                  Category
                </Dropdown.Item>
                <Dropdown.Item className="py-2" href="/my-favorite">
                  My Favorite
                </Dropdown.Item>
                <Dropdown.Item className="py-2" href="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="py-2" href="/login">
                  Login/Sign Up
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="hidden md:block">
          <Link
            to="/profile"
            className="bg-accent-color w-16 h-16 fs-1 rounded-full text-white d-flex justify-content-center align-items-center"
          >
            <BiUser></BiUser>
          </Link>
        </div>
      </nav>
      <hr className="divider" />
    </>
  );
};

export default Navbar;
