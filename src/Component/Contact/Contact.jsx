import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container contact-form-container">
            <div className="row">
            <div className="col-md-6 image-section mt-2">
                    <img src="../Assets/312912-P8K60N-510.jpg" alt="Contact Us" className="contact-image" />
                </div>

                <div className="col-md-6 offset-md-3 mt-4">
                    <div className="card contact-form">
                        <div className="card-header contact-form-header">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Contact;
