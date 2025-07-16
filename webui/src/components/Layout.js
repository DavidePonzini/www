import Navbar from './Navbar';
import Footer from './Footer';
import Separator from './Separator';

function Layout({ children, banner = null }) {
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