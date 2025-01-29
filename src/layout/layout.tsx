import { Search } from 'lucide-react'
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* header */}
            <header className="fixed top-0 w-full bg-gray-900 z-50 p-4 border-b border-gray-800">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-12 pr-4 py-2 bg-gray-800 rounded-full text-sm focus:outline-none  w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <button className="px-6 py-2 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Donate
                    </button>
                </div>
            </header>
            <main className="pt-16 flex">
                {/* Left Navigation */}
                <div className="w-64 p-6 border-r border-gray-800 fixed h-full">
                    <h2 className="text-xl font-bold mb-6">Navigation</h2>
                    <div className="space-y-4">
                        <Link to={"/"}>
                            <p className={`${location?.pathname == "/" && "bg-gray-800"} w-full text-left p-3 hover:bg-gray-800 rounded-lg`}>
                                Home
                            </p>
                        </Link>
                        <button className={`${location?.pathname == "/popular" && "bg-gray-800"} w-full text-left p-3 hover:bg-gray-800 rounded-lg`}>
                            Popular
                        </button>
                        <button className={`${location?.pathname == "/following" && "bg-gray-800"} w-full text-left p-3 hover:bg-gray-800 rounded-lg`}>
                            Following
                        </button>
                        <Link to={"/upload"}>
                            <p className={`${location?.pathname == "/upload" && "bg-gray-800"} w-full text-left p-3 hover:bg-gray-800 rounded-lg`}>
                                Upload
                            </p>
                        </Link>
                    </div>
                </div>
                {children}
            </main>
        </div>
    )
}

export default Layout