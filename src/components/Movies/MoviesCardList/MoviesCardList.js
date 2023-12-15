import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  savedMovies,
  isLoading,
  onSave,
  onDelete,
  isSearchResult,
  visibleMovies,
  loadMoreCards,
  clearSearchForm
}) {

  const location = useLocation();

  return (
    <section className='movies-card-list'>
      {isLoading ? (
        <Preloader />
      ) : location.pathname === '/movies' && isSearchResult ? (
        <ul className='movies-card-list__box'>
          {movies.slice(0, visibleMovies).map((item) => {
            return (
              <MoviesCard
                movie={item}
                key={item.id}
                onSave={onSave}
                savedMovies={savedMovies}
                clearSearchForm={clearSearchForm}
              />
            );
          })}
        </ul>
      ) : isSearchResult ? (
        <ul className='movies-card-list__box'>
          {savedMovies.map((item) => {
            return (
              <MoviesCard
                movie={item}
                key={item._id}
                onDelete={onDelete}
                savedMovies={savedMovies}
                              />
            );
          })}
        </ul>
      ) : (
        <span className='movies-card-list__not-found'>Ничего не найдено</span>
      )}
      <div className='movies-card-list__button-show-more-box'>
        {location.pathname === '/movies' && visibleMovies < movies.length && (
          <button
            onClick={loadMoreCards}
            type='button'
            className='movies-card-list__button-show-more'
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
