import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Tell us what you’re working on or the solution you’re looking for, <span>team Ecruxbot will help you to build it.</span></p>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div className="form-row">
          <input type="text" name="organization" placeholder="Organisation / Institute" required />
          {/* <select name="userType" required>
            <option value="">What Defines You</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select> */}
        </div>
        <div className="form-row">
          <input type="tel" name="phone" placeholder="Phone" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-row">
          {/* <select name="topic" required>
            <option value="">What do you want to talk about?</option>
            <option value="services">Services</option>
            <option value="products">Products</option>
            <option value="other">Other</option>
          </select> */}
        </div>
        <textarea name="message" placeholder="Drop your Message" rows="4" required></textarea>
        <button type="submit" className="contact-button">Send the message</button>
      </form>
    </div>
  );
}