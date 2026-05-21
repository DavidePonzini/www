import type { PropsWithChildren, ReactElement } from 'react';

function ParallelBranch({ children }: PropsWithChildren): ReactElement {
    return <>{children}</>;
}

ParallelBranch.__FLOW_TYPE__ = 'branch';

export default ParallelBranch;
