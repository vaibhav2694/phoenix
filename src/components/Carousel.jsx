// Carousel.jsx
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function HeroCarousel() {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img src="/path-to-img1.jpg" alt="Banner 1" />
                <p className="legend">कंप्युटर विक्री व दुरुस्ती</p>
            </div>
            <div>
                <img src="/path-to-img2.jpg" alt="Banner 2" />
                <p className="legend">CCTV कॅमेरे उपलब्ध</p>
            </div>
        </Carousel>
    )
}
