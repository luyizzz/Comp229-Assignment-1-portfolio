/* 
* File Name: contact.jsx
* Student Name: Louis| LU-HSIANG WANG
* Student ID: 301476880 
* Date: January 29, 2025 
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Contact() {
    //css
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to a server
        console.log(formData);
        navigate('/');
    };

    return (
        //html
        <div className="panel">
            <h3>Contact Information</h3>
            <p>Name: LU-HSIANG WANG (Louis)</p>
            <p>Email: lw244@my.centennialcollege.ca</p>
            <p>Phone: (905) 341-9066</p>
            <p>Address: 941 Progress Ave, Scarborough, ON M1G 3T8</p>
            <h3>Send me a message</h3>
            <p></p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}