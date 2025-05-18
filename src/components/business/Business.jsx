import React from 'react';
import './business.css';

function Business(props) {
    return (
        <div className="business">
            <div className="image-container">
                <img src={props.business.imageSrc} alt={props.business.name} />
            </div>
            <h2>{props.business.name}</h2>
            <div className="business-info">
                <div className="address">
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>
                        <span className="state">{props.business.state}</span> <span className="zipcode">{props.business.zipCode}</span>
                    </p>
                </div>
                <div className="review">
                    <p id="category">{props.business.category}</p>
                    <p id="business-rating">{props.business.rating} stars</p>
                    <p>{props.business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;