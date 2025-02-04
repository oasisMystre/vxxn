import React, { useState, useEffect, useCallback } from 'react';
import Layout from '../../layout/layout';
import Sidebar from '../../layout/sidebar';
import { useSearchParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { VideoModal } from '../../components/videoModal/videoModal';
import { CardSkeleton, CarouselSkeleton } from '../../components/skeleton/skeleton';
import { Header } from '../../layout/header';
import UserProfile from '../userProfile';

// Constants
const LOADING_TIMEOUT = 2000;
const CAROUSEL_IMAGES = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
];

// Reusable components
const CarouselItem = ({ src, onClick }: { src: string; onClick?: () => void }) => (
    <div onClick={onClick} className={`cursor-pointer carousel-item max-h-[130px] max-w-[150px]`}>
        <img className='rounded-[20px]' src={src} alt="Carousel item" />
    </div>
);

const SectionHeader = ({ title }: { title: string }) => (
    <div className='flex justify-between'>
        <p className='text-white text-md font-bold mb-10 md:pl-7 pl-3'>{title}</p>
        <p className='text-white cursor-pointer text-md font-bold mb-10 md:pl-7 pr-3 flex items-center'>
            See all <ChevronRight />
        </p>
    </div>
);

function Search() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("search") || "";
    const mainRef = React.useRef<HTMLDivElement>(null);
    const [isSearching, setIsSearching] = React.useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), LOADING_TIMEOUT);

        mainRef.current?.scrollTo(0, 0);

        return () => clearTimeout(timer);
    }, []);

    const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newSearchValue = formData.get("search") || "";
        setSearchParams({ search: newSearchValue.toString() });
        // loader
        setIsSearching(true);
        setTimeout(() => setIsSearching(false), LOADING_TIMEOUT);
    }, [setSearchParams]);

    const handleModalOpen = useCallback(() => setIsModalOpen(true), []);
    const handleModalClose = useCallback(() => setIsModalOpen(false), []);

    const renderCarousel = () => (
        <div className="carousel carousel-center lg:max-w-[calc(100vw-670px)] max-w-[calc(100vw-40px)] gap-10">
            <CarouselItem src={CAROUSEL_IMAGES[0]} />
            {CAROUSEL_IMAGES.slice(1).map((src, index) => (
                <CarouselItem key={index} src={src} onClick={handleModalOpen} />
            ))}
        </div>
    );

    return (
        <Layout>
            {/* Left Sidebar */}
            <div className="fixed lg:block hidden border-none left-3 top-3">
                <div style={{ width: "300px", height: "calc(100vh - 24px)" }} className="artboard phone-1 bg-black rounded-[20px] flex justify-center items-center">
                    {isLoading ?
                        <div className="skeleton min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] min-w-[270px] max-w-[270px]"></div> :
                        <div style={{ width: "270px", height: "calc(100vh - 50px)" }} className="artboard phone-1 bg-[#121212] rounded-[20px]" />
                    }
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-h-screen">
                <div className="w-full flex justify-center">
                    <div ref={mainRef} style={{ height: "calc(100vh - 24px)" }} className="bg-black rounded-[20px] fixed top-3 h-full overflow-y-auto no-scrollbar lg:max-w-[calc(100vw-650px)] max-w-[calc(100vw-24px)] w-full">
                        <Header />

                        {/* Search Section */}
                        <div className={`pt-10 ${searchValue ? "pb-[20px]" : "pb-[60px]"} fixed top-[60px] bg-black z-10 lg:max-w-[calc(100vw-650px)] max-w-[calc(100vw-24px)] w-full md:px-0 px-10`}>
                            <form onSubmit={handleSearch} className="flex justify-center items-center">
                                <input
                                    defaultValue={searchValue}
                                    name='search'
                                    type="text"
                                    placeholder="What do you want to watch ?"
                                    className="input input-bordered bg-[#1e1e1e] h-[40px] text-white max-w-[550px] w-full"
                                />
                            </form>
                            {searchValue && <p className='mt-5 text-center font-semi text-[20px]'>Search Results for "{searchValue}"</p>}
                        </div>

                        {/* Content Sections */}
                        <div className={`w-full justify-center px-3 ${searchValue ? "mt-[220px]" : "mt-[190px]"}`}>
                            {/* Trending Section */}
                            <SectionHeader title="Trending This Week" />
                            {(isLoading || isSearching) ?
                                <div className='lg:max-w-[calc(100vw-670px)] overflow-auto no-scrollbar max-w-[calc(100vw-40px)]'>
                                    <CarouselSkeleton />
                                </div> :
                                renderCarousel()
                            }

                            {/* New Creators Section */}
                            <div className='w-full my-10'>
                                <SectionHeader title="New Creators" />
                                {(isLoading || isSearching) ?
                                    <div className='lg:max-w-[calc(100vw-670px)] overflow-auto no-scrollbar max-w-[calc(100vw-40px)]'>
                                        <CarouselSkeleton />
                                    </div> :
                                    renderCarousel()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="fixed lg:block hidden border-none right-3 top-3">
                <div style={{ width: "300px", height: "calc(100vh - 24px)" }} className="artboard phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                    {isLoading ?
                        <div className='mt-10 flex justify-center w-full items-center flex-col'>
                            <CardSkeleton />
                        </div> :
                        <Sidebar isRightSide />
                    }
                </div>
            </div>

            {isModalOpen && <UserProfile/>}
        </Layout>
    );
}

export default Search;