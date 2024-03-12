import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>
                <Image
                    fluid
                    // style={{ width: '100%', height: 'auto' }}
                    style={{ width: '100%', height: '500px' }}
                    src={'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/Top-10-Women-Clothing-Brands-in-Pakistan.jpg?alt=media&token=f02274b6-8874-4bdb-9786-65791d05005e'}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Image
                    fluid
                    // style={{ width: '100%', height: 'auto' }}
                    style={{ width: '100%', height: '500px' }}
                    src={'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/ss2.webp?alt=media&token=fc506c74-9644-464a-b656-ced342f8ece0'}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Image
                    fluid
                    // style={{ width: '100%', height: 'auto' }}
                    style={{ width: '100%', height: '500px' }}
                    src={'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/ss3.jpg?alt=media&token=d57ae41c-6ebd-4733-80a1-62e1554526f8'}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
