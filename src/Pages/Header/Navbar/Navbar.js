import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Main/Login/Loading/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }
    const navigate = useNavigate();
    const logOut = () => {
        signOut(auth);
        navigate('/login');
    };
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
            <div className='container'>
                <NavLink className="navbar-brand" to='/'>Foodie</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: "100px" }}>
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/blog'>Blog</Link>
                        </li>
                        {
                            user ? ''
                                :
                                <li className="nav-item me-3">
                                    <Link className="nav-link fs-5" to='/signup'>Sign Up</Link>
                                </li>
                        }
                        {user ?
                            <li className="nav-item me-3">
                                <button onClick={logOut} type='button' className='btn btn-link text-decoration-none text-white fs-5'>Log Out</button>
                                {/* <Link onClick={logOut} className="nav-link fs-5" to=''>Log Out</Link> */}
                            </li>
                            :
                            <li className="nav-item me-3">
                                <Link className="nav-link fs-5" to='/login'>Log In</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;