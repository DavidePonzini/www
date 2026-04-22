import { createContext, useContext } from 'react';

const FlowContext = createContext(null);

function useFlow() {
    const context = useContext(FlowContext);

    if (!context) {
        throw new Error('useFlow must be used inside <Flow>.');
    }

    return context;
}

export { FlowContext, useFlow };