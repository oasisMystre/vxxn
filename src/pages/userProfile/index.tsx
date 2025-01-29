import React, { useState } from 'react';
import { Share2, Star, X, Volume2, ChevronUp, ChevronDown, VolumeX } from 'lucide-react';
import { VideoPlayer } from '../../components';

type ContentViewProps = {
    imageUrl: string;
    onClose: () => void;
};

function ContentView({ imageUrl, onClose }: ContentViewProps) {
    const [isVolumeOpen, setIsVolumeOpen] = React.useState(true);
    React.useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);
    return (
        <div className='fixed inset-0 backdrop-blur-2xl bg-black/30 z-50'>
            {/* Main Content Area */}
            <div className='w-full h-full relative'>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <VideoPlayer />
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute bg-gray-800 p-1 rounded-full top-0 left-[-100px] text-gray-300"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* up down buttons */}
                    <div className='absolute right-[-100px] flex flex-col top-[50%] -translate-y-1/2'>
                        <button
                            className="bg-gray-800 p-1 mb-4 rounded-full text-gray-300"
                        >
                            <ChevronUp className="w-6 h-6" />
                        </button>
                        <button
                            className="bg-gray-800 p-1 rounded-full text-gray-300"
                        >
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>

                    {/* music button */}
                    <button
                        onClick={() => setIsVolumeOpen(!isVolumeOpen)}
                        className="absolute p-1 rounded-full top-3 right-3 text-gray-300"
                    >
                        {isVolumeOpen ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
}

function UserProfile() {
    const [activeTab, setActiveTab] = useState<'stories' | 'spotlight'>('stories');
    const [selectedContent, setSelectedContent] = useState<string | null>(null);

    const handleContentClick = (imageUrl: string) => {
        setSelectedContent(imageUrl);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white">
                {/* Profile Header */}
                <div className="relative">
                    {/* Cover Image */}
                    <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-600"></div>

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
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[60px] mt-20 pb-10">
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
        </>
    );
}

export default UserProfile;