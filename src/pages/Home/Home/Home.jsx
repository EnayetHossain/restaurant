import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import Recommended from "../Recommended/Recomamded";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Popular></Popular>
      <Recommended></Recommended>
      <Footer></Footer>
    </div>
  );
};

export default Home;
