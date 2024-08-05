import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [showSettingsOptions, setShowSettingsOptions] = useState(false);

    const handleGetStarted = () => {
        navigate('/home');
    };

    const handleLearnMore = (section) => {
        navigate(`/learn-more/${section}`);
    };

    const handleNavigation = (path) => {
        if (path === '/settings') {
            setShowSettingsOptions(!showSettingsOptions);
        } else if (path === '/logout') {
            navigate('/login');
        } else {
            navigate(path);
        }
    };

    return (
        <div className='landing-container'>
            <aside className='landing-sidebar'>
                <button onClick={() => handleNavigation('/profile')}>Profile</button>
                <button onClick={() => handleNavigation('/settings')}>Settings</button>
                {showSettingsOptions && (
                    <div className='settings-options'>
                        <button onClick={() => navigate('/manage-account')}>Manage Account</button>
                        <button onClick={() => navigate('/users')}>Users</button>
                        <button onClick={() => navigate('/notifications')}>Notifications</button>
                    </div>
                )}
                <button onClick={() => handleNavigation('/help')}>Help</button>
                <button onClick={() => handleNavigation('/faq')}>FAQ</button>
                <button onClick={() => handleNavigation('/support')}>Support</button>
                <button onClick={() => handleNavigation('/about-us')}>About Us</button>
                <button onClick={() => handleNavigation('/logout')}>Logout</button>
            </aside>
            <div className='landing-content'>
                <header className='landing-header'>
                    <h1>Welcome to the Dashboard</h1>
                    <button onClick={handleGetStarted}>Get Started</button>
                </header>
                <main className='landing-main'>
                    <h1>WELCOME TO DASH BOARD.</h1>
                    <section className='featured-tools'>
                        <h2>Featured Tools</h2>
                        <div className='tool'>
                            <h3>Diagnostic Tool</h3>
                            <p>Our Diagnostic Tool provides accurate diagnostics to identify vehicle issues quickly and efficiently. Understand problems and find solutions with ease.</p>
                            <button onClick={() => handleLearnMore('diagnostic-tool')}>Learn More</button>
                        </div>
                        <div className='tool'>
                            <h3>Repair Guides</h3>
                            <p>Explore our step-by-step repair guides designed for common vehicle repairs. From oil changes to brake replacements, we’ve got you covered.</p>
                            <button onClick={() => handleLearnMore('repair-guides')}>Learn More</button>
                        </div>
                        <div className='tool'>
                            <h3>Maintenance Tips</h3>
                            <p>Get expert advice to keep your vehicle in top shape. Regular maintenance tips and tricks ensure your vehicle runs smoothly for years.</p>
                            <button onClick={() => handleLearnMore('maintenance-tips')}>Learn More</button>
                        </div>
                    </section>
                    
                    <section className='vehicle-information'>
                        <h2>Vehicle Information</h2>
                        <p>Whether you’re a car enthusiast or just want to keep your vehicle in optimal condition, our comprehensive vehicle information covers everything from basic maintenance to advanced repair techniques.</p>
                        <div className='vehicle-info-card'>
                            <h3>Car Care Basics</h3>
                            <p>Learn about essential car care practices, including checking fluid levels, tire maintenance, and more.</p>
                            <button onClick={() => handleLearnMore('car-care-basics')}>Learn More</button>
                        </div>
                        <div className='vehicle-info-card'>
                            <h3>Advanced Repairs</h3>
                            <p>Dive into advanced repair techniques for more complex issues. Perfect for those who want to go beyond basic maintenance.</p>
                            <button onClick={() => handleLearnMore('advanced-repairs')}>Learn More</button>
                        </div>
                    </section>

                    <section className='testimonials'>
                        <h2>What Our Users Say</h2>
                        <div className='testimonial'>
                            <p>"This site is a lifesaver! The guides are easy to follow and very helpful."</p>
                            <p>- Holy Prashanth</p>
                        </div>
                        <div className='testimonial'>
                            <p>"Great resources for vehicle maintenance. I highly recommend it!"</p>
                            <p>- Jamie L.</p>
                        </div>
                    </section>
                    
                    <section className='contact-info'>
                        <h2>Contact Us</h2>
                        <p>Have questions or need support? Reach out to us:</p>
                        <p>Email: <a href="mailto:support@vehiclerepairhub.com">support@vehiclerepairhub.com</a></p>
                        <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
                    </section>
                </main>
                <footer className='landing-footer'>
                    <p>&copy; 2024 Vehicle Repair Hub. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
