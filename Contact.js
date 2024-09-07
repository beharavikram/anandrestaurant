import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        {/* Contact Info */}
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form action="/submit-form" method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
