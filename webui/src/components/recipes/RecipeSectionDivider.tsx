function RecipeSectionDivider({ title, accent = '#8f2d1f' }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                margin: '.5rem 0 1rem',
            }}
        >
            <span
                aria-hidden='true'
                style={{
                    flex: 1,
                    maxWidth: '9rem',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${accent})`,
                }}
            />

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.75rem',
                    color: accent,
                }}
            >
                <span
                    aria-hidden='true'
                    style={{
                        width: '.5rem',
                        height: '.5rem',
                        borderRadius: '50%',
                        backgroundColor: accent,
                        boxShadow: `0 0 0 4px ${accent}1f`,
                    }}
                />

                <span
                    style={{
                        fontFamily: '"Georgia", "Times New Roman", serif',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        letterSpacing: '.2em',
                        textTransform: 'uppercase',
                    }}
                >
                    {title}
                </span>

                <span
                    aria-hidden='true'
                    style={{
                        width: '.5rem',
                        height: '.5rem',
                        borderRadius: '50%',
                        backgroundColor: accent,
                        boxShadow: `0 0 0 4px ${accent}1f`,
                    }}
                />
            </div>

            <span
                aria-hidden='true'
                style={{
                    flex: 1,
                    maxWidth: '9rem',
                    height: '2px',
                    background: `linear-gradient(90deg, ${accent}, transparent)`,
                }}
            />
        </div>
    );
}

export default RecipeSectionDivider;
