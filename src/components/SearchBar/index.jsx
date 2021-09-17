import "./styles.css";

const SearchBar = ({ showProducts }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search here your product"
        onChange={(e) => showProducts(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
