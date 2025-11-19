import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      
      <div style={styles.buttonContainer}>
        <Link to="/" style={styles.link}>Go back home</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '6rem',
    marginBottom: '10px',
    color: '#343a40',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#6c757d',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    padding: '10px 20px',
    backgroundColor: '#6050DC',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '0.3s ease',
  },
};

export default NotFoundPage;
