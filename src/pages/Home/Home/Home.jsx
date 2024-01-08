import useDataFetching from "../../../hooks/useDataFetching";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import Recommended from "../Recommended/Recomamded";
import "./Home.css";

const Home = () => {
  const initialData = useDataFetching();

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Popular initialData={initialData}></Popular>
      <Recommended initialData={initialData}></Recommended>
      <Footer></Footer>
    </div>
  );
};

export default Home;
