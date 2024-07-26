import React from 'react'
import './Results.css'
import gallary_1 from '../../assets/white_flower.jpg'
import gallary_2 from '../../assets/red_lotus.jpg'
import gallary_3 from '../../assets/landscape_green.png'
import gallary_4 from '../../assets/landscape_white.png'
import arrow from '../../assets/white_right_arrow.png'

const Results = () => {
    const handleButtonClick = () => {
        window.open('https://www.kaggle.com/datasets/vaibhavrmankar/colour-the-flower-gan-data', '_blank');
    };
    return (
        <div className='results'>
            <div className='gallery' >
                <img src={gallary_1} alt='Result_image_!' />
                <img src={gallary_2} alt='Result_image' />
                <img src={gallary_3} alt='Result_image' />
                <img src={gallary_4} alt='Result_image' />
            </div>
            <button className='btn dark-btn' onClick={handleButtonClick} >See More Here<img src ={arrow} alt=''/></button>
        </div>
    )
}

export default Results