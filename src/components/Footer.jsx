import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer enhanced-footer">
      <div className="footer-main-row">
        <div className="footer-col footer-brand-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 10, minWidth: 180, marginLeft: 30 }}>
          <img 
            src="/assets/Ecruxbot_logo.png" 
            alt="Ecruxbot Logo" 
            className="footer-logo" 
            style={{ maxWidth: 130, marginBottom: 8, marginTop: 10, marginLeft: 10 }}
          />
          <img 
            src="/assets/vR6mwrGRsr-unscreen.gif" 
            alt="Ecruxbot Mascot" 
            style={{ 
              width: 110, 
              marginTop: 0, 
              marginBottom: 0, 
              display: 'block', 
              background: 'transparent', 
              padding: 0,
              boxShadow: 'none',
              marginLeft: 18
            }} 
          />
        </div>
        <div className="footer-col footer-address-col">
          <h3 style={{ color: '#1976d2', marginBottom: 8 }}>PUNE</h3>
          <div>
            1st Floor, Gokul Building, Dnyaneshwar Paduka Chowk,<br />
            FC Road, Shivajinagar, Pune 411005
          </div>
        </div>
        <div className="footer-col footer-address-col">
          <h3 style={{ color: '#1976d2', marginBottom: 8 }}>JALGAON</h3>
          <div>
            2nd Floor, Near M. J. College,<br />
            Jalgaon, Maharashtra, 425001 – India
          </div>
        </div>
        <div className="footer-col footer-address-col">
          <h3 style={{ color: '#1976d2', marginBottom: 8 }}>CONTACT</h3>
          <div style={{ marginTop: 8 }}>
            Ecruxbot: +91 92255 73273<br />
            <a href="mailto:ecruxbot@gmail.com" style={{ color: '#1976d2', marginBottom: '8px', display: 'inline-block' }}>ecruxbot@gmail.com</a>
            <div style={{ marginTop: '8px' }}>
              <a href="https://www.instagram.com/ecruxbot.in/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', verticalAlign: 'middle' }} aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                  <rect width="24" height="24" rx="6" fill="#E1306C"/>
                  <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="17" cy="7" r="1" fill="#fff"/>
                </svg>
              </a>
              <a href="https://github.com/ecruxbot" target="_blank" rel="noopener noreferrer" style={{ verticalAlign: 'middle' }} aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                  <rect width="24" height="24" rx="6" fill="#18111c"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.06 20.17 9.26 21.5C9.86 21.58 10.08 21.27 10.08 21.01C10.08 20.77 10.07 20.13 10.07 19.37C7 19.91 6.34 17.97 6.34 17.97C5.82 16.74 5.03 16.41 5.03 16.41C3.92 15.68 5.12 15.7 5.12 15.7C6.34 15.8 6.97 16.97 6.97 16.97C8.07 18.77 9.84 18.23 10.5 17.97C10.58 17.19 10.88 16.68 11.21 16.41C8.97 16.14 6.62 15.18 6.62 11.41C6.62 10.32 7.03 9.44 7.7 8.77C7.59 8.5 7.23 7.41 7.8 5.97C7.8 5.97 8.64 5.68 10.07 6.62C10.87 6.39 11.73 6.27 12.59 6.27C13.45 6.27 14.31 6.39 15.11 6.62C16.54 5.68 17.38 5.97 17.38 5.97C17.95 7.41 17.59 8.5 17.48 8.77C18.15 9.44 18.56 10.32 18.56 11.41C18.56 15.19 16.2 16.13 13.96 16.4C14.37 16.73 14.74 17.36 14.74 18.32C14.74 19.68 14.73 20.68 14.73 21.01C14.73 21.27 14.95 21.59 15.56 21.5C19.76 20.17 22.82 16.42 22.82 12C22.82 6.48 18.34 2 12 2Z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © 2022-2025 Ecruxbot.in. All rights reserved.
      </div>
    </footer>
  );
}
