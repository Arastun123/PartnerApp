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
                <p>Text for Item 1</p>
                <p>Text for Item 1</p>
            </div>

            <div>
                <img src="assests/img/img2.jpg" alt="Image 2" />
                <p>Text for Item 2</p>
                <p>Text for Item 2</p>
            </div>

            <div>
                <img src="assests/img/img3.jpg" alt="Image 3" />
                <p>Text for Item 3</p>
                <p>Text for Item 3</p>
            </div>

            <div>
                <img src="assests/img/img1.jpg" alt="Image 1" />
                <p>Text for Item 4</p>
                <p>Text for Item 4</p>
            </div>

            <div>
                <img src="assests/img/img2.jpg" alt="Image 2" />
                <p>Text for Item 5</p>
                <p>Text for Item 5</p>
            </div>

            <div>
                <img src="assests/img/img3.jpg" alt="Image 3" />
                <p>Text for Item 6</p>
                <p>Text for Item 6</p>
            </div>
        </Carousel>
    );
};

export default CarouselComp;
