import React from 'react';
import './business.css';

function Business({business}) {
    return (
        <div className="business">
            <img src={business.imageSrc} alt={business.name} />
            <h2>{business.name}</h2>
            <div className="address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>
                    <span className="state">{business.state}</span> <span className="zipcode">{business.zipCode}</span>
                </p>
            </div>
            <div className="review">
                <p id="category">{business.category}</p>
                <p id="rating">{business.rating} stars</p>
                <p>{business.reviewCount} reviews</p>
            </div>
        </div>
    );
}

export default Business;