import Menu from '../components/Menu';
import Search from '../components/Search';

const Header = () => {
  return (
    <>
      <div className=" flex justify-between p-4  ">
        <div>logo</div>
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
