import { Link } from 'react-router-dom';

const MenuForMobil = () => {
  return (
    <div className=" absolute top-5 left-0   z-10 transition-transform duration-1000 ease-in-out border w-96 z-5 bg-gray-100 ">
      <ul>
        <div>logo</div>
        <nav>
          <ul>
            <li>
              <Link to={`/croatia`}>About Croatia</Link>
            </li>
            <li>
              <Link to={`planning`}>Plánování trasy</Link>
            </li>
            <li>
              <Link to={`review`}>Recenze</Link>
            </li>
            <li>
              <Link to={`media`}>Sociální média</Link>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MenuForMobil;
