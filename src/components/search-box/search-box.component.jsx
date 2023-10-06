import '../search-box/search-box.styles.css';

const SearchBox = ({className, onChangeHandler, placeholder}) => (
     <input  
          className={`search-box ${className}`}
          type='Search'
          onChange={onChangeHandler}
          placeholder={placeholder}
     />
);

export default SearchBox;