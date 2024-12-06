import { useState } from 'react';

import MenuForMobil from '../components/MenuForMobil';
import Login from '../components/Login';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="hidden md:flex space-x-2 justify-between items-center px-16">
        <Link to={'/'}>
          <div>logoo</div>
        </Link>
        <Link to={`/croatia`} className="text-white hover:text-yellow-300">
          O Chorvatsku
        </Link>
        <Link to={'/planning'} className="text-white hover:text-yellow-300">
          Plánování trasy
        </Link>
        <Link to={'/review'} className="text-white hover:text-yellow-300">
          Recenze
        </Link>
        <Link to={'/media'} className="text-white hover:text-yellow-300">
          Sociální média
        </Link>
        <Login />
        <Search />
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
