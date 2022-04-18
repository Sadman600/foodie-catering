import React from 'react';

const Blog = () => {
    return (
        <section className='container w-75 mx-auto mt-5'>
            <h1 className='text-center text-success'>Our Blog</h1>
            <div className=''>
                <article className=' border border-3 p-3 my-2'>
                    <h4>QA: Difference between authorization and authentication</h4>
                    <p>Authentication : While an user want to access a website part that  the process of
                        verifying and confirming employees info this organization is called authentication.
                    </p>
                    <p>Authorization: At any person full access use any resource to work for permission is called Authorization </p>
                </article>
                <article className=' border border-3 p-3 my-2'>
                    <h4>QA: Why are you using firebase?
                        What other options do you have to implement authentication?</h4>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs,
                        and ready-made UI libraries to authenticate users to your app.
                        It supports authentication using passwords, phone numbers,
                        popular federated identity providers like Google, Github, Apple, Microsoft, Yahoo, Facebook and
                        Twitter, and more.</p>
                    <p>Other options i have to implement cards, retina scans, voice recognition, and fingerprints for authentication</p>
                </article>
            </div>
        </section>
    );
};

export default Blog;