import React from "react";
import Preloader from "../../animations/Preloader/Preloader";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* <Preloader/> */}
      <Navbar/>
    <div className="home w-full h-screen bg-blue-50">
      <div className="home-content w-full flex items-center h-full">
        <p className="text-5xl">Hello I'm Albert Barnabas.</p>
      </div>
    </div>
    </>
  );
};

export default Home;
