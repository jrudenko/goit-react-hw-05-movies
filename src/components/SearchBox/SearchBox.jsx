import s from './SearchBox.module.css';

 const SearchBox = ({ value, onChange}) => {
  return (
    <form className={s.searchForm} >
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={s.searchInput}
      />
    </form>
  );
};
export default SearchBox;