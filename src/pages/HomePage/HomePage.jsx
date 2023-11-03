import React, { useEffect, useState } from 'react';
import { fetchTrends } from '../../services/api';
import Loader from '../../components/Loader';
import { Container, TrendsList, Title } from './HomePage.styled';

import TrendMovies from 'components/TrendMovies';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendsList = async () => {
      try {
        setError(null);
        setLoading(true);
        const trendsList = await fetchTrends();
        setTrends(trendsList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendsList();
  }, []);

  return (
    <Container>
      <Title>TRENDING TODAY</Title>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : (
            <TrendsList>
              {trends.map(movie => {
                if (movie.title) {
                  return (
                    <TrendMovies
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                    />
                  );
                } else {
                  return (
                    <TrendMovies
                      key={movie.id}
                      id={movie.id}
                      title="Movie title is missing"
                    />
                  );
                }
              })}
            </TrendsList>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
