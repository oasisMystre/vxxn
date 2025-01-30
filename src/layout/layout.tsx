import { ReactNode } from 'react';
import TrendingSection from './components/TrendingSection';
import { Navbar } from './navbar';
import { Fotter } from './footer';
import { Carousel } from './components/carousel/carousel';

interface LayoutProps {
    children: ReactNode;
    hideSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideSidebar }) => {
    return (
        <div className="min-h-screen bg-[#121212] text-gray-100">
            <header className="fixed top-0 w-full border-b border-gray-800">
                <Navbar />
            </header>

            <main className="pt-[90px] w-full flex">
                {!hideSidebar && <div className="fixed lg:block hidden border-none left-0 h-full overflow-y-auto no-scrollbar">
                    <TrendingSection />
                    {/* <div className='pl-10 max-w-[340px] mb-[120px]'>
                        <Carousel />
                    </div> */}
                </div>}
                {children}
            </main>
            {/* <Fotter /> */}
        </div>
    )
}

export default Layout