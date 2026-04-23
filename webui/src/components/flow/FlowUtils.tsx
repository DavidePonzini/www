type FlowCheckedState = Record<string, boolean>;

type RelativeRect = {
    left: number;
    top: number;
    width: number;
    height: number;
};

type EdgePoint = {
    x: number;
    y: number;
};

type EdgePathOptions = {
    sourceKind?: 'step' | 'fork' | 'join';
    targetKind?: 'step' | 'fork' | 'join';
};

const DEFAULT_FLOW_COLOR = '#f08c00';
const COMPLETED_FLOW_COLOR = '#2f9e44';
const COMPLETED_TEXT_COLOR = '#74b816';
const BRANCH_FLOW_COLOR_FAMILIES = [
    {
        branch: '#1c7ed6',
        subbranches: ['#4c6ef5', '#3b5bdb', '#5c7cfa']
    },
    {
        branch: '#c92a2a',
        subbranches: ['#f03e3e', '#e03131', '#ff6b6b']
    },
    {
        branch: '#6741d9',
        subbranches: ['#9c36b5', '#862e9c', '#ae3ec9']
    },
];

function makeId(prefix: string, indexPath: Array<string | number>) {
    return `${prefix}-${indexPath.join('-')}`;
}

function getBranchColor(indexPath: Array<string | number>) {
    const branchIndexes = indexPath.reduce<Array<number>>(function(result, part, index) {
        if (part === 'branch' && typeof indexPath[index + 1] === 'number') {
            result.push(indexPath[index + 1] as number);
        }

        return result;
    }, []);

    if (branchIndexes.length === 0) {
        return BRANCH_FLOW_COLOR_FAMILIES[0].branch;
    }

    const parentBranchIndex = branchIndexes[0];
    const family = BRANCH_FLOW_COLOR_FAMILIES[parentBranchIndex % BRANCH_FLOW_COLOR_FAMILIES.length];

    if (branchIndexes.length === 1) {
        return family.branch;
    }

    const subbranchIndex = branchIndexes[1];

    return family.subbranches[subbranchIndex % family.subbranches.length];
}

function getFlowStorageKey(pathname?: string | null) {
    return `recipe-flow:${pathname || 'default'}`;
}

function readFlowCheckedState(storageKey: string): FlowCheckedState {
    if (typeof window === 'undefined') {
        return {};
    }

    const rawValue = window.sessionStorage.getItem(storageKey);

    if (!rawValue) {
        return {};
    }

    try {
        const parsedValue = JSON.parse(rawValue);

        if (parsedValue && typeof parsedValue === 'object' && !Array.isArray(parsedValue)) {
            return parsedValue;
        }
    } catch (error) {
        window.sessionStorage.removeItem(storageKey);
    }

    return {};
}

function writeFlowCheckedState(storageKey: string, checkedState: FlowCheckedState) {
    if (typeof window === 'undefined') {
        return;
    }

    const hasCheckedItems = Object.values(checkedState).some(Boolean);

    if (!hasCheckedItems) {
        window.sessionStorage.removeItem(storageKey);
        return;
    }

    window.sessionStorage.setItem(storageKey, JSON.stringify(checkedState));
}

function getRelativeRect(element: Element, container: Element): RelativeRect {
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return {
        left: elementRect.left - containerRect.left,
        top: elementRect.top - containerRect.top,
        width: elementRect.width,
        height: elementRect.height
    };
}

function edgePath(from: EdgePoint, to: EdgePoint, radius: number, options: EdgePathOptions = {}) {
    if (options.targetKind === 'join' && from.y < to.y) {
        const startY = from.y + radius;
        const endY = to.y - radius;
        const verticalSpan = Math.max(endY - startY, 0);
        const turnY = startY + Math.min(Math.max(verticalSpan * 0.22, 10), 18);
        const approachY = Math.max(endY - 10, turnY);

        return `M ${from.x} ${startY} C ${from.x} ${turnY}, ${to.x} ${turnY}, ${to.x} ${approachY} L ${to.x} ${endY}`;
    }

    if (Math.abs(from.x - to.x) < 0.5) {
        const startY = from.y < to.y ? from.y + radius : from.y - radius;
        const endY = from.y < to.y ? to.y - radius : to.y + radius;

        return `M ${from.x} ${startY} L ${to.x} ${endY}`;
    }

    const movingRight = to.x > from.x;

    const startX = movingRight ? from.x + radius : from.x - radius;
    const endX = movingRight ? to.x - radius : to.x + radius;
    const dx = Math.max(Math.abs(endX - startX) / 2, 14);

    const c1x = movingRight ? startX + dx : startX - dx;
    const c2x = movingRight ? endX - dx : endX + dx;

    return `M ${startX} ${from.y} C ${c1x} ${from.y}, ${c2x} ${to.y}, ${endX} ${to.y}`;
}

export {
    COMPLETED_FLOW_COLOR,
    COMPLETED_TEXT_COLOR,
    DEFAULT_FLOW_COLOR,
    makeId,
    getBranchColor,
    getFlowStorageKey,
    readFlowCheckedState,
    writeFlowCheckedState,
    getRelativeRect,
    edgePath
};
