"use client"

import { useState } from "react"
import "./Header.css"

const Header = ({ onNavigation }) => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image"></div>
          <div className="welcome-text">
            <h1>Welcome!</h1>
            <h2>ABC</h2>
          </div>
        </div>

        <nav className="navigation">
          <button className="nav-btn" onClick={() => onNavigation("home")}>
            Home
          </button>
          <button className="nav-btn" onClick={() => onNavigation("library")}>
            My Library
          </button>
          <button className="nav-btn" onClick={() => onNavigation("offline")}>
            Offline
          </button>
          <button className="nav-btn" onClick={() => onNavigation("about")}>
            About
          </button>
          <button className="nav-btn" onClick={() => onNavigation("contact")}>
            Contact
          </button>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </nav>

        <div className="social-icons">
          <div className="social-icon shopping">🛒</div>
          <div className="social-icon google">G</div>
          <div className="social-icon message">💬</div>
          <div className="social-icon facebook">f</div>
          <div className="social-icon twitter">🐦</div>
        </div>
      </div>
    </header>
  )
}

export default Header
