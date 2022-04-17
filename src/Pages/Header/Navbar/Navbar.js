import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <NavLink className="navbar-brand" to='/'>Foodia</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link fs-5" to='/'>Sign Up</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link fs-5" to='/login'>Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;