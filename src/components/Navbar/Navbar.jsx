import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const tlRef = useRef(null);

  const navlinks = [
    {
      id: "1",
      span: "01",
      link: "Home",
      href: "/",
    },
    {
      id: "2",
      span: "02",
      link: "About",
      href: "/about",
    },
    {
      id: "3",
      span: "03",
      link: "Work",
      href: "/",
    },
    {
      id: "4",
      span: "04",
      link: "Contact",
      href: "/",
    },
  ];

  // Initialize the timeline once
  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current.fromTo(
      menuRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    tlRef.current.fromTo(
      linksRef.current,
      {
        y: 30,
        opacity: 0,
        rotationX: 15,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
      },
      "-=0.3" // Start slightly before the previous animation completes
    );

    // Initial setup - hide the menu initially
    if (!menuOpen) {
      gsap.set(menuRef.current, { x: "100%", opacity: 0 });
      gsap.set(linksRef.current, { opacity: 0, y: 30 });
    }

    linksRef.current.forEach((link) => {
      if (link) {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            x: 5,
            duration: 0.3,
            ease: "power1.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: "power1.out",
          });
        });
      }
    });
  }, []);

  // Control the animation when menu state changes
  useEffect(() => {
    if (menuOpen) {
      tlRef.current.play();
    } else if (tlRef.current) {
      tlRef.current.reverse();
    }
  }, [menuOpen]);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="navbar fixed w-full flex items-center justify-between bg-white px-20 py-6 z-10">
      <div className="logo flex items-center gap-x-1">
        <img className="h-3 w-3" src="/svg/mask.svg" alt="" />
        <Link className="custom-font" to="/">
          abet
        </Link>
      </div>
      <div className="nav-menu">
        <button
          ref={buttonRef}
          className="custom-font cursor-pointer px-3 py-1 rounded-full border-[1.5px] overflow-hidden relative"
          onClick={handleMenuClick}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div
          ref={menuRef}
          className="absolute w-[500px] h-screen flex flex-col items-end gap-y-4 top-0 right-0 bg-red-50 rounded-md px-20 py-6"
          style={{ opacity: 0, transform: "translateX(100%)" }}
        >
          <button
            className="custom-font cursor-pointer px-3 py-1 rounded-full border-[1.5px]"
            onClick={handleMenuClick}
          >
            Close
          </button>
          <ul className="flex flex-col gap-y-10 items-end text-4xl">
            {navlinks.map((links, index) => {
              return (
                <Link
                  to={links.href}
                  key={links.id}
                  className="flex gap-x-4 items-center hover:text-blue-500"
                  ref={(el) => (linksRef.current[index] = el)}
                >
                  <span className="font-num">{links.span}</span>
                  {links.link}
                </Link>
              );
            })}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
