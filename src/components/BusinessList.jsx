import React from 'react';
import Business from './Business.jsx';
import businesses from './Businesses.jsx';

function BusinessList() {
    return (
        <div className="business-list">
            {businesses.map(business=><Business business={business}/>)}
        </div>
    );
}

export default BusinessList;