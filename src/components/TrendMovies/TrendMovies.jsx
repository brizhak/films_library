import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendMovie, StyledLink } from './TrendMovies.styled';

const TrendMovies = ({ id, title }) => {
  const location = useLocation();
  return (
    <TrendMovie id={id}>
      <StyledLink state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </StyledLink>
    </TrendMovie>
  );
};

TrendMovies.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TrendMovies;
