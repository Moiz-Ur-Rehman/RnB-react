import React from 'react'
import './Styles.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact-wrap">
                <h6>CONTACT</h6>
                <h2>Get In Touch</h2>
                <p>Have a question about a product or an order, drop us a message and we'll get back to you.</p><br/>
                <input type="text" name="name" placeholder="Name" id="name" className="all" required/><br/>
                <input type="email" name="Email" placeholder="Email" id="email" className="all" required/><br/>
                <input type="tel" name="phone" placeholder="Phone Number" id="phone" className="all" required/><br/>
                <textarea name="message" id="message" placeholder="Message" className="all" rows="4" required></textarea><br/>
                <button type="submit">SEND</button>
            </div>
        </div>
    )
}

export default Contact