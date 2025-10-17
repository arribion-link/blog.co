import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-container w-80 rounded-full gap-1 items-center p-1">
      <FaSearch/>
      <input
        type="search"
        placeholder="Search for content..."
        className="w-full p-2"
      />
    </div>
  );
};

export default Search;
