import React from "react";


const Search = () => (
    <div className="searchContainer">
        <input
            type="search"
            id="searchInput"
            name="searchInput"
            placeholder="Search"
        />
        <i class="fas fa-search searchIcon"></i>
    </div>
);

export default Search;