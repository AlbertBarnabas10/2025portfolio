import { useState } from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = [
    {
      id:'1',
      span:'01',
      link:'Home',
      href:'/',
    },
    {
      id:'2',
      span:'02',
      link:'About',
      href:'/',
    },
    {
      id:'3',
      span:'03',
      link:'Work',
      href:'/',
    },
    {
      id:'4',
      span:'04',
      link:'Contact',
      href:'/',
    },
  ]

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    console.log("clicked");
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
          className="custom-font cursor-pointer px-3 py-1 rounded-full border-[1.5px]"
          onClick={handleMenuClick}
        >
          Menu
        </button>
        {menuOpen && (
          <div className="absolute w-[500px] h-screen flex flex-col items-end gap-y-4 top-0 right-0 bg-red-50 rounded-md px-20 py-6">
            <button
              className="custom-font cursor-pointer px-3 py-1 rounded-full border-[1.5px]"
              onClick={handleMenuClick}
            >
              Close
            </button>
            <ul className="flex flex-col gap-y-10 items-end text-4xl">
              {
                navlinks.map((links)=>{
                  return(
                    <Link to={links.href} key={links.id} className="flex gap-x-4 items-center">
                      <span className="font-num">{links.span}</span>{links.link}
                    </Link>
                  )
                })
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
