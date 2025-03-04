import { useState } from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    console.log("clicked");
  }

  return (
    <div className="navbar w-full flex items-center justify-between bg-white px-20 py-6">
      <div className="logo flex items-center gap-x-1">
        <img className="h-3 w-3" src="/svg/mask.svg" alt="" />
        <Link className="custom-font" to="/">
          abet
        </Link>
      </div>
      <div className="nav-menu">
        <button
          className="custom-font cursor-pointer px-3 py-1 rounded-full border-[1.5px]"
          onClick={handleMenuClick}
        >
          Menu
        </button>
        {menuOpen && (
          <div className="absolute w-[30%] h-full top-0 right-0 bg-red-50 rounded-md px-20 py-6">
            <button
              className="custom-font cursor-pointer px-3 py-1 rounded-full border-[1.5px]"
              onClick={handleMenuClick}
            >
              Close
            </button>
            <a href="/about" className="block px-3 py-1">
              About
            </a>
            <a href="/blog" className="block px-3 py-1">
              Blog
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
