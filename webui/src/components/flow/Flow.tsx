import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FlowContext } from './FlowContext';
import type { FlowAnchorMeta, FlowCheckedState } from './FlowContext';
import FlowOverlay from './FlowOverlay';
import {
    getFlowStorageKey,
    getRelativeRect,
    readFlowCheckedState,
    writeFlowCheckedState
} from './FlowUtils';

type FlowAnchor = {
    element: HTMLElement;
    meta: FlowAnchorMeta | null;
};

type FlowProps = PropsWithChildren<{
    storageKey?: string | null;
}>;

function Flow({ children, storageKey: storageKeyProp = null }: FlowProps) {
    const location = useLocation();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const anchorsRef = useRef<Map<string, FlowAnchor>>(new Map());
    const [, setLayoutVersion] = useState(0);
    const storageKey = storageKeyProp || getFlowStorageKey(location.pathname);
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0
    });
    const [checkedSteps, setCheckedSteps] = useState<FlowCheckedState>(function() {
        return readFlowCheckedState(storageKey);
    });

    useEffect(function() {
        setCheckedSteps(readFlowCheckedState(storageKey));
    }, [storageKey]);

    useEffect(function() {
        writeFlowCheckedState(storageKey, checkedSteps);
    }, [checkedSteps, storageKey]);

    useEffect(function() {
        function handleReset(event: Event) {
            const flowResetEvent = event as CustomEvent<{ storageKey?: string }>;

            if (flowResetEvent.detail?.storageKey !== storageKey) {
                return;
            }

            setCheckedSteps({});
        }

        window.addEventListener('flow-reset', handleReset);

        return function() {
            window.removeEventListener('flow-reset', handleReset);
        };
    }, [storageKey]);

    const registerAnchor = useCallback(function(id: string, element: HTMLElement | null, meta: FlowAnchorMeta | null) {
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

    const setStepChecked = useCallback(function(id: string, checked: boolean) {
        setCheckedSteps(function(currentState) {
            if (!checked && !currentState[id]) {
                return currentState;
            }

            if (checked && currentState[id]) {
                return currentState;
            }

            const nextState = {
                ...currentState
            };

            if (checked) {
                nextState[id] = true;
            } else {
                delete nextState[id];
            }

            return nextState;
        });
    }, []);

    const toggleStepChecked = useCallback(function(id: string) {
        setCheckedSteps(function(currentState) {
            const nextState = {
                ...currentState
            };

            if (nextState[id]) {
                delete nextState[id];
            } else {
                nextState[id] = true;
            }

            return nextState;
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

    const anchors = (function() {
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
        }).filter(Boolean) as Array<{ id: string; meta: FlowAnchorMeta | null; x: number; y: number }>;
    })();

    const contextValue = useMemo(function() {
        return {
            registerAnchor,
            requestLayoutUpdate,
            checkedSteps,
            setStepChecked,
            toggleStepChecked,
            resetCheckedSteps: function() {
                setCheckedSteps({});
            }
        };
    }, [checkedSteps, registerAnchor, requestLayoutUpdate, setStepChecked, toggleStepChecked]);

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
