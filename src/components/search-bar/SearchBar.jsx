import React from 'react';
import './search-bar.css';

function SearchBar() {
    return (
        <div className="search-container">
            <div className="parameters">
                <div className="sort">
                    <ul>
                        <li id='best-match'><a href="#">Best<br/>Match</a></li>
                        <li id='highest-rated'><a href="#">Highest<br/>Rated</a></li>
                        <li id='most-reviewed'><a href="#">Most<br/>Reviewed</a></li>
                    </ul>
                </div>
                <form className="search-bar" action="#">
                    <div className="search-bars">
                        <input type="search" placeholder="Search Businesses"/> <input type="search" placeholder="Where?"/>
                    </div>
                    <button type="submit">Let's Go</button>
                </form>
            </div> 
        </div>
    );
}

export default SearchBar;