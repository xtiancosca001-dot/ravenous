import React, { useState } from 'react';
import SearchBar from './SearchBar';

function SearchBarContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSearchTermChange = (e) => setSearchTerm(e.target.value);
    const handleSearchLocationChange = (e) => setLocation(e.target.value);
    const handleSortOptionChange = (sortKey) => setSortBy(sortKey);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm && location && sortBy) {
            console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`);
        }
    };

    return (
        <SearchBar
            searchTerm={searchTerm}
            location={location}
            sortBy={sortBy}
            onSearchTermChange={handleSearchTermChange}
            onSearchLocationChange={handleSearchLocationChange}
            onSortOptionChange={handleSortOptionChange}
            onSearchSubmit={handleSearchSubmit}
        />
    );
}

export default SearchBarContainer;
