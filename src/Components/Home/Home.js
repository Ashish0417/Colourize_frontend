import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/iconmonstr-arrow-right-thin-240.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home container'>
        <div className='hero-text'>
            <h1>We Transform Memories with Colors</h1>
            <hr/>
            <p style={{ fontWeight: 600 }} >Experience the magic of GAN deep learning as we transform your black and white photos into vibrant color.</p>
            <p>Our state-of-the-art colorization service uses cutting-edge AI techniques to convert black and white images into stunning color photos. Simply upload your 1:1 ratio images, and let our technology handle the rest. Our approach ensures accurate and realistic color representation, giving your old photos a new lease on life.</p>
            <Link to='/upload'className='btn' style={{ padding: '4px 25px' }}>Try Now<img src={dark_arrow}/></Link>
        </div>
    </div>
  )
}

export default Home