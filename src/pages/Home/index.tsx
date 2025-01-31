import React, { useState, useEffect } from 'react';
import Layout from '../../layout/layout';
import Sidebar from '../../layout/sidebar';
import VideoPlayerModal from '../../components/videoPlayer/videoPlayer';
import { Link, useLocation } from 'react-router-dom';
import { CameraIcon, HomeIcon, SearchIcon } from 'lucide-react';

function Home() {
    const [posts, setPosts] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load initial posts and setup scroll listener
    useEffect(() => {
        setTimeout(() => {
            setPosts(Array.from({ length: 5 }, (_, i) => i + 1));
            setIsLoading(false);
        }, 2000);

        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100
            ) {
                setPosts((prev) => [
                    ...prev,
                    ...Array.from({ length: 3 }, (_, i) => prev.length + i + 1),
                ]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Skeleton Loaders
    const PostSkeleton = () => (
        <div className="mb-6 rounded-[20px] w-2xl animate-pulse">
            <div className="h-[667px] max-w-[500px] bg-black rounded mb-4 w-full" />
        </div>
    );

    const [active, setActive] = React.useState("home");
    return (
        <Layout>
            <div className="fixed lg:block hidden border-none left-3 top-3">
                <div style={{ width: "300px" }} className="artboard phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                    <Sidebar />
                </div>
            </div>
            <div className="flex-1 min-h-screen">
                <div className="max-w-[630px] mx-auto">
                    <div style={{ width: "630px" }} className="artboard phone-1 bg-black rounded-[20px] fixed top-3 h-full overflow-y-auto no-scrollbar">
                        {/* haeder */}
                        <div className='flex justify-center items-center gap-20 pt-5 fixed pb-3 top-3 rounded-[20px] z-10 bg-black w-[620px]'>
                            <Link to="#" onClick={() => setActive("search")}>
                                <SearchIcon className={`w-6 h-6 cursor-pointer ${active == "search" && "text-white"} text-gray-500`} />
                            </Link>
                            <Link to="#" onClick={() => setActive("home")}>
                                <HomeIcon className={`w-6 h-6 cursor-pointer ${active == "home" && "text-white"} text-gray-500`} />
                            </Link>
                            <Link to="/upload" onClick={() => setActive("camera")}>
                                <CameraIcon className={`w-6 h-6 cursor-pointer ${active == "camera" && "text-white"} text-gray-500`} />
                            </Link>
                        </div>

                        {isLoading
                            ? Array.from({ length: 3 }).map((_, i) => (
                                <PostSkeleton key={i} />
                            ))
                            : posts.map((post) => (
                                <div key={post} className="mb-6 mt-10 h-full overflow-y-auto">
                                    <VideoPlayerModal />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            {/* h-full overflow-y-auto no-scrollbar */}
            <div className="fixed lg:block hidden border-none right-3 top-3">
                <div style={{ width: "300px" }} className="artboard phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                    <Sidebar isRightSide />
                </div>
            </div>
        </Layout>
    );
}

export default Home;
