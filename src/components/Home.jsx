function Home() {
    return (
        <div className="container">
            <main>
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h2 className="hero-title">Welcome to Dark Mode</h2>
                        <p className="hero-subtitle">
                            Experience intelligent theme switching with automatic system detection and persistent user preferences.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🌓</div>
                        <h3>Auto Detection</h3>
                        <p>Automatically detects your operating system preference using the prefers-color-scheme media query and applies the appropriate theme on initial load.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">💾</div>
                        <h3>Persistent Storage</h3>
                        <p>Your manual selection is saved in localStorage to ensure your preference persists across page reloads, overriding the system default if set.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>CSS Variables</h3>
                        <p>Uses CSS custom properties (variables) to manage colors, making theme switching smooth and efficient.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">♿</div>
                        <h3>Accessibility</h3>
                        <p>Meets WCAG accessibility standards with a contrast ratio of at least 4.5:1 for normal text, ensuring excellent readability.</p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="content-section">
                    <h2>Features</h2>
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
                    <h2>Accessibility</h2>
                    <p>This implementation ensures proper contrast ratios for readability. The dark mode uses a dark gray background (#181818) with white text (#FFFFFF) to provide excellent contrast and reduce eye strain in low-light conditions.</p>
                </section>
            </main>
        </div>
    );
}

export default Home;

