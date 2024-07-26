import React from 'react'
import './About.css'
import about_image from '../../assets/photo-collage.png.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_image} alt='About_img' className='about-img' onClick={() => {
                    setPlayState(true);
                }} />

            </div>
            <div className='about-right'>
                <h3>About Image Translation</h3>
                <h2>Black and White to Color</h2>
                <p> We harness the power of Generative Adversarial Networks (GANs) to transform your black and white images into vibrant color. Our cutting-edge model uses deep learning techniques to analyze and colorize photos, delivering realistic results with an output resolution of 256x256 pixels.</p>
                <p> The GAN approach involves a dual-network system: one network generates the colorized image, while the other network evaluates the accuracy and realism of the colors. This ensures that the final output is of high quality, closely resembling true color photos.</p>
                <p> Our model is designed for efficiency and accuracy, providing seamless colorization for your black and white photos. The end-to-end nature of our network means there is no need for manual adjustments or complex fusion rules, making the process straightforward and user-friendly.</p>
                <p>Upload your 1:1 ratio black and white photos and experience the transformation with AI-powered colorization. Our technology brings colors to your images, reviving memories in a new, colorful way.</p>
            </div>
        </div>
    )
}

export default About