import { createContext, useContext } from 'react';

import { DEFAULT_FLOW_COLOR } from './FlowUtils';

type FlowAnchorMeta = {
    kind: 'step' | 'fork' | 'join';
    nextIds: string[];
    checked?: boolean;
    color?: string;
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
const FlowColorContext = createContext<string>(DEFAULT_FLOW_COLOR);

function useFlow() {
    const context = useContext(FlowContext);

    if (!context) {
        throw new Error('useFlow must be used inside <Flow>.');
    }

    return context;
}

function useFlowColor() {
    return useContext(FlowColorContext);
}

export { FlowContext, FlowColorContext, useFlow, useFlowColor };
export type { FlowAnchorMeta, FlowCheckedState, FlowContextValue };
