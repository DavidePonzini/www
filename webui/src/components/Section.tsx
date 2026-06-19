import type { PropsWithChildren, ReactNode } from 'react';

type SectionProps = PropsWithChildren<{
    title: ReactNode;
}>;

function Section({ title, children }: SectionProps) {
    return (
        <>
            <h1 style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem 0',
                whiteSpace: 'nowrap',
            }}>
                {/* First left segment */}
                <span style={{
                    width: '2rem',
                    height: '5px',
                    borderTop: `2px double #c9a227`,
                    borderBottom: `2px double #c9a227`,
                    marginTop: '.25rem',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 65%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 65%, black 100%)',
                }} />

                {/* Star */}
                <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    style={{
                        flexShrink: 0,
                        marginTop: '.25rem',
                    }}
                >
                    <path
                        d='M12 1 L15.2 8.8 L23 12 L15.2 15.2 L12 23 L8.8 15.2 L1 12 L8.8 8.8 Z'
                        fill='#c9a227'
                    />
                </svg>

                {/* Second left segment */}
                <span style={{
                    width: '1rem',
                    height: '5px',
                    borderTop: `2px double #c9a227`,
                    borderBottom: `2px double #c9a227`,
                    marginTop: '.25rem',
                }} />

                <span
                    className='mx-2'
                    style={{
                        fontVariant: 'small-caps',
                        // color: '#3b2a1a',
                    }}
                >
                    {title}
                </span>

                {/* Right segment */}
                <span style={{
                    flex: 1,
                    height: '5px',
                    borderTop: `2px double #c9a227`,
                    borderBottom: `2px double #c9a227`,
                    marginTop: '.25rem',
                    maskImage: 'linear-gradient(to right, black 0%, black 65%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 0%, black 65%, transparent 100%)',
                }} />
            </h1>

            {children}
        </>
    );
}

export default Section;