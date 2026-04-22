import { Children, cloneElement, isValidElement } from 'react';
import { Fragment } from 'react';
import { makeId } from './FlowUtils';

function Sequence({
    children,
    indexPath = [0],
    exitToId = null
}) {
    // if children is <></>, look into its content instead
    if (children?.type === Fragment) {
        children = children.props.children;
    }

    const items = Children.toArray(children).filter(function(child) {
        return isValidElement(child);
    });

    const descriptors = items.map(function(child, index) {
        if (child.type?.__FLOW_TYPE__ === 'step') {
            const stepId = makeId('step', [...indexPath, index]);

            return {
                type: 'step',
                entryId: stepId,
                exitId: stepId,
                render: function(nextId) {
                    return cloneElement(child, {
                        id: stepId,
                        nextId: nextId
                    });
                }
            };
        }

        if (child.type?.__FLOW_TYPE__ === 'parallel') {
            const forkId = makeId('fork', [...indexPath, index]);
            const joinId = makeId('join', [...indexPath, index]);

            return {
                type: 'parallel',
                entryId: forkId,
                exitId: joinId,
                render: function(nextId) {
                    return cloneElement(child, {
                        forkId: forkId,
                        joinId: joinId,
                        nextId: nextId,
                        indexPath: [...indexPath, index]
                    });
                }
            };
        }

        throw new Error('Sequence only supports <Step> and <Parallel> as direct children.');
    });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
                width: '100%'
            }}
        >
            {descriptors.map(function(item, index) {
                const nextDescriptor = index < descriptors.length - 1
                    ? descriptors[index + 1]
                    : null;

                const nextId = nextDescriptor ? nextDescriptor.entryId : exitToId;

                return (
                    <div key={item.entryId} style={{ width: '100%' }}>
                        {item.render(nextId)}
                    </div>
                );
            })}
        </div>
    );
}

export default Sequence;