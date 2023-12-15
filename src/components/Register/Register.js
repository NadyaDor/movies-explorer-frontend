import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useValidation from '../../utils/validation';
import { REGEX_EMAIL } from '../../utils/constants';
import { Navigation } from '../../utils/Navigation';

function Register({ handleRegistration, isError, setIsError }) {
  const location = useLocation();
  const { goToMovies } = Navigation();

  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsError('');
    }
  }, [location, setIsError]);

  useEffect(() => {
    if (localStorage.token) {
      goToMovies({ replace: true });
    }
  }, []);

  const {
    handleChange,
    values,
    errors,
    isInputValid,
    isFormValid,
    isSubmitting,
    setSubmitting
  } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    Promise.resolve(handleRegistration(values))
      .finally(() => setSubmitting(false));
  };

  return (
    <main className='register-form'>
      <div className='register-form__container'>
        <div className='register-form__items'>
          <Link to='/'>
            <div className='logo' />
          </Link>
          <h1 className='register-form__title'>Добро пожаловать!</h1>
          <form
            onSubmit={handleSubmit}
            id='register-form'
            className='register-form__form'
            name='signup'
          >
            <fieldset className='register-form__inputs'>
              <label>
                <span className='register-form__input-title'>Имя</span>
                <input
                  onChange={handleChange}
                  value={values.name || ''}
                  name='name'
                  type='text'
                  className={`register-form__input ${
                    !isInputValid.name ? 'register-form__input_error' : ''
                  }`}
                  id='name-input'
                  placeholder='Введите имя'
                  minLength={2}
                  maxLength={30}
                  required
                />
                <span className='input-error'>{errors.name}</span>
              </label>
              <label>
                <span className='register-form__input-title'>E-mail</span>
                <input
                  onChange={handleChange}
                  value={values.email || ''}
                  name='email'
                  type='email'
                  className={`register-form__input ${
                    !isInputValid.email ? 'register-form__input_error' : ''
                  }`}
                  id='email-input'
                  placeholder='Введите email'
                  pattern={REGEX_EMAIL}
                  required
                />
                <span className='input-error'>{errors.email}</span>
              </label>
              <label>
                <span className='register-form__input-title'>Пароль</span>
                <input
                  onChange={handleChange}
                  value={values.password || ''}
                  name='password'
                  type='password'
                  className={`register-form__input ${
                    !isInputValid.password ? 'register-form__input_error' : ''
                  }`}
                  id='password-input'
                  placeholder='Введите пароль'
                  minLength={8}
                  maxLength={10}
                  required
                />
                <span className='input-error'>{errors.password}</span>
              </label>
            </fieldset>
          </form>
        </div>
        <div className='register-form__submit'>
          <button
            disabled={!isFormValid || isSubmitting}
            type='submit'
            form='register-form'
            className={`button register-form__submit-button ${
              (!isFormValid || isSubmitting) ? 'register-form__submit-button_disabled' : ''
            }`}
          >
            <span className='input-error input-error_top'>{isError}</span>
            Зарегистрироваться
          </button>
          <p className='register-form__text'>
            Уже зарегистрированы?{' '}
            <span>
              <Link to='/signin' className='register-form__login-link link'>
                Войти
              </Link>
            </span>{' '}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
