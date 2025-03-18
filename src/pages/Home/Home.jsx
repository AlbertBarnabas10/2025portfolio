import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Preloader from "../../animations/Preloader/Preloader";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router";
import '../../fonts/chic-avenue/ChicAvenue-Regular.otf'

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
     <section className="home w-full px-20">
      <div className="home-content w-full grid grid-cols-2 gap-4 items-stretch min-h-[90vh]">
        <div className="left-content w-full flex items-center justify-center">
          <p className="hero-head">Hello, I'm <br/> Albert Barnabas.</p>
        </div>
        <div className="right-content w-full flex items-center justify-center">
          <p className="text-md max-w-[80%]">
          <span>
            I’m Albert, currently working as a freelance designer focusing on website design. I love crafting cool interfaces. My goal is to become a Product Designer or UX Engineer and, hey, maybe even start my own creative agency down the road!
          </span>
          <span>
            I admire those who can code, transitioning from visual to interactive interfaces really caught my eyes. That’s why I’m half way learning too.
          </span>
          </p>
        </div>
      </div>
      <div className="home-footer w-full flex items-center justify-between gap-2">
        <div className="footer-left flex items-center gap-2">
          <img src="/svg/Flower.svg" className="w-6 h-6" />
          <p className="text-xs leading-tight">
            Open for any
            <br />
            collaborations and projects.
          </p>
        </div>
        <div className="footer-right">
          <div className="flex items-center gap-1">
            <Link to="/contact">Contact me</Link>
            <img src="/svg/arrowRU.svg" className="w-4 h-4" />
          </div>
          <div className="date flex items-center gap-2">
            <p className="text-xs">{timeString}</p>
            <p className="text-xs">[Jakarta, ID]</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
