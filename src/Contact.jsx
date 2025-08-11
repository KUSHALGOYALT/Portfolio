import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formResponse, setFormResponse] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            setFormResponse(' Please fill in all fields');
            return;
        }
        setFormResponse(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" type="text" value={formData.name} onChange={handleChange} />

                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange}></textarea>

                <button type="submit">Send</button>
            </form>
            {formResponse && <p className="response-message">{formResponse}</p>}
        </section>
    );
}

export default Contact;
