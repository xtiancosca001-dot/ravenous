import React from 'react';
import './business.css';
import defaultImage from '../../assets/fallback_image.png';

function Business(props) {
    return (
        <div className="business">
            <div className="image-container">
                <img src={props.business.image_url ? props.business.image_url : defaultImage } alt={props.business.name} />
            </div>
            <h2>{props.business.name}</h2>
            <div className="business-info">
                <div className="address">
                    <p>{props.business.location.address1}</p>
                    <p>{props.business.location.address2}</p>
                    <p>{props.business.location.address3}</p>
                    <p>{props.business.location.city}</p>
                    <p>
                        <span className="state">{props.business.location.state}</span> <span className="zipcode">{props.business.location.zipCode}</span>
                    </p>
                </div>
                <div className="review">
                    <p id="category">{props.business.categories.map(c=>c.title).join(", ")}</p>
                    <p id="business-rating">{props.business.rating} stars</p>
                    <p>{props.business.review_count} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;