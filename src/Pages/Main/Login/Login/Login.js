import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <div className='container w-50 mx-auto my-4 border border-5 rounded-3'>
            <Form className='p-4'>
                <h1 className='text-center'>Plz Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <h6>Don’t have a account? <Link to='/signup'>Sign Up</Link> </h6>
                <Button size="lg" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;