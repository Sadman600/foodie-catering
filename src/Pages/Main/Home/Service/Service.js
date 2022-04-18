import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, category, price, description } = service;
    const navigate = useNavigate();
    const handleServiceDetails = id => {
        navigate(`/servicedetail/${id}`)
    }
    return (
        <div className="card">
            <img src={img} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{category}</h1>
            <p className="price">$ {price}</p>
            <p>{description}</p>
            <p><button onClick={() => handleServiceDetails(id)}>Details</button></p>
        </div>
    );
};

export default Service;