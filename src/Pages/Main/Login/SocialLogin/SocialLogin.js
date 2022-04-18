
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 mx-2'>or</p>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} type="button" class="btn btn-outline-primary my-2 mx-2">
                    <i className="fa-brands fa-google mx-2"></i>
                    Google Sign in
                </button>
                <button type="button" class="btn btn-outline-primary my-2 mx-2">
                    <i className="fa-brands fa-facebook" ></i>
                    Facebook Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;