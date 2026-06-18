import { useEffect, useState } from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';

const PageNotFound = () => {

    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateY((prev) => (prev === 0 ? -12 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            padding: '20px'
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            padding: '40px 20px',
            width: '100%',
            maxWidth: '550px'
        },
        iconContainer: {
            fontSize: '80px',
            color: '#FF1B1C',
            transform: `translateY(${translateY}px)`,
            transition: 'transform 1s ease-in-out',
            marginBottom: '10px'
        },
        title: {
            fontWeight: '700',
            fontSize: '3.5rem',
            color: '#FF1B1C',
            letterSpacing: '-1px',
            margin: '0'
        },
        subtitle: {
            color: '#6c757d',
            fontSize: '1.1rem',
            marginTop: '10px',
            marginBottom: '30px',
            lineHeight: '1.6'
        },
        button: {
            backgroundColor: '#198754',
            color: '#ffffff',
            border: 'none',
            padding: '12px 30px',
            fontSize: '1rem',
            borderRadius: '8px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
        }
    };

    return (
        <main>
            <div style={styles.container}>
                <div style={styles.card} className="text-center">

                    <Result icon={
                        <div style={styles.iconContainer}>
                            <FiAlertTriangle />
                        </div>
                    }
                        title={
                            <h1 style={styles.styles?.title || styles.title}>404</h1>
                        }
                        subTitle={
                            <p style={styles.subtitle}>
                                Sorry! The page you are looking for does not exist.
                            </p>
                        }
                        extra={[
                            <Link
                                to="/"
                                key="home"
                                style={styles.button}
                                className="btn-success-hover"
                            >
                                <FiHome /> Back to Home
                            </Link>
                        ]}
                    />

                </div>
            </div>
        </main>
    );
};

export default PageNotFound;