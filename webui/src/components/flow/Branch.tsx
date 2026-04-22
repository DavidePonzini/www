import type { PropsWithChildren, ReactElement } from 'react';

function Branch({ children }: PropsWithChildren): ReactElement {
    return <>{children}</>;
}

Branch.__FLOW_TYPE__ = 'branch';

export default Branch;
