import { useState } from "react";

function Instruction ({ children }) {
    const [isChecked, setIsChecked] = useState(false);

    function toggleChecked() {
        setIsChecked(prev => !prev);
    }

    return (
        <li
            onClick={toggleChecked}
        >
            {children}
        </li>
    );
}

export default Instruction;
