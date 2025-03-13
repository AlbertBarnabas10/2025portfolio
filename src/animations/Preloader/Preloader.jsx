import React, { useRef } from 'react';
import './preloader.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Preloader = () => {
  const preloaderBgRef = useRef(null);
  const spanRef = useRef(null);
  
  useGSAP(() => {
    const master = gsap.timeline();
    
    gsap.set(spanRef.current, {
      yPercent: 100, 
    });

    gsap.set(preloaderBgRef.current, {
      yPercent: 0,
    });
    
    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out'
      }
    });

    tl.to(spanRef.current, {
      yPercent: 0,
      delay: 0.5
    })
    .to(spanRef.current, {
      yPercent: -105,
      delay: 1
    })
    .to(preloaderBgRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: 'power4.out'
    });
    
    master.add(tl);
    
    return () => {
      master.kill();
    };
  }, { scope: "preloader" }); // Optional scope for debugging

  return (
    <div className='preloader'>
      <p className="preloader-text custom-font">
        <span ref={spanRef}>Just an ordinary designer.</span>
      </p>
      <div ref={preloaderBgRef} className="preloader-bg"></div>
    </div>
  );
};

export default Preloader;