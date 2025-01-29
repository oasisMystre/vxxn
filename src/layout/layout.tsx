import { Home, Search } from 'lucide-react'
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom'
import TrendingSection from './components/TrendingSection';

interface LayoutProps {
    children: ReactNode;
    hideSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideSidebar }) => {
    const location = useLocation();
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* header */}
            <header className="fixed top-0 w-full bg-gray-900 z-50 p-4 py-[16px] border-b border-gray-800">
                <div className="container flex items-center justify-between">
                    <div className="flex w-full items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-12 pr-7 py-4 max-w-[181px] w-full max-h-10 bg-gray-800 rounded-full text-md focus:outline-none focus:border-transparent"
                            />
                        </div>
                        {/* <div className='flex justify-center items-center w-full'>
                            <Home />
                        </div> */}
                    </div>
                </div>
            </header>
            <main className="pt-[90px] w-full flex">
                {/* sidebar */}
                {/* Left Navigation */}
                {!hideSidebar && <div className="fixed lg:block hidden border-none left-0 h-full overflow-y-auto no-scrollbar">
                    <TrendingSection />
                </div>}
                {children}
            </main>
        </div>
    )
}

export default Layout