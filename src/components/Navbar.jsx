
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="navbar rigbetel-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-left">
        <Link to="/">
          <img src="/assets/Ecruxbot_logo.png" alt="Ecruxbot Logo" className="navbar-logo" />
        </Link>
      </div>
      {/* Hamburger for mobile only */}
      <button
        className="navbar-hamburger"
        aria-label="Open menu"
        onClick={() => setDrawerOpen(true)}
      >
        <span className="hamburger-icon">&#9776;</span>
      </button>
      {/* Desktop nav links */}
      <ul className="nav-links rigbetel-nav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
        <li><Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>UpSkills</Link></li>
        <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
  <li><a href="https://ecruxbot.in/blog.php" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</a></li>
      </ul>
      <div className="navbar-right">
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>
      {/* Mobile Drawer Menu (only visible on mobile) */}
      {drawerOpen && (
        <div className="navbar-drawer-overlay" onClick={() => setDrawerOpen(false)}>
          <aside className="navbar-drawer-menu" onClick={e => e.stopPropagation()}>
            <button className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>&times;</button>
            <nav className="drawer-nav-menu">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>Home</Link>
              <Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>About Us</Link>
              <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>Products</Link>
              <Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>UpSkills</Link>
              <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>Skills</Link>
              <a href="https://ecruxbot.in/blog.php" className={location.pathname === '/blogs' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>Blogs</a>
              <Link to="/contact" className="drawer-contact-btn" onClick={() => setDrawerOpen(false)}>Contact Us</Link>
            </nav>
          </aside>
        </div>
      )}
    </nav>
  );
}
