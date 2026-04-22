import { useEffect, useRef } from 'react';

import { useFlow } from './FlowContext';

function Step({
    children,
    id,
    nextId = null
}) {
    const { registerAnchor, requestLayoutUpdate } = useFlow();
    const anchorRef = useRef(null);
    const rowRef = useRef(null);

    useEffect(function() {
        registerAnchor(id, anchorRef.current, {
            kind: 'step',
            nextIds: nextId ? [nextId] : []
        });

        requestLayoutUpdate();

        return function() {
            registerAnchor(id, null, null);
        };
    }, [id, nextId, registerAnchor, requestLayoutUpdate]);

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
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                width: '100%',
                position: 'relative'
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
                        height: '12px'
                    }}
                />
            </div>

            <div
                style={{
                    minWidth: 0,
                    flex: '0 1 auto'
                }}
            >
                {children}
            </div>
        </div>
    );
}

Step.__FLOW_TYPE__ = 'step';

export default Step;
