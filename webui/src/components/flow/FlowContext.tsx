import { createContext, useContext } from 'react';

type FlowAnchorMeta = {
    kind: 'step' | 'fork' | 'join';
    nextIds: string[];
    checked?: boolean;
};

type FlowCheckedState = Record<string, boolean>;

type FlowContextValue = {
    registerAnchor: (id: string, element: HTMLElement | null, meta: FlowAnchorMeta | null) => void;
    requestLayoutUpdate: () => void;
    checkedSteps: FlowCheckedState;
    setStepChecked: (id: string, checked: boolean) => void;
    toggleStepChecked: (id: string) => void;
    resetCheckedSteps: () => void;
};

const FlowContext = createContext<FlowContextValue | null>(null);

function useFlow() {
    const context = useContext(FlowContext);

    if (!context) {
        throw new Error('useFlow must be used inside <Flow>.');
    }

    return context;
}

export { FlowContext, useFlow };
export type { FlowAnchorMeta, FlowCheckedState, FlowContextValue };
