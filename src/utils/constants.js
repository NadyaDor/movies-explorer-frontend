// ссылки на сторонние ресурсы
export const GITHUB_URL = 'https://github.com/NadyaDor';
export const YANDEX_URL = 'https://practicum.yandex.ru/';

export const REGEX_EMAIL = '^\\S+@\\S+\\.\\S+$';
export const MOVIES_API = 'https://api.nomoreparties.co';
export const BASE_URL = 'https://api.movie18.nomoredomainsrocks.ru';

export const shortMovieDuration = 40;

// Расчет видимого количества фильмов в зависимости от ширины экрана
export const calculatorVisibleMovies = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 16;
  } else if (screenWidth >= 990 && screenWidth < 1280) {
    return 12;
  } else if (screenWidth >= 654 && screenWidth < 989) {
    return 8;
  } else {
    return 5;
  }
}

  // Функция для отображения дополнительных фильмов
export const showMoreMovies = (visibleMovies) => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return visibleMovies + 4;
  } else if (screenWidth >= 990 && screenWidth < 1280) {
    return visibleMovies + 3;
  } else {
    return visibleMovies + 2;
  }
};
