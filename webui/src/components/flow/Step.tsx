import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';

import { useFlow, useFlowColor } from './FlowContext';
import { COMPLETED_FLOW_COLOR } from './FlowUtils';

type StepProps = PropsWithChildren<{
    id?: string;
    nextId?: string | null;
}>;

function Step({
    children,
    id,
    nextId = null
}: StepProps) {
    const {
        checkedSteps,
        registerAnchor,
        requestLayoutUpdate,
        toggleStepChecked
    } = useFlow();
    const flowColor = useFlowColor();
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const checked = id ? Boolean(checkedSteps[id]) : false;

    useEffect(function() {
        if (!id) {
            return;
        }

        registerAnchor(id, anchorRef.current, {
            kind: 'step',
            nextIds: nextId ? [nextId] : [],
            checked,
            color: flowColor
        });

        requestLayoutUpdate();

        return function() {
            registerAnchor(id, null, null);
        };
    }, [checked, flowColor, id, nextId, registerAnchor, requestLayoutUpdate]);

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
            onClick={function(event) {
                if (event.target instanceof Element && event.target.closest('a')) {
                    return;
                }

                if (id) {
                    toggleStepChecked(id);
                }
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
                        backgroundColor: checked ? COMPLETED_FLOW_COLOR : flowColor
                    }}
                />
            </div>

            <div
                style={{
                    minWidth: 0,
                    flex: '0 1 auto',
                    color: checked ? COMPLETED_FLOW_COLOR : 'inherit',
                }}
            >
                {children}
            </div>
        </div>
    );
}

Step.__FLOW_TYPE__ = 'step';

export default Step;
