import React from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleSubmit,
  handleInputChange,
  inputValue,
  placeholder,
  onCheckbox,
  isChecked,
}) {

  return (
    <section>
      <form className='search-form' onSubmit={handleSubmit} noValidate>
        <div className='search-form__box'>
          <label>
            <input
              onChange={handleInputChange}
              value={inputValue || ''}
              className='search-form__input'
              type='text'
              name='search-form'
              placeholder={placeholder}
              required
            />
          </label>
          <button type='submit' className='search-form__button'>Найти</button>
        </div>
        <FilterCheckbox onCheckbox={onCheckbox} isChecked={isChecked} />
      </form>
    </section>
  );
}

export default SearchForm;
