import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router";
import "../../fonts/chic-avenue/ChicAvenue-Regular.otf";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const linkRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const link = linkRef.current;
    const arrow = arrowRef.current;

    const onEnter = () => {
      gsap.to(arrow, {
        x: 6,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(arrow, {
        x: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    if (link) {
      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);
    }

    return () => {
      if (link) {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      }
    };
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <section className="home w-full px-20">
        <div className="home-content flex flex-col items-center justify-center min-h-[90vh]">
          <div>
            <p>
              <span className="font-bold">Hello</span> — I'm Albert Barnabas,
              UI/UX designer{" "}
              <a
                className="text-[#EF5214] italic"
                href="https://www.sefasgroup.com"
                target="_blank"
              >
                @Sefasgroup
              </a>
              .
            </p>
            <p>
              Designing clean, user-centered interfaces for websites and
              products.
            </p>
            <p className="mb-2">Minimal, functional, and built with purpose.</p>

            <a
              ref={linkRef}
              href="/work"
              className="flex items-center gap-2 text-base cursor-pointer hover:text-[#EF5214]"
            >
              Explore Work
              <img
                ref={arrowRef}
                src="/svg/right2.svg"
                className="w-4 h-4 opacity-0"
                alt=""
              />
            </a>
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
              <Link className="text-sm" to="/contact">
                Contact me
              </Link>
              <img src="/svg/arrowRU.svg" className="w-5 h-5" />
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
