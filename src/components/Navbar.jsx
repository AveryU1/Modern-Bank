import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
              active === navLink.title ? "text-white" : "text-dimWhite"
            }
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
            onClick={() => setActive(navLink.title)}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)} //This is the correct way to change the value of a toggle in react, not changing the previous state but changing the previous state with an arrow function
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 rigth-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white `}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
