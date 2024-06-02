import { Link } from 'react-router-dom';
import Croatia from '../components/Croatia';
import Media from '../components/Media';
import Planning from '../components/Planning';
import Review from '../components/Review';

const Offer = () => {
  return (
    <div className="container mx-auto px-6 p-10">
      <Link to={`/croatia`}>
        <Croatia />
      </Link>
      <Link to={'/planning'}>
        {' '}
        <Planning />
      </Link>
      <Review />
      <Link to={'/media'}>
        
        <Media />
      </Link>
    </div>
  );
};

export default Offer;
