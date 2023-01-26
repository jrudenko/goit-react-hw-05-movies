import s from './SearchBox.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onChange(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.searchForm} >
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies ..."
          onChange={handleQuerySearch}
           className={s.searchInput}
        />
        <button
          type="submit"
          className={s.searchButton}
        >
          Search
        </button>
      </form>
    </>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;