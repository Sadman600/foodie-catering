import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Login = () => {
    const [loginUser] = useAuthState(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

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
        signInWithEmailAndPassword(email, password);
        navigate('/');
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    const handleSignInWithGoogle = (e) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithGoogle();
    }
    return (
        <div className='container w-50 mx-auto my-4 border border-5 rounded-3'>
            <Form onSubmit={handleSignIn} className='p-4'>
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

                <h6>Don't have a account? <Link to='/signup'>Sign Up</Link> </h6>
                <h6>Forgate Password?<button onClick={() => handleResetPassword()} type="button" className="btn btn-link">Reset Password</button> </h6>
                <button onClick={() => handleSignInWithGoogle()} className='btn btn-success'>Continue with google</button>
            </Form>
        </div >
    );
};

export default Login;