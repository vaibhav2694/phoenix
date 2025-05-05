import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css'; // Link to the footer CSS
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Phoenix Com & Cameras</h2>
                    <p>Since 2010</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><Link to="/about">About Us</Link></li>

                    </ul>
                </div>
            </div>
            <a
                href="https://wa.me/919209188133" // Replace with your actual WhatsApp number
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp size={28} />
            </a>
            <div className="footer-bottom">
                <p>&copy; 2025 Phoenix Com & Cameras. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
