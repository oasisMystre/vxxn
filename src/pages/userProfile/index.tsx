import React, { useState } from 'react';
import { Share2, Star, X, ChevronRightCircleIcon } from 'lucide-react';
import Layout from '../../layout/layout';
import { ImageList, ImageListItem } from '@mui/material';
import VideoPlayerModal from '../../components/videoPlayer/videoPlayer';
import { Link } from 'react-router-dom';


type ContentViewProps = {
    imageUrl: string;
    onClose: () => void;
};
type UserProfileProps = {
    handleClose: ()=>void
}

function ContentView({ imageUrl, onClose }: ContentViewProps) {
    const [isVolumeOpen, setIsVolumeOpen] = React.useState(true);
    React.useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);
    return (
        <div className='fixed inset-0 backdrop-blur-2xl bg-black/30 z-[200]'>
            {/* Main Content Area */}
            <div className='w-full h-full relative'>
                <div className='absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='w-[500px] h-full relative'>
                        <VideoPlayerModal />
                        <button
                            onClick={onClose}
                            className="absolute top-10 left-10 bg-gray-800 p-1 rounded-full lg:top-10 lg:left-[-100px] text-gray-300"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

function UserProfile({handleClose}:UserProfileProps) {
    const [activeTab, setActiveTab] = useState<'stories' | 'spotlight'>('stories');
    const [selectedContent, setSelectedContent] = useState<string | null>(null);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContentClick = (imageUrl: string) => {
        setSelectedContent(imageUrl);
    };

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

    return (
        <Layout hideSidebar>
            <div className="h-max rounded-[26px] w-full bg-[#121212] text-white flex flex-col py-6 mt-3">
                <div className='p-4'>
                    <Link to="/">
                        <ChevronRightCircleIcon className="w-6 h-6" />
                    </Link>
                </div>
                {/* Profile Header */}
                <div className="relative">
                    {/* Cover Image */}
                    {/* bg-gradient-to-r from-purple-600 to-blue-600 */}
                    <div className="h-20 bg-[#121212]"></div>

                    {/* Profile Image */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-gray-900"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="mt-20 px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                            <h1 className="text-2xl font-bold">Jessica Parker</h1>
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </div>
                        <p className="text-gray-400">@jessicaparker</p>
                        <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-400">
                            <span>This is my profile</span>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center gap-6 mt-4">
                            <div>
                                <div className="font-bold">263k</div>
                                <div className="text-sm text-gray-400">followers</div>
                            </div>
                            <div>
                                <div className="font-bold">891</div>
                                <div className="text-sm text-gray-400">views</div>
                            </div>
                            <div>
                                <div className="font-bold">831</div>
                                <div className="text-sm text-gray-400">posts</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <button className="bg-yellow-400 text-black font-semibold px-8 py-2 rounded-full">
                                Subscribe
                            </button>
                            <button className="bg-gray-800 p-2 rounded-full">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Content Tabs */}
                    <div className="mt-8 max-w-[1000px] mx-auto">
                        <div className="flex justify-center  border-b border-gray-800">
                            <button
                                className={`py-3 px-10 mr-10 text-center font-semibold ${activeTab === 'stories'
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-gray-400'
                                    }`}
                                onClick={() => setActiveTab('stories')}
                            >
                                Videos
                            </button>
                            <button
                                className={`py-3 px-10 text-center font-semibold ${activeTab === 'spotlight'
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-gray-400'
                                    }`}
                                onClick={() => setActiveTab('spotlight')}
                            >
                                Photos
                            </button>
                        </div>

                        {/* Content Grid */}
                        {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[60px] mt-20 pb-10">
                            {[...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className='cursor-pointer'
                                    // className="md:aspect-[3/4] aspect-[2/3] bg-gray-800 rounded-[15px] overflow-hidden cursor-pointer"
                                    onClick={() => handleContentClick(`https://source.unsplash.com/random/800x800?sig=${i}`)}
                                >
                                    <VideoPlayer />
                                </div>
                            ))}
                        </div> */}
                        <div className='flex justify-center w-full py-5'>
                            <ImageList cols={3} rowHeight={164}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            onClick={() => handleContentClick(`https://source.unsplash.com/random/800x800`)}
                                            className='cursor-pointer'
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div>



                {/* Content View Modal */}
                {selectedContent && (
                    <ContentView
                        imageUrl={selectedContent}
                        onClose={() => setSelectedContent(null)}
                    />
                )}
            </div>
            {/* fotter */}
            {/* <footer className="fixed bottom-0 h-[150px] w-full z-50 p-4 py-[21px] border-t border-gray-800">
                <div className="container ml-[70px] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <p className='text-white'>footer</p>
                        </div>
                    </div>
                </div>
            </footer> */}
        </Layout>
    );
}

export default UserProfile;