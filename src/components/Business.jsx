import React from 'react';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business() {
    return (
        <div className="business">
            <img src={business.imageSrc} alt={business.name} />
            <div className="address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p><span className="state">{business.state}</span><span className="zipcode">{business.zipCode}</span></p>
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