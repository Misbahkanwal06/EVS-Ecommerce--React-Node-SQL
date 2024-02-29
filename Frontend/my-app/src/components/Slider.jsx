import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

{/* <ExampleCarouselImage text="Second slide" /> */ }

function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (

        <>
            <div className=' mt-2'>
                <Carousel className=''  activeIndex={index} onSelect={handleSelect} fade>
                    <Carousel.Item>
                        {/* <img  className='img-thumbnail '
                        style={{ width: '500px', height: '300px' }} src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="First slide" /> */}

                        <Image
                            fluid
                            style={{ width: '820px', height: '300px' }}
                            src={'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'}
                        >
                        </Image>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image

                            fluid
                            style={{ width: '820px', height: '300px' }}
                            src={'data:image/jpeg;base64,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'}
                            alt="me"
                        />


                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            fluid
                            style={{ width: '820px', height: '300px' }}
                            src={'data:image/jpeg;base64,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'}
                        >
                        </Image>

                        {/* <img style={{ width: '500px',  height: '300px' }} src="data:image/jpeg;base64,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" alt="First slide" /> */}

                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}

                    </Carousel.Item>
                </Carousel>
            </div >



        </>
    )
}

export default Slider;
