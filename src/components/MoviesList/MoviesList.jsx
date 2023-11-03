import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => {
        return (
          <ListItem key={movie.id}>
            <StyledLink state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </StyledLink>
          </ListItem>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
