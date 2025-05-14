import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="sort">
                <ul>
                    <li>Best Match</li>
                    <li>Highest Rated</li>
                    <li>Most Reviewed</li>
                </ul>
            </div>
            <form className="search-bar" action="#">
                <input type="search" placeholder="Search Businesses"/> <input type="search" placeholder="Where?"/>
                <input type="submit" name="Let's Go" />
            </form>
        </div>
    );
}

export default SearchBar;