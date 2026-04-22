import { edgePath } from './FlowUtils';

function FlowOverlay({ anchors, width, height, nodeRadius = 6, strokeWidth = 2 }) {
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
            if (!anchorMap.has(nextId)) {
                return;
            }

            const edgeKey = `${anchor.id}->${nextId}`;

            if (seen.has(edgeKey)) {
                return;
            }

            seen.add(edgeKey);

            renderedEdges.push({
                id: edgeKey,
                d: edgePath(anchor, anchorMap.get(nextId), nodeRadius)
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
                        stroke='black'
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
                        fill='black'
                    />
                );
            })}
        </svg>
    );
}

export default FlowOverlay;