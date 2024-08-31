import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/Monir-Hasan.png.webp'
import img2 from '../../../assets/European-IT-Orientation-Programme-2021-R-H-M-Alaol-Kabir-1.png.webp'

const Bannar = () => {
    return (
        <div>
            <Carousel >
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2}/>
                    
                </div>
                <div>
                    <img src={img1} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Bannar;