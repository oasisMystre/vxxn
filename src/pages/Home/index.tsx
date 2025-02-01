import React, { useState, useEffect } from 'react';
import Layout from '../../layout/layout';
import Sidebar from '../../layout/sidebar';
import VideoPlayerModal from '../../components/videoPlayer/videoPlayer';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { CameraIcon, ChevronRight, HomeIcon, SearchIcon } from 'lucide-react';
import { VideoModal } from '../../components/videoModal/videoModal';

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
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("search") || "";
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e?.target);
        const searchValue = formData.get("search") || "";
        searchParams.set("search", searchValue as string);
        setSearchParams(searchParams)
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="fixed lg:block hidden border-none left-3 top-3">
                <div style={{ width: "300px", height: "calc(100vh - 24px)" }} className="artboard phone-1 bg-black rounded-[20px] flex justify-center items-center">
                    <div style={{ width: "270px", height: "calc(100vh - 50px)" }} className="artboard phone-1 bg-[#121212] rounded-[20px]">
                    </div>
                </div>
            </div>
            <div className="flex-1 min-h-screen">
                <div className="w-full flex justify-center">
                    <div style={{ height: "calc(100vh - 24px)" }} className="bg-black rounded-[20px] fixed top-3 h-full overflow-y-auto no-scrollbar lg:max-w-[calc(100vw-650px)] max-w-[calc(100vw-24px)] w-full">
                        {/* haeder */}
                        <div className='flex justify-center items-center gap-20 pt-5 fixed pb-3 top-3 rounded-[20px] z-10 bg-black lg:max-w-[calc(100vw-650px)] max-w-[calc(100vw-24px)] w-full'>
                            <Link to="#" onClick={() => setActive("search")}>
                                <SearchIcon className={`w-6 h-6 cursor-pointer ${active == "search" && "text-white"} text-gray-500`} />
                            </Link>
                            <Link to="#" onClick={() => setActive("home")}>
                                <HomeIcon className={`w-6 h-6 cursor-pointer ${active == "home" && "text-white"} text-gray-500`} />
                            </Link>
                            <div className='md:block hidden'>
                                <Link to="/upload" onClick={() => setActive("camera")}>
                                    <CameraIcon className={`w-6 h-6 cursor-pointer ${active == "camera" && "text-white"} text-gray-500`} />
                                </Link>
                            </div>
                        </div>
                        {active == "search" && <div className={`pt-10 ${searchValue ? "pb-[20px]" : "pb-[60px]"} fixed top-[60px] bg-black z-10 lg:max-w-[calc(100vw-650px)] max-w-[calc(100vw-24px)] w-full md:px-0 px-10`}>
                            <form onSubmit={handleSearch} className="flex justify-center items-center">
                                <input defaultValue={searchValue} name='search' type="text" placeholder="What do you want to watch ?" className="input input-bordered bg-[#1e1e1e] h-[40px] text-white max-w-[550px] w-full" />
                            </form>
                            {searchValue && <p className='mt-5 text-center font-semi text-[20px]'>Search Results for "{searchValue}"</p>}
                        </div>}

                        {isLoading
                            ? Array.from({ length: 3 }).map((_, i) => (
                                <PostSkeleton key={i} />
                            ))
                            : active == "home" ? posts.map((post) => (
                                <div key={post} className="mb-6 mt-10 h-full overflow-y-auto">
                                    <VideoPlayerModal />
                                </div>
                            )) :
                                <div className={`w-full justify-center px-3 ${searchValue ? "mt-[220px]" : "mt-[180px]" }`}>
                                    <div className='flex justify-between'>
                                        <p className='text-white text-md font-bold mb-10 md:pl-7 pl-3'>Trending This Week</p>
                                        <p className='text-white text-md font-bold mb-10 md:pl-7 pr-3 flex items-center '>See all <ChevronRight /></p>
                                    </div>
                                    <div className="carousel carousel-center lg:max-w-[calc(100vw-680px)] max-w-[calc(100vw-44px)] gap-10">
                                        <div className="carousel-item max-h-[130px] max-w-[150px]">
                                            <img className='rounded-[20px]' src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
                                        </div>
                                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                            <img
                                                className='rounded-[20px]'
                                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                                alt="Pizza" />
                                        </div>
                                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                            <img
                                                className='rounded-[20px]'
                                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                                alt="Pizza" />
                                        </div>
                                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                            <img
                                                className='rounded-[20px]'
                                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                                alt="Pizza" />
                                        </div>
                                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                            <img className='rounded-[20px]' src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
                                        </div>
                                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                            <img className='rounded-[20px]' src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
                                        </div>
                                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                            <img
                                                className='rounded-[20px]'
                                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                                alt="Pizza" />
                                        </div>
                                    </div>
                                    <div className='w-full my-10'>
                                        <div className='flex justify-between'>
                                            <p className='text-white text-md font-bold mb-10 md:pl-7 pl-3'>Categories</p>
                                            <p className='text-white text-md font-bold mb-10 md:pl-7 pr-3 flex items-center '>See all <ChevronRight /></p>
                                        </div>
                                        <div className='flex justify-center '>
                                            <div className="bg-[#121212] p-5 rounded-[20px] h-full flex gap-10 justify-center items-between lg:max-w-[calc(100vw-700px)] max-w-[calc(100vw-34px)] w-full">
                                                <div className='flex flex-col gap-3 justify-center items-center'>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                </div>
                                                <div className='flex flex-col gap-3 justify-center items-center'>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                </div>
                                                <div className='flex flex-col gap-3 justify-center items-center'>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full my-10'>
                                        <div className='flex justify-between'>
                                            <p className='text-white text-md font-bold mb-10 md:pl-7 pl-3'>New Creators</p>
                                            <p className='text-white text-md font-bold mb-10 md:pl-7 pr-3 flex items-center '>See all <ChevronRight /></p>
                                        </div>
                                        <div>
                                            <div className="carousel carousel-center lg:max-w-[calc(100vw-680px)] max-w-[calc(100vw-44px)] gap-10">
                                                <div className="carousel-item max-h-[130px] max-w-[150px]">
                                                    <img className='rounded-[20px]' src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
                                                </div>
                                                <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                                    <img
                                                        className='rounded-[20px]'
                                                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                                        alt="Pizza" />
                                                </div>
                                                <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                                    <img
                                                        className='rounded-[20px]'
                                                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                                        alt="Pizza" />
                                                </div>
                                                <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                                    <img
                                                        className='rounded-[20px]'
                                                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                                        alt="Pizza" />
                                                </div>
                                                <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                                    <img className='rounded-[20px]' src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
                                                </div>
                                                <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                                    <img className='rounded-[20px]' src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
                                                </div>
                                                <div onClick={() => setIsModalOpen(true)} className="cursor-pointer carousel-item max-h-[130px] max-w-[150px]">
                                                    <img
                                                        className='rounded-[20px]'
                                                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                                        alt="Pizza" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            {/* h-full overflow-y-auto no-scrollbar */}
            <div className="fixed lg:block hidden border-none right-3 top-3">
                <div style={{ width: "300px", height: "calc(100vh - 24px)" }} className="artboard phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                    <Sidebar isRightSide />
                </div>
            </div>
            {isModalOpen && <VideoModal imageUrl="" onClose={() => setIsModalOpen(false)} />}
        </Layout>
    );
}

export default Home;
