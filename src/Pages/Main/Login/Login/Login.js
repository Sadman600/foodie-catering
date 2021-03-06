import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Login = () => {
    const [loginUser] = useAuthState(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    if (loading || googleLoading) {
        <Loading></Loading>
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!email || !password) {
            toast('Enter email and password ');
        } else {
            signInWithEmailAndPassword(email, password);
            navigate('/');
        }

    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please input your email')
        }

    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
        navigate('/');
    }
    const handleSignInWithGithub = () => {
        signInWithGithub();
        navigate('/');
    }
    return (
        <div className='container w-50 mx-auto my-4 border border-5 rounded-3'>
            <Form onSubmit={() => handleSignIn()} className='p-4'>
                <h1 className='text-center'>Plz Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button size="lg" variant="primary" type="submit">
                    Login
                </Button>

                <h6 className='m-2'>Don't have an account? <Link to='/signup'>Sign Up</Link> </h6>
                <h6 className='m-2'>Forgate Password?<button onClick={() => handleResetPassword()} type="button" className="btn btn-link">Reset Password</button> </h6>

                {/* Social Login */}
                <div>
                    <div className='d-flex align-items-center'>
                        <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                        <p className='mt-2 mx-2'>or</p>
                        <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => handleSignInWithGoogle()} type="button" class="btn btn-danger my-2 mx-2">
                            <i className="fa-brands fa-google mx-2"></i>
                            Sign In with Google
                        </button>
                        <br />
                        <button onClick={() => handleSignInWithGithub()} type="button" class="btn btn-dark my-2 mx-2">
                            <i class="fa-brands fa-github mx-2"></i>
                            Sign In with Github
                        </button>
                    </div>
                </div>

                <ToastContainer />
            </Form>
        </div >
    );
};

export default Login;