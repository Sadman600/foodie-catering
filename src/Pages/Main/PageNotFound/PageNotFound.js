import React from 'react';

const PageNotFound = () => {
    return (
        <div style={{ height: '350px' }} className="container w-25 mx-auto m-5 p-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1 className='text-danger'>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;