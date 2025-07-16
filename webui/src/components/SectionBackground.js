function SectionBackground({ img, dark = false, color, children }) {
    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'sticky',
            zIndex: 100,
        }}>
            <div className="container-md" style={{
                backgroundColor: color || (dark ? 'var(--bg-dark-color)' : 'var(--bg-light-color)'),
                color: dark ? 'white' : 'black',
                paddingBottom: '2rem',
            }}>
                {children}
            </div>
        </div>
    );
}

export default SectionBackground;
