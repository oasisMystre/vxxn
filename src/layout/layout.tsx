import { Search } from 'lucide-react'
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom'
import TrendingSection from './components/TrendingSection';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* header */}
            <header className="fixed top-0 w-full bg-gray-900 z-50 p-4 py-[21px] border-b border-gray-800">
                <div className="container ml-[70px] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-12 pr-7 py-4 bg-gray-800 rounded-full text-md focus:outline-none w-64 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <main className="pt-[90px] flex">
                {/* sidebar */}
                {/* Left Navigation */}
                <div className="w-[400px] fixed left-0 h-full overflow-y-auto no-scrollbar">
                    <TrendingSection />
                </div>
                {children}
            </main>
        </div>
    )
}

export default Layout