import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'

const Bannar = () => {
    return (
        <div>
            <Carousel>
                <div className='ease-in-out'>
                    <img src={img6} />
                    
                </div>
                <div>
                    <img src={img2}/>
                    
                </div>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4}/>
                    
                </div>
                <div>
                    <img src={img5} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Bannar;