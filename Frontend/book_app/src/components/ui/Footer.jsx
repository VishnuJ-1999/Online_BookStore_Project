// Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <h4 style={styles.logoText}>BOOK APP</h4>
        </div>

        {/* Navigation Links */}
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/shop" style={styles.link}>Shop</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        </ul>

        {/* Social Media Icons */}
        <div style={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '2rem 1rem',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5rem',
  },
  logo: {
    flex: '1',
  },
  logoText: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    padding: 0,
    margin: 0,
    flex: '1',
    justifyContent: 'center',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    fontWeight: '500',
  },
  social: {
    display: 'flex',
    gap: '1rem',
    flex: '1',
    justifyContent: 'flex-end',
  },
  icon: {
    color: '#ccc',
    fontSize: '1.2rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Footer;
