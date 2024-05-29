import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Search from '../components/Search';

const Header = () => {
  return (
    <>
      <div className=" flex justify-between p-4  ">
        <Link to={'/'}>
          <div>logo</div>
        </Link>
        <div>
          <Search />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
