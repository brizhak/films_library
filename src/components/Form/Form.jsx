import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { SearchForm, Input, Button } from './Form.styled';
import PropTypes from 'prop-types';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const storedQuery = localStorage.getItem('storedQuery');
    if (storedQuery) {
      setQuery(storedQuery);
    }
  }, []);

  const handleInput = e => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    localStorage.setItem('storedQuery', inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      Notiflix.Notify.info('Please enter your request');
    } else {
      setSearchParams({ query });
    }
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter the movie title"
        value={query}
        onChange={handleInput}
        autoComplete="off"
        autoFocus
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

Form.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default Form;
