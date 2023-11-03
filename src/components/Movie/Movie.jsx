import { Outlet, useLocation } from 'react-router-dom';
import {
  StyledNavLink,
  Container,
  LinkContainer,
  BackLink,
  GeneralContainer,
  Img,
  Title,
  Genres,
  ListGenres,
  Overview,
  InfoList,
  AddInfo,
  Description,
  Rating,
  ItemGenre,
} from './Movie.styled';
import PropTypes from 'prop-types';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Movie = ({ img, title, genres, overview, rating }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      <Container>
        <LinkContainer>
          <BackLink to={backLinkHref}>Go back</BackLink>
        </LinkContainer>
        <GeneralContainer>
          <Img
            src={`${
              img ? BASE_POSTER_URL + img : PLACEHOLDER + '?text=' + title
            }`}
            alt={title}
            width="250"
          />
          <div>
            <Title>{title}</Title>
            <Rating>Rating: {Math.round(rating)}</Rating>
            {genres && genres.length > 0 ? (
              <div>
                <Genres>Genres</Genres>
                <ListGenres>
                  {genres.map((genre, index) => (
                    <ItemGenre key={index}>{genre}</ItemGenre>
                  ))}
                </ListGenres>
              </div>
            ) : (
              <p>No genres available</p>
            )}
            <Overview>Overview</Overview>
            <Description>{overview}</Description>
          </div>
        </GeneralContainer>
        <div>
          <AddInfo>ADDITIONAL INFORMATION</AddInfo>
          <InfoList>
            <li>
              <StyledNavLink to="cast" state={location.state}>
                Cast
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews" state={location.state}>
                Reviews
              </StyledNavLink>
            </li>
          </InfoList>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

Movie.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  overview: PropTypes.string,
  rating: PropTypes.number,
};

export default Movie;
