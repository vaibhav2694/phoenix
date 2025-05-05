import { useState, useEffect } from 'react';

import '../assets/css/Home.css';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // For routing
import feature1 from '/img/homediv/cam1.jpg';
import feature2 from '/img/homediv/lap2.png';
import feature3 from '/img/homediv/lap1.jpeg';


const clientImages = [
    "/img/client/client1.png",
    "/img/client/client2.jpeg",
    "/img/client/client3.jpg",
    "/img/client/client4.png",
];

function ClientCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll logic every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clientImages.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    return (
        <section className="client-carousel">
            <h2>आमचे समाधानी ग्राहक</h2>
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {clientImages.map((image, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={image} alt={`Client ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            src: "/img/homebanner/banner1.jpg",
            caption: "संगणक विक्री व दुरुस्ती",
        },
        {
            src: "/img/homebanner/banner2.jpg",
            caption: "संगणक, प्रिंटर आणि अक्सेसरीज विक्री",
        },
        {
            src: "/img/homebanner/banner3.jpg",
            caption: "CCTV इंस्टॉलेशन व सेवा",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <main className="home">
            {/* Carousel */}
            <section className="carousel">
                <button className="prev" onClick={prevSlide}>❮</button>
                <img src={images[currentIndex].src} alt={images[currentIndex].caption} />
                <div className="caption">{images[currentIndex].caption}</div>
                <button className="next" onClick={nextSlide}>❯</button>
            </section>

            <section className="intro-text">
                <Typography variant="h6" align="center" sx={{ mt: 4, color: '#444' }}>
                    गणेश जगताप सर यांचे
                </Typography>
                <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                    फिनिक्स कॉम्प्युटर्स & CCTV
                </Typography>
                <Typography variant="h6" align="center" sx={{ color: '#666' }}>
                    २०१० पासून आपल्या सेवेत...
                </Typography>
            </section>

            {/* Zigzag pattern divs */}
            <section className="feature-container">
                <div className="feature-card left">
                    <img src={feature2} alt="संगणक विक्री" />
                    <h3>लॅपटॉप्स विक्री</h3>
                    <p>उत्कृष्ट संगणक, तंत्रज्ञान आणि संगणक हार्डवेअरची विक्री. आम्ही नवीन लॅपटॉप्स १ वर्षाच्या वॉरंटीसह सर्वात स्वस्त दरात उपलब्ध करून देतो.</p>
                </div>
                <div className="feature-card right">
                    <img src={feature1} alt="CCTV इंस्टॉलेशन" />
                    <h3>CCTV इंस्टॉलेशन</h3>
                    <p>व्यावसायिक आणि घरगुती CCTV इंस्टॉलेशन सेवा. आम्ही आधुनिक तंत्रज्ञानासह 24x7 निगराणी व्यवस्था, मोबाइल अ‍ॅपद्वारे लाईव्ह व्ह्यू आणि सुरक्षिततेसाठी विश्वासार्ह सेवा प्रदान करतो.</p>
                </div>
            </section>


            {/* Section 4: Our Clients Carousel */}
            <ClientCarousel />
        </main>
    );
}

export default Home;
