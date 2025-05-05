// Navbar.jsx
import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile ? <MobileNavbar /> : (
        <nav>
            <a href="/">होम</a>
            <a href="/branches">आमच्या शाखा</a>
            <a href="/about">आमच्याबद्दल</a>
            <a href="/contact">संपर्क</a>
            <a href="/quote">कोट मिळवा</a>
        </nav>
    )
}
