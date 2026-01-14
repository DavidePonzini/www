function EditableValue({ children, onChange, style }) {
    return (
        <span
            contentEditable={true}
            suppressContentEditableWarning={true}
            style={{
                cursor: 'text',
                padding: '0 0.2rem',
                ...style,
            }}
            onBlur={e => onChange(e.target.innerText)}
        >
            {children}
        </span>
    );
}

export default EditableValue;