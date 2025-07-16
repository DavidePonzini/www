import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function LinkExternal({ href, isExternal = false, children }) {
    const style = {
        textDecoration: 'none',
        color: 'inherit'
    };

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
                {children}
            </a>
        );
    }

    return (
        <Link to={href} style={style}>
            {children}
        </Link>
    );
}

function ItemCard({ title, href, img, isExternal = false, children }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px)');

        function handleResize() {
            setIsMobile(mql.matches)
        };

        handleResize();
        mql.addEventListener('change', handleResize);
        return () => mql.removeEventListener('change', handleResize);
    }, []);

    const styles = {
        cardBase: {
            display: 'block',
            width: '18rem',
            height: '23.4rem',
            wordWrap: 'normal',
            verticalAlign: 'top',
            color: 'black',
            borderRadius: '0.25rem',
        }
    };

    return (
        <div
            style={{
                display: 'inline-flex',
                width: isMobile ? '18rem' : '36rem',
                margin: '12px',
                backgroundColor: 'rgba(5, 6, 7, 0.2)',
                borderRadius: '0.25rem',
                boxShadow: `5px 10px 20px rgba(0, 0, 0, 0.4),
                    -3px 2px 15px rgba(0, 0, 0, 0.15),
                    inset 0px -3px 8px rgba(0, 0, 0, 0.1)`,
                position: 'relative',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card style={{
                ...styles.cardBase,
                zIndex: 2,
                borderRadius: isHovered && !isMobile ? '0.25rem 0 0 0.25rem' : '0.25rem'
            }}>
                <LinkExternal href={href} isExternal={isExternal}>
                    <div style={{ overflow: 'hidden' }}>
                        <Card.Img
                            src={img}
                            alt={title}
                            style={{
                                objectFit: 'cover',
                                height: '12rem',
                                transition: 'transform 1s',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                    </div>
                    <Card.Body>
                        <h5 style={{ height: '6.5rem' }}>{title}</h5>
                        <span className="btn btn-primary">Open</span>
                    </Card.Body>
                </LinkExternal>
            </Card>

            <Card style={{
                ...styles.cardBase,
                zIndex: 1,
                transform: isHovered && !isMobile ? 'translate(100%, 0%)' : 'translate(0%, 0%)',
                position: 'absolute',
                transition: 'transform 1s',
                textAlign: 'justify',
                borderRadius: isHovered && !isMobile ? '0 0.25rem 0.25rem 0' : '0.25rem'
            }}>
                <Card.Body>
                    <p style={{
                        color: 'black',
                        height: '100%',
                        overflowY: 'auto'
                    }}>
                        {children}
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
}

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default ItemCard;
