import s from './SearchBox.module.css';


 const SearchBox = ({ value, onChange}) => {
  return (
    <form className={s.searchForm} >
      
      <input
        type="text"
        value={value}
        autoComplete="off"
        placeholder="Search movies"
        required
        onChange={(e) => onChange(e.target.value)}
        className={s.searchInput}
      />
        <button
          type="submit"         
          className={s.searchButton}
        >
          Search
        </button>
    </form>
  );
};

 

export default SearchBox;