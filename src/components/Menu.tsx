import { useState } from 'react';

import MenuForMobil from './MenuForMobil';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="hidden md:flex space-x-4">
        <a href="#destinations" className="text-white hover:text-yellow-300">
          About Croatia
        </a>
        <a href="#accommodations" className="text-white hover:text-yellow-300">
          Plánování trasy
        </a>
        <a href="#activities" className="text-white hover:text-yellow-300">
          Recenze
        </a>
        <a href="#activities" className="text-white hover:text-yellow-300">
          Sociální média
        </a>
      </nav>
      <div className="block md:hidden">
        <button
          className=" text-white focus:outline-none     "
          onClick={handleClick}
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>{' '}
      </div>
      {open && <MenuForMobil />}
    </>
  );
};

export default Menu;
