import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import CurrentUserContext from '../../context/CurrentUserContext';
import useValidation from '../../utils/validation';
import { REGEX_EMAIL } from '../../utils/constants';

function Profile({
  loggedIn,
  handleLogout,
  onUpdateUser,
  isError,
  setIsError,
  isSuccess,
  setIsSuccess,
}) {
  const location = useLocation();

  const currentUser = useContext(CurrentUserContext);
  const [onEdit, setOnEdit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const {
    handleChange,
    values,
    setValues,
    errors,
    isInputValid,
    setIsInputValid,
    isFormValid,
    setIsFormValid,
  } = useValidation();

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsInputValid(currentUser);
      setIsFormValid(true);
    }
  }, [currentUser, setValues, setIsInputValid, setIsFormValid]);

  useEffect(() => {
    const dataChanged =
      values.name !== currentUser.name || values.email !== currentUser.email;
    dataChanged ? setIsDataChanged(true) : setIsDataChanged(false);
  }, [values, currentUser]);

  useEffect(() => {
    if (location.pathname === '/profile') {
      setIsError('');
      setIsSuccess(false);
    }
  }, [location, setIsError, setIsSuccess]);

  useEffect(() => {
    let timer;
      if (isMessageVisible) {
        timer = setTimeout(() => {
          setIsMessageVisible(false);
        }, 3000);
      }
    return () => clearTimeout(timer);
  }, [isMessageVisible]);

  function handleEditClick() {
    setOnEdit(true);
    setIsDisabled(false);
    setIsError('');
    setIsSuccess(false);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setOnEdit(false);
    setIsDisabled(true);
    setIsMessageVisible(true);
  }

  return (
        <section className='profile'>
          <form
            id='profile'
            className='profile__form'
            name='profile-form'
            noValidate
          >
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <fieldset className='profile__inputs'>
              <span className='profile__input-title'>Имя</span>
              <label className='profile__input-container'>
                <span className='input-error'>{errors.name}</span>

                <input
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={values.name || ''}
                  type='text'
                  name='name'
                  className={`profile__input ${
                    !isInputValid.name ? 'profile__input_error' : ''
                  }`}
                  placeholder='Введите имя'
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
              <span className='profile__input-title'>E-mail</span>
              <label className='profile__input-container'>
                <input
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={values.email || ''}
                  type='email'
                  name='email'
                  className={`profile__input ${
                    !isInputValid.email ? 'profile__input_error' : ''
                  }`}
                  placeholder='Введите email'
                  pattern={REGEX_EMAIL}
                  required
                />
                <span className='input-error input-error_bottom'>
                  {errors.email}
                </span>
              </label>
            </fieldset>
          </form>
          <div className='profile__submit'>
            {isError && (
              <span className={`profile__message profile__message_error`}>
                {isError}
              </span>
            )}
            
            {isMessageVisible && (
              <span className={`profile__message`}>
                Изменения успешно сохранены.
              </span>
            )}
            {!onEdit && (
              <>
                <button
                  onClick={handleEditClick}
                  type='button'
                  className='profile__button button'
                >
                  Редактировать
                </button>
                <button
                  onClick={handleLogout}
                  className='profile__button profile__button_logout button'
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
            {onEdit && (
              <>
                <button
                  disabled={!isFormValid || !isDataChanged}
                  form='profile'
                  onClick={handleSaveClick}
                  type='submit'
                  className={`profile__button profile__save-button ${
                    !isFormValid || !isDataChanged
                      ? 'profile__save-button_disabled'
                      : ''
                  }`}
                >
                  Сохранить
                </button>
              </>
            )}
          </div>
        </section>
  );
}

export default Profile;
