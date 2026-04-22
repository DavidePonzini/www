import { useState } from "react";

function Instruction ({ children }) {
    const [isChecked, setIsChecked] = useState(false);

    function toggleChecked() {
        setIsChecked(prev => !prev);
    }

    return (
        <li
            onClick={toggleChecked}
            style={{
                cursor: 'pointer',
                textDecoration: isChecked ? 'line-through' : 'none',
                opacity: isChecked ? 0.7 : 1,
            }}
        >
            {children}
        </li>
    );
}

export default Instruction;
