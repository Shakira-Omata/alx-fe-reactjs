import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '1rem',
            marginBottom: '20px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                margin: 0,
                padding: 0
            }}>
                <li>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                </li>
                <li>
                    <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;