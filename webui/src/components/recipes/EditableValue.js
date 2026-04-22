function EditableValue({ children, onChange, style, editable = true }) {
    return (
        <span
            contentEditable={editable}
            suppressContentEditableWarning={editable}
            style={{
                cursor: editable ? 'text' : 'inherit',
                padding: '0 0.2rem',
                ...style,
            }}
            onBlur={editable ? e => onChange(e.target.innerText) : undefined}
        >
            {children}
        </span>
    );
}

export default EditableValue;
