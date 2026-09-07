import { useState, useRef } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);

  console.log("SearchBar Render");

  const handleClick = () => {
    console.log(searchRef.current.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="inp1">Search using state</label> <br />
        <input
          type="text"
          id="inp1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
        <br /><br />
      <div>
        <label htmlFor="">Search using Ref</label><br />
        <input type="text" ref={searchRef}  />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
