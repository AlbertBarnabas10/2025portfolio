import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Background",
    content:
      "I design for humans first, interfaces second. From early sketches to final pixels, my background in UI/UX is built on making digital feel natural. Every project I touch is shaped by empathy, intention, and just the right amount of whitespace.",
  },
  {
    title: "Approach",
    content:
      "No guesswork. No fluff. I listen, research, prototype, and refine. My process is clean, collaborative, and grounded in real user needs—because design isn’t decoration, it’s communication.",
  },
  {
    title: "Design Perspective",
    content:
      "Less, but better. I gravitate toward quiet design—interfaces that get out of the way and let people do what they came to do. I believe emotion can be built into subtle interactions, and that design should age gracefully.",
  },
  {
    title: "Services",
    content:
      "UI Design: I create layouts that breathe and elements that speak without shouting. Web Design: Fast, fluid, accessible. From portfolio sites to platforms. Mobile App Design: Seamless journeys in your palm—crafted for clarity and touch.",
  },
  {
    title: "A Bit About Me",
    content:
      "When I’m not designing, I’m probably: Googling the name of a color I just saw. Organizing my Figma layers like a maniac. Playing cozy games with questionable time management. I once designed a poster just to fix the spacing on a date. And yes, I do have a favorite sans-serif.",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -30,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    const sections = document.querySelectorAll(".about-section");
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#fdfcfa] text-zinc-800">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-80px] left-[10%] w-[280px] h-[280px] bg-orange-50 opacity-25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[5%] w-[220px] h-[220px] bg-violet-50 opacity-25 rounded-full blur-2xl"></div>
      </div>

      <div
        ref={containerRef}
        className="max-w-2xl mx-auto px-6 py-24 font-sans"
      >
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-light mb-24 text-zinc-700 tracking-tight leading-tight font-serif"
        >
          A little about me
        </h1>

        <div className="space-y-32">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="about-section transition-all duration-300 px-2"
            >
              <h2 className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
                {section.title}
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 border-t pt-10 text-center">
          <p className="text-zinc-500 mb-4 text-sm">
            Let's create something together.
          </p>
          <button className="px-5 py-2 text-sm bg-zinc-800 text-white hover:bg-zinc-700 transition rounded-full">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
