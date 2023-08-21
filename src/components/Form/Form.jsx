import { useState } from 'react';
import Notiflix from 'notiflix';
import style from './Form.module.css';

const Form = ({ setSearchParams }) => {
  const [query, setquery] = useState('');

  const handleInput = e => {
    setquery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      Notiflix.Notify.info('Please enter your request');
    } else {
      setSearchParams({ query });
      setquery('');
    }
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter the movie title"
        value={query}
        onChange={handleInput}
        autoComplete="off"
        autoFocus
      />
      <button className={style.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
