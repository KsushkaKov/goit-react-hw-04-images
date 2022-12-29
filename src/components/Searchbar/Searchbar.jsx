import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleInput = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedText = text.trim().toLocaleLowerCase();

    if (!normalizedText) {
      alert('Please, enter your search request 👓');
      return;
    }

    onSubmit(normalizedText);
    setText('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
          value={text}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
