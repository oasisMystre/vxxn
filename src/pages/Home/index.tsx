import { useState, useEffect } from 'react';
import Layout from '../../layout/layout';
import Sidebar from '../../layout/sidebar';
import VideoPlayerModal from '../../components/videoPlayer/videoPlayer';

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


    return (
        <Layout>
            <div className="fixed lg:block hidden border-none left-0 h-full overflow-y-auto no-scrollbar">
                <Sidebar />
            </div>
            <div className="flex-1 p-6 min-h-screen">
                <div className="max-w-[500px] mx-auto">
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <PostSkeleton key={i} />
                        ))
                        : posts.map((post) => (
                            <div key={post} className="mb-6">
                                <VideoPlayerModal />
                            </div>
                        ))}
                </div>
            </div>

            {/* Right Sidebar */}
            {/* h-full overflow-y-auto no-scrollbar */}
            <div className="fixed lg:block hidden border-none right-5 h-full overflow-y-auto no-scrollbar">
                <div className="artboard phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                    <Sidebar />
                </div>
            </div>
        </Layout>
    );
}

export default Home;
