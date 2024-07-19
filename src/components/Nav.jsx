import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  return (
    <nav className=" z-10 relative flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="">
        <NikeLogo className="h-20 w-20 dark:fill-white " />
      </a>
      {/* Burger Button */}
      <button
        onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
        className=" lg:hidden p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200  rounded-lg dark:text-gray-100 dark:hover:bg-gray-700 "
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}

      <div
        className={` ${
          isMobileMenuShow === false && "hidden"
        } lg:block w-full lg:w-auto`}
      >
        <ul className="lg:space-x-7 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4  lg:dark:text-white ">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={` lg:hover:bg-transparent lg:hover:text-blue-500 px-3 py-2 cursor-pointer rounded ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 "
                    : "hover:bg-gray-100"
                } ${(i === 3 || i === 4) && "lg:text-white"}  `}
                key={route}
              >
                {" "}
                {route}{" "}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart Button */}
      <div
        onClick={onClickShoppingBtn}
        className="fixed bottom-4 left-4 cursor-pointer lg:static lg:mr-8 btn-press-anim "
      >
        <div className=" flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
