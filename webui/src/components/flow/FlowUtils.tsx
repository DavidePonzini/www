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
const COMPLETED_FLOW_COLOR = '#8a8f98';
const BRANCH_FLOW_COLOR_FAMILIES = [
    [
        ['#c2255c', '#a61e4d', '#e64980'],
        ['#862e9c', '#9c36b5', '#ae3ec9'],
        ['#5f3dc4', '#6741d9', '#7950f2']
    ],
    [
        ['#1971c2', '#1864ab', '#228be6'],
        ['#0b7285', '#0c8599', '#1098ad'],
        ['#099268', '#0ca678', '#12b886']
    ],
    [
        ['#2b8a3e', '#2f9e44', '#40c057'],
        ['#5c940d', '#66a80f', '#74b816'],
        ['#e67700', '#f08c00', '#f59f00']
    ],
    [
        ['#d9480f', '#e8590c', '#f76707'],
        ['#c92a2a', '#e03131', '#f03e3e'],
        ['#c2255c', '#d6336c', '#e64980']
    ]
];

function makeId(prefix: string, indexPath: Array<string | number>) {
    return `${prefix}-${indexPath.join('-')}`;
}

function getBranchColor(indexPath: Array<string | number>) {
    const branchMarkers = indexPath.reduce<Array<number>>(function(result, part, index) {
        if (part === 'branch') {
            result.push(index);
        }

        return result;
    }, []);
    const depth = Math.min(Math.max(branchMarkers.length - 1, 0), 2);
    const familyPath = branchMarkers.length === 0
        ? indexPath
        : indexPath.slice(0, branchMarkers[0] + 2);
    const family = BRANCH_FLOW_COLOR_FAMILIES[hashIndexPath(familyPath) % BRANCH_FLOW_COLOR_FAMILIES.length];
    const variants = family[depth];
    const variantKey = branchMarkers.length <= 1
        ? familyPath
        : indexPath.slice(branchMarkers[branchMarkers.length - 2], branchMarkers[branchMarkers.length - 1] + 2);

    return variants[hashIndexPath(variantKey) % variants.length];
}

function hashIndexPath(indexPath: Array<string | number>) {
    const key = indexPath.join(':');
    let hash = 0;

    for (let index = 0; index < key.length; index += 1) {
        hash = (hash * 31 + key.charCodeAt(index)) >>> 0;
    }

    return hash;
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
    DEFAULT_FLOW_COLOR,
    makeId,
    getBranchColor,
    getFlowStorageKey,
    readFlowCheckedState,
    writeFlowCheckedState,
    getRelativeRect,
    edgePath
};
