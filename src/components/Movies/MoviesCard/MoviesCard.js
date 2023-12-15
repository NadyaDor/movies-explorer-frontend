import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import getTimeFromMins from '../../../utils/durationConverter';
import { MOVIES_API } from '../../../utils/constants';
import cross from '../../../images/cross_small.svg';
import save from '../../../images/save1.svg';

function MoviesCard({ movie, onSave, onDelete, savedMovies}) {

  const location = useLocation();
  const isSaved = savedMovies.some((item) => item.movieId === movie.id);
  const movieImgUrl =
    typeof movie.image === 'string'
      ? movie.image
      : `${MOVIES_API}${movie.image.url}`;

  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const isMoviesPage = location.pathname === '/movies';

  return (
    <section className="movies-card">
      <Link to={movie.trailerLink} target='_blank'>
        <img className="movies-card__image" src={movieImgUrl} alt={movie.name} />
      </Link>
      <div className="movies-card__title-box">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        {isSavedMoviesPage && (
          <button
            onClick={() => onDelete(movie._id)}
            type='button'
            className="movies-card__cross"
          >
            <img className="movies-card__like" src={cross} alt="Сохранено" />
          </button>
        )} {isMoviesPage && (
          <button 
            onClick={() => onSave(movie)}
            type='button'
            className="movies-card__like-box" 
          >
            {isSaved ? <img className="movies-card__like" src={save} alt="Сохранено" /> : null}
          </button>
        )}
      </div>
      <p className="movies-card__time">{getTimeFromMins(movie.duration)}</p>
    </section>
  );
}

export default MoviesCard;
