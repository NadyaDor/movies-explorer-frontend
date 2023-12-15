import React, { useState, useEffect } from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import { shortMovieDuration } from '../../utils/constants';

function SavedMovies({ loggedIn, savedMovies, onDelete }) {
  const [filteredMovies, setFliteredMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [placeholder, setPlaceholder] = useState('Фильм');
  const [isQuery, setIsQuery] = useState(false);
  const [isSearchResult, setIsSearchResult] = useState(true);

  useEffect(() => {
    setFliteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    setInputValue('');
    setIsQuery(false);
    onFilter(inputValue, isChecked, savedMovies);
  }, [filteredMovies.length]);

  const onFilter = (inputValue, isChecked, savedMovies) => {
    let searchResult = savedMovies;

    searchResult = savedMovies.filter((item) => {
      const searchText =
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
      return isChecked
        ? searchText && item.duration <= shortMovieDuration
        : searchText;
    });

    setFliteredMovies(searchResult);
    searchResult.length > 0
      ? setIsSearchResult(true)
      : setIsSearchResult(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!isQuery) {
      setPlaceholder('Введите ключевое слово');
    } else {
      setIsChecked(isChecked);
      onFilter(inputValue, isChecked, savedMovies);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setPlaceholder('');
    !e.target.value ? setIsQuery(false) : setIsQuery(true);
  }

  function handleCheckboxClick() {
    !isChecked ? setIsChecked(true) : setIsChecked(false);
    onFilter(inputValue, !isChecked, savedMovies);
  }

  return (
        <main className='saved-movies page__centered page__centered_s'>
          <SearchForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            onCheckbox={handleCheckboxClick}
            inputValue={inputValue}
            isChecked={isChecked}
            placeholder={placeholder}
          />
          <MoviesCardList
            savedMovies={filteredMovies}
            onDelete={onDelete}
            isSearchResult={isSearchResult}
          />
        </main>
  );
}

export default SavedMovies;
