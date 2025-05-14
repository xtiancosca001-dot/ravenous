import React from 'react';
import Business from './Business.jsx';
import businesses from './Businesses.jsx';

function BusinessList() {
    return (
        <div className="business-list">
            {businesses.map((business, idx)=><Business business={business} key={idx}/>)}
        </div>
    );
}

export default BusinessList;