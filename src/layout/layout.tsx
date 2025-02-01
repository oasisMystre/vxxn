import React, { ReactNode, useRef } from 'react';

interface LayoutProps {
    children: ReactNode;
    hideSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideSidebar }) => {
    return (
        <div className="min-h-screen bg-[#2e2e2e] text-gray-100">
            {/* <header className="fixed top-0 w-full z-[100] border-b border-[#b3b3b3]">
                <Navbar />
            </header> */}

            <main className="w-full flex no-scrollbar">
                {children}
            </main>
        </div>
    );
};

export default Layout;
