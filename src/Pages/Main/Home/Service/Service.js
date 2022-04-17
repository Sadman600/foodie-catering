import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, category, price, description } = service;
    return (
        <div className="card">
            <img src={img} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{category}</h1>
            <p className="price">$ {price}</p>
            <p>{description}</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
};

export default Service;