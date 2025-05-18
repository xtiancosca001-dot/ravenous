import React from 'react';
import './search-bar.css';

function SearchBar(props) {
    const { searchTerm, location, sortBy, onSearchTermChange, onSearchLocationChange, onSortOptionChange, onSearchSubmit } = props;
    const sortOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    };

    return (
        <div className="search-container">
            <div className="parameters">
                <div className="sort">
                    <ul>
                        {Object.entries(sortOptions).map(([label, value]) => (
                            <li
                                key={value}
                                id={value}
                                className={sortBy === value ? "active" : ""}
                                onClick={() => onSortOptionChange(value)}
                            >
                                {label.split(' ')[0]}<br />
                                {label.split(' ')[1]}
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="search-bar" onSubmit={onSearchSubmit}>
                    <div className="search-bars">
                        <input
                            type="search"
                            placeholder="Search Businesses"
                            value={searchTerm}
                            onChange={onSearchTermChange}
                        />
                        <input
                            type="search"
                            placeholder="Where?"
                            value={location}
                            onChange={onSearchLocationChange}
                        />
                    </div>
                    <button type="submit">Let's Go</button>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
