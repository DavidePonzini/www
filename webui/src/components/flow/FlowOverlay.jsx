import { edgePath } from './FlowUtils';

const CHECKED_COLOR = '#2f9e44';
const UNCHECKED_COLOR = '#f08c00';

function FlowOverlay({ anchors, width, height, nodeRadius = 6, strokeWidth = 2 }) {
    const anchorMap = new Map(
        anchors.map(function(anchor) {
            return [anchor.id, anchor];
        })
    );
    const incomingMap = new Map();

    anchors.forEach(function(anchor) {
        const nextIds = anchor.meta?.nextIds || [];

        nextIds.forEach(function(nextId) {
            const sources = incomingMap.get(nextId) || [];

            sources.push(anchor.id);
            incomingMap.set(nextId, sources);
        });
    });

    const checkedStateCache = new Map();

    function isAnchorChecked(anchorId) {
        if (checkedStateCache.has(anchorId)) {
            return checkedStateCache.get(anchorId);
        }

        const anchor = anchorMap.get(anchorId);

        if (!anchor) {
            return false;
        }

        let checked = false;

        if (anchor.meta?.kind === 'step') {
            checked = Boolean(anchor.meta?.checked);
        } else if (anchor.meta?.kind === 'fork') {
            const nextIds = anchor.meta?.nextIds || [];

            checked = nextIds.length > 0 && nextIds.every(function(nextId) {
                return isAnchorChecked(nextId);
            });
        } else if (anchor.meta?.kind === 'join') {
            const incomingIds = incomingMap.get(anchorId) || [];

            checked = incomingIds.length > 0 && incomingIds.every(function(sourceId) {
                return isAnchorChecked(sourceId);
            });
        }

        checkedStateCache.set(anchorId, checked);

        return checked;
    }

    function getAnchorColor(anchor) {
        return isAnchorChecked(anchor.id) ? CHECKED_COLOR : UNCHECKED_COLOR;
    }

    function getEdgeColor(sourceAnchor, targetAnchor) {
        if (sourceAnchor.meta?.kind === 'step') {
            return getAnchorColor(sourceAnchor);
        }

        if (targetAnchor.meta?.kind === 'step') {
            return getAnchorColor(targetAnchor);
        }

        if (sourceAnchor.meta?.kind === 'join') {
            return getAnchorColor(targetAnchor);
        }

        return getAnchorColor(sourceAnchor);
    }

    const renderedEdges = [];
    const seen = new Set();

    anchors.forEach(function(anchor) {
        const nextIds = anchor.meta?.nextIds || [];

        nextIds.forEach(function(nextId) {
            const nextAnchor = anchorMap.get(nextId);

            if (!nextAnchor) {
                return;
            }

            const edgeKey = `${anchor.id}->${nextId}`;

            if (seen.has(edgeKey)) {
                return;
            }

            seen.add(edgeKey);

            renderedEdges.push({
                id: edgeKey,
                stroke: getEdgeColor(anchor, nextAnchor),
                d: edgePath(anchor, nextAnchor, nodeRadius, {
                    sourceKind: anchor.meta?.kind,
                    targetKind: nextAnchor.meta?.kind
                })
            });
        });
    });

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                overflow: 'visible',
                zIndex: 0
            }}
        >
            {renderedEdges.map(function(edge) {
                return (
                    <path
                        key={edge.id}
                        d={edge.d}
                        fill='none'
                        stroke={edge.stroke}
                        strokeWidth={strokeWidth}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                );
            })}

            {anchors.map(function(anchor) {
                return (
                    <circle
                        key={anchor.id}
                        cx={anchor.x}
                        cy={anchor.y}
                        r={nodeRadius}
                        fill={getAnchorColor(anchor)}
                    />
                );
            })}
        </svg>
    );
}

export default FlowOverlay;
