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
                listStyle: "none",
                marginBottom: "0.75rem",
                padding: "0.75rem 1rem",
                border: "1px solid #d9d9d9",
                borderRadius: "0.75rem",
                backgroundColor: isChecked ? "#f3f3f3" : "#ffffff",
                color: "#222222",
                cursor: "pointer",
                textDecoration: isChecked ? "line-through" : "none",
                opacity: isChecked ? 0.5 : 1,
                transition: "opacity 0.2s ease, text-decoration 0.2s ease, background-color 0.2s ease",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)"
            }}
        >
            {children}
        </li>
    );
}

export default Instruction;
