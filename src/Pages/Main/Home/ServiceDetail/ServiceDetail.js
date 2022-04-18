import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <form className='checkout-container'>
                <h1>Checkout</h1>
                <label htmlFor="fname"><b>Full Name</b></label>
                <input type="text" placeholder="Enter your name" name="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="address"><b>Address</b></label>
                <input type="text" placeholder="Enter address" name="email" required />

                <label htmlFor="email"><b>City</b></label>
                <input type="text" placeholder="Enter City" name="email" required />

                <button type="submit" className="bttn">Login</button>
            </form>
        </div>
    );
};

export default ServiceDetail;