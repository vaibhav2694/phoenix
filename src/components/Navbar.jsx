// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="logo">🔥 फिनिक्स</div>
            <nav className={menuOpen ? 'nav-links mobile-open' : 'nav-links'}>
                <Link to="/" onClick={() => setMenuOpen(false)}>होम</Link>
                <Link to="/branches" onClick={() => setMenuOpen(false)}>आमच्या शाखा</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>आमच्याबद्दल</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>संपर्क</Link>
                <Link to="/quote" onClick={() => setMenuOpen(false)}>कोट मिळवा</Link>
            </nav>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
        </header>
    )
}

export default Navbar
