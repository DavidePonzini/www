import { useEffect, useRef, useState } from 'react';

import { useFlow } from './FlowContext';

const CHECKED_COLOR = '#2f9e44';
const UNCHECKED_COLOR = '#f08c00';

function Step({
    children,
    id,
    nextId = null
}) {
    const { registerAnchor, requestLayoutUpdate } = useFlow();
    const anchorRef = useRef(null);
    const rowRef = useRef(null);

    const [checked, setChecked] = useState(false);

    useEffect(function() {
        registerAnchor(id, anchorRef.current, {
            kind: 'step',
            nextIds: nextId ? [nextId] : [],
            checked
        });

        requestLayoutUpdate();

        return function() {
            registerAnchor(id, null, null);
        };
    }, [checked, id, nextId, registerAnchor, requestLayoutUpdate]);

    useEffect(function() {
        if (!rowRef.current) {
            return;
        }

        const resizeObserver = new ResizeObserver(function() {
            requestLayoutUpdate();
        });

        resizeObserver.observe(rowRef.current);

        return function() {
            resizeObserver.disconnect();
        };
    }, [requestLayoutUpdate]);

    return (
        <div
            ref={rowRef}
            onClick={function() {
                setChecked(function(value) {
                    return !value;
                });
            }}
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                width: '100%',
                position: 'relative',
                cursor: 'pointer'
            }}
        >
            <div
                style={{
                    width: '12px',
                    minWidth: '12px',
                    height: '12px',
                    flexShrink: 0,
                    marginTop: '0.45em'
                }}
            >
                <div
                    ref={anchorRef}
                    style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '999px',
                        backgroundColor: checked ? CHECKED_COLOR : UNCHECKED_COLOR
                    }}
                />
            </div>

            <div
                style={{
                    minWidth: 0,
                    flex: '0 1 auto',
                    color: checked ? 'rgba(0, 0, 0, 0.45)' : 'inherit',
                    textDecoration: checked ? 'line-through' : 'none',
                    textDecorationThickness: checked ? '1.5px' : undefined
                }}
            >
                {children}
            </div>
        </div>
    );
}

Step.__FLOW_TYPE__ = 'step';

export default Step;
