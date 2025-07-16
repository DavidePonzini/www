import titleDecoration from '../res/heading-border-left-2.png'

function Section({ title, children }) {
    return (
        <>
            <h1 style={{
                padding: '2rem 0 2rem 4rem',
                textAlign: 'left',
                display: 'table',
                whiteSpace: 'nowrap',
                position: 'relative',
            }}>
                {title}
                <span style={{
                    content: '""',
                    display: 'table-cell',
                    width: '100%',
                    backgroundImage: `url(${titleDecoration})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center left',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    zIndex: -1,
                }} />
            </h1>

            <div className="row center">
                <div className="col-lg links">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Section;
