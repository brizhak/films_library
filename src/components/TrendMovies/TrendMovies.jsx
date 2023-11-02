import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendMovie } from './TrendMovies.styled';

const TrendMovies = ({ id, title }) => {
  const location = useLocation();
  return (
    <TrendMovie id={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </TrendMovie>
  );
};

TrendMovies.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TrendMovies;
