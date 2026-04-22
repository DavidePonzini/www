import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { FlowContext } from './FlowContext';
import FlowOverlay from './FlowOverlay';
import { getRelativeRect } from './FlowUtils';

function Flow({ children }) {
    const containerRef = useRef(null);
    const anchorsRef = useRef(new Map());
    const [layoutVersion, setLayoutVersion] = useState(0);
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0
    });

    const registerAnchor = useCallback(function(id, element, meta) {
        if (!element) {
            anchorsRef.current.delete(id);
            return;
        }

        anchorsRef.current.set(id, {
            element,
            meta
        });
    }, []);

    const requestLayoutUpdate = useCallback(function() {
        setLayoutVersion(function(value) {
            return value + 1;
        });
    }, []);

    useLayoutEffect(function() {
        if (!containerRef.current) {
            return;
        }

        function updateLayout() {
            if (!containerRef.current) {
                return;
            }

            const rect = containerRef.current.getBoundingClientRect();

            setContainerSize({
                width: rect.width,
                height: rect.height
            });

            setLayoutVersion(function(value) {
                return value + 1;
            });
        }

        updateLayout();

        const resizeObserver = new ResizeObserver(function() {
            updateLayout();
        });

        resizeObserver.observe(containerRef.current);
        window.addEventListener('resize', updateLayout);

        return function() {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateLayout);
        };
    }, []);

    const anchors = useMemo(function() {
        if (!containerRef.current) {
            return [];
        }

        const container = containerRef.current;

        return Array.from(anchorsRef.current.entries()).map(function(entry) {
            const id = entry[0];
            const value = entry[1];

            if (!value.element) {
                return null;
            }

            const rect = getRelativeRect(value.element, container);

            return {
                id,
                meta: value.meta,
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        }).filter(Boolean);
    }, [layoutVersion]);

    const contextValue = useMemo(function() {
        return {
            registerAnchor,
            requestLayoutUpdate
        };
    }, [registerAnchor, requestLayoutUpdate]);

    return (
        <FlowContext.Provider value={contextValue}>
            <div
                ref={containerRef}
                style={{
                    position: 'relative',
                    width: '100%'
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    {children}
                </div>

                <FlowOverlay
                    anchors={anchors}
                    width={containerSize.width}
                    height={containerSize.height}
                />
            </div>
        </FlowContext.Provider>
    );
}

export default Flow;