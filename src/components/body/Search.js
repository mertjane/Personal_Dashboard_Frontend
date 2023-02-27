import { useState } from "react";
import { SearchWrapper } from "./Body.styles";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsGoogle } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.location.href = searchUrl;
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSearch} className="group">
        <section id="refresh">
          <BiRefresh id="icon" />
        </section>
        <section id="search-icon">
          <RxMagnifyingGlass id="icon" />
        </section>
        <input
          value={searchQuery}
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <section id="menu">
          <BsGoogle id="tool-icon" />
        </section>
      </form>
    </SearchWrapper>
  );
};

export default Search;
