import { useState } from 'react';
import MenuForMobil from './MenuForMobil';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="block lg:hidden">
        <button className=" items-center w-16     " onClick={handleClick}>
          <div className="w-full p-1 bg-gray-500 mb-1  "></div>
          <div className="w-full p-1  bg-gray-500 mb-1   "></div>
          <div className="w-full p-1  bg-gray-500 mb-1   "></div>
        </button>{' '}
      </div>
      {open && <MenuForMobil />}

      <div className="hidden lg:block">normál</div>
    </>
  );
};

export default Menu;
