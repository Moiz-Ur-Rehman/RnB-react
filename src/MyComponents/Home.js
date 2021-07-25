import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-slideshow-image';
import './Home.css'
import 'react-slideshow-image/dist/styles.css'

function Home() {
    const slideImages = [
        './images/slide_1.jpg',
        './images/slide_2.jpg',
        './images/slide_3.jpg'
      ];
      const fadeProperties = {
        duration: 3000,
        transitionDuration: 800,
        pauseOnHover: true,
        indicators: true,
        arrows: false
      };
    return (
        <div className="main">
            <div className="main-wrap">
                <Fade {...fadeProperties}>
                    <div className="mySlides main-container">
                        <img src={slideImages[0]} alt="shop now"/>
                        <div className="shop-now">
                            <h1>Earrings</h1>
                            <Link to="">EXPLORE</Link>
                        </div>
                    </div>
                    <div className="mySlides main-container">
                        <img src={slideImages[1]} alt="shop now"/>
                        <div className="shop-now">
                            <h1>Necklaces</h1>
                            <Link to="">EXPLORE</Link>
                        </div>
                    </div>
                    <div className="mySlides main-container">
                        <img src={slideImages[2]} alt="shop now"/>
                        <div className="shop-now">
                            <h1>Braclets</h1>
                            <Link to="">EXPLORE</Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Home