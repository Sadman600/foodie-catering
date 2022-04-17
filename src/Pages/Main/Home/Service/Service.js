import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    console.log(service);
    const { img, category } = service;
    return (
        <div className="card">
            <img src={img} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{category}</h1>
            <p className="price">$19.99</p>
            <p></p>
            <p><button>Add to Cart</button></p>
        </div>
    );
};

export default Service;