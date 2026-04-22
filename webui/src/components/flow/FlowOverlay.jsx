import { edgePath } from './FlowUtils';

const CHECKED_COLOR = '#2f9e44';
const UNCHECKED_COLOR = '#f08c00';

function FlowOverlay({ anchors, width, height, nodeRadius = 6, strokeWidth = 2 }) {
    function getAnchorColor(anchor) {
        return anchor.meta?.checked ? CHECKED_COLOR : UNCHECKED_COLOR;
    }

    function getEdgeColor(sourceAnchor, targetAnchor) {
        if (sourceAnchor.meta?.kind === 'step') {
            return getAnchorColor(sourceAnchor);
        }

        if (targetAnchor.meta?.kind === 'step') {
            return getAnchorColor(targetAnchor);
        }

        return UNCHECKED_COLOR;
    }

    const anchorMap = new Map(
        anchors.map(function(anchor) {
            return [anchor.id, anchor];
        })
    );

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
