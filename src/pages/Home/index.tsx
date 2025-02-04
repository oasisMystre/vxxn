import React, { useState, useEffect } from 'react';
import Layout from '../../layout/layout';
import Sidebar from '../../layout/sidebar';
import VideoPlayerModal from '../../components/videoPlayer/videoPlayer';
import { VideoModal } from '../../components/videoModal/videoModal';
import { CardSkeleton, PostSkeleton } from '../../components/skeleton/skeleton';
import { Header } from '../../layout/header';
import SponsoredCard from '../../layout/components/SponsoredCard';

function Home() {
    const [posts, setPosts] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const mainRef = React.useRef<any>(null);

    // Load initial posts and setup scroll listener
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
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setPosts(Array.from({ length: 12 }, (_, i) => i + 1));
            setIsLoading(false);
        }, 2000);

        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout>
            <div className="fixed lg:block hidden border-none left-3 top-3 ">
                <div style={{ width: "300px", height: "calc(100vh - 24px)" }} className="artboard phone-1 bg-black rounded-[20px] flex justify-center items-center">
                    {isLoading ? <div className="skeleton min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] min-w-[270px] max-w-[270px]"></div> : <div style={{ width: "270px", height: "calc(100vh - 50px)" }} className="artboard phone-1 bg-[#121212] rounded-[20px]">
                    </div>}
                </div>
            </div>
            <div className="flex-1 min-h-screen">
                <div className="w-full flex justify-center">
                    <div ref={mainRef} style={{ height: "calc(100vh - 24px)" }} className="rounded-[20px] fixed top-3 h-full overflow-y-auto no-scrollbar lg:max-w-[calc(100vw-650px)] max-w-[calc(100vw-24px)] w-full bg-black">
                        {/* haeder */}
                        <Header />
                        {isLoading
                            ? <div className='mt-10'>
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div className='h-[calc(100vh-30px)] mb-6 flex justify-center items-center'>
                                        <PostSkeleton key={i} />
                                    </div>
                                ))}
                            </div>
                            : posts.map((post, index) => (
                                <>
                                    <div key={post} className="mb-6 mt-10 h-full overflow-y-auto">
                                        <VideoPlayerModal />
                                    </div>
                                    {

                                        (index + 1) % 4 === 0 &&(
                                            <div className='lg:hidden flex items-center justify-center w-full h-full px-5'>
                                                <SponsoredCard
                                                title="Arsenal"
                                                description='Lorem ipsum dolor sit amet, 
                                                            consectetur adipiscing elit. Sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.
                                                            Lorem ipsum dolor sit amet, 
                                                            consectetur adipiscing elit. Sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.'
                                                image='https://picsum.photos/150'
                                                sponsorLogo='https://picsum.photos/300'
                                                sponsorName='Arsenal'/>
                                            </div>
                                        )

                                    }
                                
                                </>
                               
                            ))}
                    </div>
                </div>
            </div>

            <div className="fixed lg:block hidden border-none right-3 top-3">
                <div style={{ width: "300px", height: "calc(100vh - 24px)" }} className="artboard phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                    {isLoading ? <div className='mt-10 flex justify-center w-full items-center flex-col'>
                        <CardSkeleton />
                    </div> :
                        <Sidebar isRightSide />}
                </div>
            </div>
            {isModalOpen && <VideoModal imageUrl="" onClose={() => setIsModalOpen(false)} />}
        </Layout >
    );
}

export default Home;
