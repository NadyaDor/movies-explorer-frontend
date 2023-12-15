import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { moviesApi } from '../../utils/moviesApi';
import { shortMovieDuration } from '../../utils/constants';
import { calculatorVisibleMovies, showMoreMovies } from '../../utils/constants';

function Movies({ loggedIn, savedMovies, onSave }) {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isQuery, setIsQuery] = useState(false);
  const [placeholder, setPlaceholder] = useState('Фильм');
  const [filteredMovies, setFliteredMovies] = useState([]);
  const [isError, setIsError] = useState('');
  const [isSearchResult, setIsSearchResult] = useState(true);
  const [visibleMovies, setVisibleMovies] = useState(calculatorVisibleMovies());

  useEffect(() => {
    const SavedIputValue = JSON.parse(localStorage.getItem('inputValue'));
    const SavedCheckboxState = JSON.parse(localStorage.getItem('isChecked'));
    const SavedFilteredMovies = JSON.parse(
      localStorage.getItem('filteredMovies')
    );

    if (location.pathname === '/movies'){
      if (SavedIputValue !== null && SavedCheckboxState !== null && SavedFilteredMovies !== null) {
        setInputValue(SavedIputValue || '');
        setIsChecked(SavedCheckboxState || false);
        setFliteredMovies(SavedFilteredMovies || []);
        setIsError('');
      }
    } else {
        setInputValue('');
        setIsChecked(false);
        setFliteredMovies([]);
        setIsError('');
      }
  }, []);

  useEffect(() => {
    if (location.pathname === '/movies') {
      setVisibleMovies(calculatorVisibleMovies());
      function handleResize() {
        setVisibleMovies(calculatorVisibleMovies());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [location]);

  function loadMoreCards() {
    setVisibleMovies((prevVisibleMovies) => showMoreMovies(prevVisibleMovies));
  }

  const onSearch = (inputValue, isChecked, movies) => {
    setVisibleMovies(calculatorVisibleMovies());
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
          setIsLoading(false);
          onFilter(inputValue, isChecked, movies);
          setIsError('');
        })
        .catch((err) => {
          setIsError(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Попробуйте ещё раз позже'
          );
          console.log(`Ошибка получения фильмов: `, err);
        })
        .finally(() => setIsLoading(false));
    } else {
      onFilter(inputValue, isChecked, movies);
    }
  };

  const onFilter = (inputValue, isChecked, movies) => {
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
    localStorage.setItem('movies', JSON.stringify(movies));

    let searchResult = [];
    if (inputValue) {
      searchResult = movies.filter((item) => {
        const searchText =
          item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
        return isChecked ? searchText && item.duration <= shortMovieDuration : searchText;
      });
    }
    setFliteredMovies(searchResult);
    localStorage.setItem('filteredMovies', JSON.stringify(searchResult));
    searchResult.length > 0
      ? setIsSearchResult(true)
      : setIsSearchResult(false);
  };

  console.log(`isSearchResult :`, isSearchResult);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isQuery) {
      setPlaceholder('Нужно ввести ключевое слово');
    } else {
      setIsChecked(isChecked);
      onSearch(inputValue, isChecked, movies);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setPlaceholder('');
    !e.target.value ? setIsQuery(false) : setIsQuery(true);
  }

  function handleCheckboxClick() {
    !isChecked ? setIsChecked(true) : setIsChecked(false);
    onSearch(inputValue, !isChecked, movies);
  }

  return (
        <main>
          <SearchForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            onCheckbox={handleCheckboxClick}
            isChecked={isChecked}
            isRequest={isQuery}
            placeholder={placeholder}
          />
          {isError && <div className='movies__error '>{isError}</div>}
          <MoviesCardList
            movies={filteredMovies}
            savedMovies={savedMovies}
            isLoading={isLoading}
            onSave={onSave}
            isSearchResult={isSearchResult}
            visibleMovies={visibleMovies}
            loadMoreCards={loadMoreCards}
          />
        </main>
  );
}

export default Movies;
