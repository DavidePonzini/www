import type { ReactNode } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

type FooterButton = {
    text: ReactNode;
    variant?: string;
    disabled?: boolean;
    onClick?: () => void;
    autoClose?: boolean;
};

type ButtonModalProps = {
    variant?: string;
    className?: string;
    title: ReactNode;
    buttonText: ReactNode;
    children: ReactNode;
    footerButtons?: FooterButton[];
    size?: "sm" | "md" | "lg" | "xl";
    fullscreen?: boolean;
    disabled?: boolean;
};

function ButtonModal({
    variant = "primary",
    className,
    title,
    buttonText,
    children,
    footerButtons, // Array of buttons to render in the footer
    size = "md",
    fullscreen = false,
    disabled = false,
}: ButtonModalProps) {
    const [showModal, setShowModal] = useState(false);

    function handleClose() { setShowModal(false); }
    function handleShow() { setShowModal(true); }

    return (
        <>
            <Button variant={variant} className={className} onClick={handleShow} disabled={disabled}>
                {buttonText}
            </Button>

            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size={size === "md" ? undefined : size}
                fullscreen={fullscreen || undefined}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>
                
                <Modal.Footer>
                    {footerButtons && (
                        footerButtons.map((btn, index) => (
                            <Button
                                key={index}
                                variant={btn.variant || "secondary"}
                                disabled={btn.disabled || false}
                                onClick={() => {
                                    btn.onClick?.();
                                    if (btn.autoClose !== false) handleClose();
                                }}
                            >
                                {btn.text}
                            </Button>
                        ))
                    )}

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ButtonModal;
