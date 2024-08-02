import React from 'react';
import '../styling/AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-us-container'>
            <header className='about-us-header'>
                <h1>About Us</h1>
            </header>
            <main className='about-us-content'>
                <section>
                    <h2>Our Mission</h2>
                    <p>At Vehicle Repair Hub, our mission is to empower vehicle owners and enthusiasts with the knowledge and tools they need to maintain and repair their vehicles with confidence. We strive to provide comprehensive, accurate, and easy-to-follow resources, including diagnostic tools, repair guides, and maintenance tips.</p>
                </section>
                <section>
                    <h2>Our Team</h2>
                    <p>Our team consists of experienced automotive professionals who are passionate about helping others. With years of experience in the field, we bring a wealth of knowledge and expertise to our users.</p>
                </section>
                <section>
                    <h2>Our History</h2>
                    <p>Founded in 2024, Vehicle Repair Hub has grown from a small blog into a leading resource for vehicle maintenance and repair. We continually update our content to reflect the latest industry standards and best practices.</p>
                </section>
            </main>
            <footer className='about-us-footer'>
                <p>&copy; 2024 Vehicle Repair Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
