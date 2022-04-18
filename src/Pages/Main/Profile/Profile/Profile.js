import React from 'react';
import './Profile.css';
import pic from '../../../../images/sakib.jpg'

const Profile = () => {
    return (
        <section className='profile-container'>
            <div className='profile '>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='m-2' src={pic} alt="Avatar" style={{ width: "200px" }} />
                </div>
                <h2 className='text-center text-success'>My Goals</h2>
                <p>I believe that everything is up to my. Because a clever programmer do that: Practice. Practice. Practice.
                    Code. Code. Code !
                    I have already learned the  HTML, CSS, Bootstrap, JS, React, React Bootstrap. I can build any simple website.My goal is to build many
                    websites and learn advanced topics. </p>
            </div>
        </section>
    );
};

export default Profile;