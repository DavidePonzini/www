import type { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import SectionBackground from './SectionBackground';

import bg from '../res/database.jpg';
import bgCard from '../res/bg_glass.jpg';

type AuthShellProps = PropsWithChildren<{
    title: string;
    alternateHref: string;
    alternateLabel: string;
    feedback?: ReactNode;
}>;

function AuthShell({ title, alternateHref, alternateLabel, feedback = null, children }: AuthShellProps) {
    return (
        <Layout>
            <SectionBackground img={bg}>
                <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block" style={{
                        borderRadius: '1rem 0 0 1rem',
                        backgroundImage: `url(${bgCard})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'sticky',
                        zIndex: 100,
                    }}></div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <div className="d-flex align-items-center mb-3 pb-1">
                                <span className="h1 fw-bold mb-0">PonziDav</span>
                            </div>
                            <h5 className="fw-normal mb-1" style={{ letterSpacing: 1 }}>{title}</h5>

                            <Link to={alternateHref} className="text-muted mb-4 d-block">
                                {alternateLabel}
                            </Link>

                            {feedback}

                            {children}
                        </div>
                    </div>
                </div>
            </SectionBackground>
        </Layout>
    );
}

export default AuthShell;
