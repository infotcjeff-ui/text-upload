import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        console.log('Form submitted:', formData);
        
        // Show success message
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        
        // Reset status after 3 seconds
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus(null);
        }, 3000);
    };

    return (
        <div className="container">
            <main>
                {/* Page Header */}
                <section className="page-header">
                    <h2>Get In Touch</h2>
                    <p className="page-subtitle">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                </section>

                {/* Contact Form */}
                <section className="content-section">
                    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message here..."
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn-submit"
                            disabled={isSubmitting}
                            style={submitStatus === 'success' ? {
                                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                            } : {}}
                        >
                            <span>
                                {submitStatus === 'success' ? 'Message Sent! ✓' : 'Send Message'}
                            </span>
                        </button>
                    </form>
                </section>

                {/* Contact Information */}
                <section className="content-section">
                    <h3>Other Ways to Reach Us</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h4>Email</h4>
                                <p>contact@darkmodewebsite.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">🌐</div>
                            <div>
                                <h4>Website</h4>
                                <p>www.darkmodewebsite.com</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Content */}
                <section className="content-section">
                    <h3>Features</h3>
                    <p>The theme toggle button in the header allows you to switch between light and dark modes. Your preference is automatically saved and will persist when you reload the page.</p>
                    <p>This website features an intelligent dark mode system that:</p>
                    <ul>
                        <li>Automatically detects your operating system preference</li>
                        <li>Allows manual theme switching with the toggle button</li>
                        <li>Remembers your preference across page reloads</li>
                        <li>Uses CSS custom properties for easy theme management</li>
                        <li>Meets WCAG accessibility standards for contrast</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h3>Accessibility</h3>
                    <p>This implementation ensures proper contrast ratios for readability. The dark mode uses a dark gray background (#181818) with white text (#FFFFFF) to provide excellent contrast and reduce eye strain in low-light conditions.</p>
                </section>
            </main>
        </div>
    );
}

export default Contact;

