import type { CSSProperties, PropsWithChildren } from 'react';

type EditableValueProps = PropsWithChildren<{
    onChange: (value: string) => void;
    style?: CSSProperties;
    editable?: boolean;
}>;

function EditableValue({ children, onChange, style, editable = true }: EditableValueProps) {
    return (
        <span
            contentEditable={editable}
            suppressContentEditableWarning={editable}
            style={{
                cursor: editable ? 'text' : 'inherit',
                padding: '0 0.2rem',
                ...style,
            }}
            onBlur={editable ? event => onChange(event.currentTarget.innerText) : undefined}
            onKeyDown={editable ? event => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    event.currentTarget.blur();
                }
            } : undefined}
        >
            {children}
        </span>
    );
}

export default EditableValue;
