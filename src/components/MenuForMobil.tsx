import { Link } from 'react-router-dom';

const MenuForMobil = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-gradient-to-r from-yellow-400 to-orange-500 md:hidden">
      <ul>
        <div>logo</div>
        <nav>
          <ul>
            <li className="block px-4 py-2 text-white hover:bg-yellow-500">
              <Link to={`/croatia`}>About Croatia</Link>
            </li>
            <li className="block px-4 py-2 text-white hover:bg-yellow-500">
              <Link to={`planning`}>Plánování trasy</Link>
            </li>
            <li className="block px-4 py-2 text-white hover:bg-yellow-500">
              <Link to={`review`}>Recenze</Link>
            </li>
            <li className="block px-4 py-2 text-white hover:bg-yellow-500">
              <Link to={`media`}>Sociální média</Link>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MenuForMobil;
