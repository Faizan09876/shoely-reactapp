import { Children } from "react";

function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={` dark:bg-night-500 overflow-y-auto p-4 md:w-[50%] lg:w-[35%] shadow-lg  top-0 fixed w-full h-full bg-white right-0 z-50 transition transform duration-300  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button
          onClick={onClickClose}
          className=" dark:text-white absolute right-4 top-4 p-2 font-bold text-black "
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-20 "></div>
      )}
    </div>
  );
}

export default Sidebar;
