import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='container w-50 mx-auto my-4 border border-5 rounded-3'>
            <Form onSubmit={handleCreateUser} className='p-4'>
                <h1 className='text-center'>Sign Up</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree toTerms and conditions,Refund policy &Privacy Policy" />
                </Form.Group>
                <Button className='' size="lg" variant="primary" type="submit">
                    Signup
                </Button>
                <h6 className='my-2'>Already have a account? <Link to='/login'>Log in</Link> </h6>
            </Form>
        </div>
    );
};

export default SignUp;