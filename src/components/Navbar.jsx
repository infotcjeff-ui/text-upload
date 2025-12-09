import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <h1>Dark Mode</h1>
                </div>
                <ul className="nav-menu">
                    <li>
                        <Link 
                            to="/" 
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <button 
                    id="theme-toggle" 
                    className="theme-toggle" 
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <span className="theme-icon">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

