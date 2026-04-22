function NotesDash({ x, y, width, height }) {
    return (
        <span
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: width,
                height: height,
                backgroundColor: '#b32020',
            }}
        />
    );
}

function RecipeNotes({ children }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <div
                aria-hidden='true'
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '8rem',
                    marginBottom: '-8rem',
                }}
            >
                <NotesDash
                    x='30px' y='0px'
                    width='2px' height='10px'
                />
                <NotesDash
                    x='30px' y='15px'
                    width='2px' height='80%'
                />
                <NotesDash
                    x='30px' y='calc(15px + 80% + 5px)'
                    width='2px' height='10px'
                />

                <NotesDash
                    x='0rem' y='30px'
                    width='10px' height='2px'
                />
                <NotesDash
                    x='15px' y='30px'
                    width='80%' height='2px'
                />
                <NotesDash
                    x='calc(15px + 80% + 5px)' y='30px'
                    width='10px' height='2px'
                />
            </div>

            <div
                style={{
                    paddingLeft: '2.5rem',
                    paddingTop: '2.5rem',
                    color: '#7f2318',
                    fontFamily: '"Georgia", "Times New Roman", serif',
                }}
            >
                <div
                    style={{
                        marginBottom: '.2rem',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#b32020',
                    }}
                >
                    Note
                </div>

                <div style={{ fontStyle: 'italic' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default RecipeNotes;
