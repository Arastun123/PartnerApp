import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CarouselComp = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
        }
    };



    return (
        <Carousel responsive={responsive}>
            <div>
                <img src="assests/img/img1.jpg" alt="Image 1" />
                <p>Item 1</p>
                <p>Item 1</p>
            </div>

            <div>
                <img src="assests/img/img2.jpg" alt="Image 2" />
                <p>Item 2</p>
                <p>Item 2</p>
            </div>

            <div>
                <img src="assests/img/img3.jpg" alt="Image 3" />
                <p>Item 3</p>
                <p>Item 3</p>
            </div>

            <div>
                <img src="assests/img/img1.jpg" alt="Image 1" />
                <p>Item 4</p>
                <p>Item 4</p>
            </div>

            <div>
                <img src="assests/img/img2.jpg" alt="Image 2" />
                <p>Item 5</p>
                <p>Item 5</p>
            </div>

            <div>
                <img src="assests/img/img3.jpg" alt="Image 3" />
                <p>Item 6</p>
                <p>Item 6</p>
            </div>
        </Carousel>
    );
};

export default CarouselComp;
