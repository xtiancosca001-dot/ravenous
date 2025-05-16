import React from 'react';
import Business from './Business';
import './business.css'

function BusinessList(props) {
    return (
        <div className="business-list">
            {props.businessList.map((business, idx)=><Business business={business} key={idx}/>)}
        </div>
    );
}

export default BusinessList;