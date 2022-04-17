import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import foodie1 from '../../../../images/foodie-1.png';
import foodie2 from '../../../../images/foodie-2.PNG';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className=" w-100 "
                    src="https://img.freepik.com/free-vector/food-social-media-post-promotion-banner-design-template_22857-381.jpg?w=996"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" w-100 "
                    src="https://as1.ftcdn.net/v2/jpg/04/89/38/14/1000_F_489381439_16UZ4na2g4BnNI9imOU8YxB7D1efOAjf.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" w-100"
                    src="https://as2.ftcdn.net/v2/jpg/04/16/23/23/1000_F_416232305_sDjYNm9xRduq2OnJy1hMHCcWMHAecScL.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;