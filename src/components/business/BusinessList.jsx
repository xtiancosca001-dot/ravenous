import React from 'react';
import Business from './Business';
import businesses from './Businesses';
import './business.css'

function BusinessList() {
    return (
        <div className="business-list">
            {businesses.map((business, idx)=><Business business={business} key={idx}/>)}
        </div>
    );
}

export default BusinessList;