import { Link } from 'react-router-dom';

const MenuForMobil = () => {
  return (
    <div className="transition-transform duration-500 ease-in-out delay-450 absolute top-0 left-0 z-10 w-85 bg-gray-100 h-full">
      <ul>
        <div>logo</div>
        <nav>
          <ul>
            <li className="m-7">
              <Link to={`/croatia`}>About Croatia</Link>
            </li>
            <li className="m-7">
              <Link to={`planning`}>Plánování trasy</Link>
            </li>
            <li className="m-7">
              <Link to={`review`}>Recenze</Link>
            </li>
            <li className="m-7">
              <Link to={`media`}>Sociální média</Link>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MenuForMobil;
