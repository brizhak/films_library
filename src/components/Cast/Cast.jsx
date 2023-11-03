import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'services/api';
import Loader from 'components/Loader';
import { CastList, Container, Name, ListItem } from './Cast.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const FetchCastList = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    FetchCastList();
  }, [movieId]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : cast.length === 0 ? (
            <p>No results</p>
          ) : (
            <CastList>
              {cast.map(item => (
                <ListItem key={item.id}>
                  <img
                    src={`${
                      item.profile_path
                        ? BASE_POSTER_URL + item.profile_path
                        : PLACEHOLDER + '?text=' + item.name
                    }`}
                    alt={item.name}
                    width="150"
                  />
                  <Name>{item.name}</Name>
                </ListItem>
              ))}
            </CastList>
          )}
        </>
      )}
    </Container>
  );
};

export default Cast;
