function About() {
    return (
        <div className="container">
            <main>
                {/* Page Header */}
                <section className="page-header">
                    <h2>About This Website</h2>
                    <p className="page-subtitle">
                        Learn more about our dark mode implementation and design philosophy.
                    </p>
                </section>

                {/* About Content */}
                <section className="content-section">
                    <h3>Our Mission</h3>
                    <p>We believe in creating web experiences that are both beautiful and accessible. This website demonstrates a modern approach to dark mode implementation that prioritizes user experience, accessibility, and performance.</p>
                </section>

                <section className="content-section">
                    <h3>Technology Stack</h3>
                    <p>This website is built using modern web technologies:</p>
                    <ul>
                        <li><strong>React</strong> - Modern UI library for building interactive user interfaces</li>
                        <li><strong>React Router</strong> - Declarative routing for React applications</li>
                        <li><strong>HTML5</strong> - Semantic markup for better structure and accessibility</li>
                        <li><strong>CSS3</strong> - Custom properties (CSS variables) for dynamic theming</li>
                        <li><strong>JavaScript</strong> - Theme management and localStorage persistence</li>
                        <li><strong>Responsive Design</strong> - Mobile-first approach for all devices</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h3>Design Principles</h3>
                    <p>Our design follows these key principles:</p>
                    <ul>
                        <li><strong>User Control</strong> - Users can manually override system preferences</li>
                        <li><strong>Persistence</strong> - Preferences are saved and remembered</li>
                        <li><strong>Accessibility</strong> - WCAG compliant contrast ratios</li>
                        <li><strong>Performance</strong> - Smooth transitions and efficient code</li>
                        <li><strong>Modern UI</strong> - Clean, minimalist design with excellent UX</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h3>Color Scheme</h3>
                    <p>The dark mode implementation uses carefully selected colors to ensure optimal readability and visual comfort:</p>
                    <ul>
                        <li>Dark gray background (#181818) for reduced eye strain</li>
                        <li>White text (#FFFFFF) for maximum contrast</li>
                        <li>Accent colors that adapt to the current theme</li>
                        <li>Subtle borders and shadows for depth</li>
                    </ul>
                </section>

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

export default About;

