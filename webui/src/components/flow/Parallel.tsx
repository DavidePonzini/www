import type { PropsWithChildren, ReactElement } from 'react';
import { Children, isValidElement, useEffect, useRef } from 'react';

import { FlowColorContext, useFlow, useFlowColor } from './FlowContext';
import Sequence from './Sequence';
import { getBranchColor, makeId } from './FlowUtils';

type BranchElement = ReactElement<PropsWithChildren>;

type ParallelProps = PropsWithChildren<{
    forkId?: string;
    joinId?: string;
    nextId?: string | null;
    indexPath?: Array<string | number>;
}>;

function Parallel({
    children,
    forkId,
    joinId,
    nextId = null,
    indexPath = [0]
}: ParallelProps) {
    const { registerAnchor, requestLayoutUpdate } = useFlow();
    const inheritedColor = useFlowColor();
    const forkRef = useRef<HTMLDivElement | null>(null);
    const joinRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const branches = Children.toArray(children).filter(function(child): child is BranchElement {
        return isValidElement(child) && (child.type as { __FLOW_TYPE__?: string })?.__FLOW_TYPE__ === 'branch';
    });

    const branchStartIds = branches.map(function(_, index) {
        const branch = branches[index];
        const branchChildren = Children.toArray(branch.props.children).filter(isValidElement);
        const firstChild = branchChildren[0];
        const firstChildType = (firstChild?.type as { __FLOW_TYPE__?: string } | undefined)?.__FLOW_TYPE__;

        if (firstChildType === 'parallel') {
            return makeId('fork', [...indexPath, 'branch', index, 0]);
        }

        return makeId('step', [...indexPath, 'branch', index, 0]);
    });

    useEffect(function() {
        if (!forkId || !joinId) {
            return;
        }

        registerAnchor(forkId, forkRef.current, {
            kind: 'fork',
            nextIds: branchStartIds,
            color: inheritedColor
        });

        registerAnchor(joinId, joinRef.current, {
            kind: 'join',
            nextIds: nextId ? [nextId] : [],
            color: inheritedColor
        });

        requestLayoutUpdate();

        return function() {
            registerAnchor(forkId, null, null);
            registerAnchor(joinId, null, null);
        };
    }, [branchStartIds, forkId, inheritedColor, joinId, nextId, registerAnchor, requestLayoutUpdate]);

    useEffect(function() {
        if (!wrapperRef.current) {
            return;
        }

        const resizeObserver = new ResizeObserver(function() {
            requestLayoutUpdate();
        });

        resizeObserver.observe(wrapperRef.current);

        return function() {
            resizeObserver.disconnect();
        };
    }, [requestLayoutUpdate]);

    return (
        <div
            ref={wrapperRef}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                width: '100%',
                position: 'relative'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    width: '100%'
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
                        ref={forkRef}
                        style={{
                            width: '12px',
                            height: '12px'
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        minWidth: 0,
                        flex: '0 1 auto',
                        marginLeft: '24px'
                    }}
                >
                    {branches.map(function(branch, index) {
                        const branchIndexPath = [...indexPath, 'branch', index];
                        const branchColor = getBranchColor(branchIndexPath);

                        return (
                            <FlowColorContext.Provider key={index} value={branchColor}>
                                <div style={{ minWidth: 0 }}>
                                    <Sequence
                                        indexPath={branchIndexPath}
                                        exitToId={joinId ?? null}
                                    >
                                        {branch.props.children}
                                    </Sequence>
                                </div>
                            </FlowColorContext.Provider>
                        );
                    })}
                </div>
            </div>

            <div
                style={{
                    width: '12px',
                    minWidth: '12px',
                    height: '12px',
                    flexShrink: 0,
                    marginTop: '0.15em'
                }}
            >
                <div
                    ref={joinRef}
                    style={{
                        width: '12px',
                        height: '12px'
                    }}
                />
            </div>
        </div>
    );
}

Parallel.__FLOW_TYPE__ = 'parallel';

export default Parallel;
