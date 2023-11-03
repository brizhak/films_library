import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import { List, ListItem, Container } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsList = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsList();
  }, [movieId]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : reviews.length === 0 ? (
            <p>No results</p>
          ) : (
            <List>
              {reviews.length !== 0 &&
                reviews.map(item => {
                  return (
                    <ListItem>
                      <p>Author: {item.author}</p>
                      <p>{item.content}</p>
                    </ListItem>
                  );
                })}
            </List>
          )}
        </>
      )}
    </Container>
  );
};

export default Reviews;
