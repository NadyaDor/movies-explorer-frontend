import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useValidation from '../../utils/validation';
import { REGEX_EMAIL } from '../../utils/constants';
import { Navigation } from '../../utils/Navigation';


function Login({ handleLogin, isError, setIsError }) {
  const location = useLocation();
  const { goToMovies } = Navigation();

  useEffect(() => {
    if (location.pathname === '/signin') {
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
    Promise.resolve(handleLogin(values.email, values.password))
      .finally(() => setSubmitting(false));
  };

  return (
      <main className='login-form'>
        <div className='login-form__container'>
          <div className='login-form__items'>
            <Link to='/'>
              <div className='logo' />
            </Link>
            <h1 className='login-form__title'>Рады видеть!</h1>
            <form
              onSubmit={handleSubmit}
              id='login-form'
              className='login-form__form'
              name='signin'
            >
              <fieldset className='login-form__inputs'>
                <label className='login-form__input-container'>
                  <span className='login-form__input-title'>E-mail</span>
                  <input
                    onChange={handleChange}
                    value={values.email || ''}
                    name='email'
                    type='email'
                    className={`login-form__input ${
                      !isInputValid.email ? 'login-form__input_error' : ''
                    } `}
                    id='email-input'
                    placeholder='Введите email'
                    minLength={2}
                    maxLength={30}
                    pattern={REGEX_EMAIL}
                    required
                  />
                  <span className='input-error'>{errors.email}</span>
                </label>
                <label className='login-form__input-container'>
                  <span className='login-form__input-title'>Пароль</span>
                  <input
                    onChange={handleChange}
                    value={values.password || ''}
                    name='password'
                    type='password'
                    className={`login-form__input ${
                      !isInputValid.password ? 'login-form__input_error' : ''
                    } `}
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
          <div className='login-form__submit'>
            <button
              form='login-form'
              disabled={!isFormValid || isSubmitting}
              type='submit'
              className={`button login-form__submit-button ${
                !isFormValid || isSubmitting ? 'login-form__submit-button_disabled' : ''
              }`}
            >
              <span className='input-error input-error_top'>{isError}</span>
              Войти
            </button>
            <p className='login-form__text'>
              Ещё не зарегистрированы?{' '}
              <span>
                <Link to='/signup' className='login-form__signup-link link'>
                  Регистрация
                </Link>
              </span>{' '}
            </p>
          </div>
        </div>
      </main>
  );
}

export default Login;
