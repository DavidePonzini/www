import type { PropsWithChildren, ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './footer/Footer';
import Separator from './Separator';

type LayoutProps = PropsWithChildren<{
    banner?: ReactNode;
}>;

function Layout({ children, banner = null }: LayoutProps) {
    return (
        <>
            {banner && banner}

            <Navbar />

            {children}

            <Separator />

            <Footer />
        </>
    );
}

export default Layout;
