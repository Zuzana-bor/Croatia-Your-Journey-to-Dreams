import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from '../components/Search';
import Login from '../components/Login';

const Header = () => {
  return (
    <>
      <div className=" flex justify-between p-4  ">
        <Link to={'/'}>
          <div>logoo</div>
        </Link>
        <div>
          <Search />
        </div>
        <div>
          <Login />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
