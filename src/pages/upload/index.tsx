import React, { useState, useMemo } from 'react';
import { Video, Youtube, Twitch, Plus, Loader2, Upload, X, Search, SearchIcon, HomeIcon, CameraIcon } from 'lucide-react';
import Layout from '../../layout/layout';
import { VideoItem } from '../../lib/types';
import { Link } from 'react-router-dom';

function UploadPage() {
    const [url, setUrl] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videos, setVideos] = useState<VideoItem[]>([]);

    const filteredVideos = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return videos.filter(video =>
            video.title.toLowerCase().includes(query) ||
            video.uploader.toLowerCase().includes(query) ||
            video.source.toLowerCase().includes(query)
        );
    }, [videos, searchQuery]);

    const detectSource = (url: string) => {
        if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
        if (url.includes('twitch.tv')) return 'twitch';
        return 'other';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url.trim()) return;

        setIsLoading(true);
        // Simulating API call - in production, replace with actual scraping logic
        setTimeout(() => {
            const newVideo: VideoItem = {
                id: Math.random().toString(36).substr(2, 9),
                url: url,
                source: detectSource(url),
                thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&auto=format&fit=crop&q=60',
                title: 'Sample Video Title',
                duration: '30 min',
                quality: '1080p',
                views: Math.floor(Math.random() * 1000000),
                uploader: 'Channel Name',
                uploadStatus: 'pending',
            };
            setVideos(prev => [...prev, newVideo]);
            setUrl('');
            setIsLoading(false);
        }, 1000);
    };

    const handleUpload = (videoId: string) => {
        setVideos(prev => prev.map(video => {
            if (video.id === videoId) {
                return { ...video, uploadStatus: 'uploading', uploadProgress: 0 };
            }
            return video;
        }));

        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setVideos(prev => prev.map(video => {
                if (video.id === videoId) {
                    return { ...video, uploadProgress: progress };
                }
                return video;
            }));

            if (progress >= 100) {
                clearInterval(interval);
                setVideos(prev => prev.map(video => {
                    if (video.id === videoId) {
                        return { ...video, uploadStatus: 'uploaded', uploadProgress: undefined };
                    }
                    return video;
                }));
            }
        }, 500);
    };

    const handleRemove = (videoId: string) => {
        // In production, this would remove the video from your client-side homepage
        setVideos(prev => prev.map(video => {
            if (video.id === videoId) {
                return { ...video, uploadStatus: 'pending' };
            }
            return video;
        }));
    };

    const getSourceIcon = (source: string) => {
        switch (source) {
            case 'youtube':
                return <Youtube className="w-5 h-5 text-red-500" />;
            case 'twitch':
                return <Twitch className="w-5 h-5 text-purple-500" />;
            default:
                return <Video className="w-5 h-5 text-blue-500" />;
        }
    };
    const [active, setActive] = React.useState("camera");

    return (
        <Layout>
            <div style={{ width: "100%", height: "calc(100vh - 24px)" }} className="artboard mx-2 my-3 phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                {/* haeder */}
                <div className='flex justify-center items-center gap-20 pt-5 fixed pb-3 top-3 rounded-[20px] z-10 bg-black max-w-[calc(100vw-24px)] w-full'>
                    <Link to="#" onClick={() => setActive("search")}>
                        <SearchIcon className={`w-6 h-6 cursor-pointer ${active == "search" && "text-white"} text-gray-500`} />
                    </Link>
                    <Link to="/" onClick={() => setActive("home")}>
                        <HomeIcon className={`w-6 h-6 cursor-pointer ${active == "home" && "text-white"} text-gray-500`} />
                    </Link>
                    <Link to="/upload" onClick={() => setActive("camera")}>
                        <CameraIcon className={`w-6 h-6 cursor-pointer ${active == "camera" && "text-white"} text-gray-500`} />
                    </Link>
                </div>
                <div className="flex-1 p-6 mt-20">
                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="flex justify-center gap-4">
                            <div className='w-full max-w-xl'>
                                <input
                                    type="url"
                                    value={url}
                                    placeholder="Enter video URL (YouTube, Twitch, etc.)"
                                    onChange={(e) => setUrl(e.target.value)} className="input input-bordered w-full max-w-xl" />
                                {/* <input
                                    placeholder="Enter video URL (YouTube, Twitch, etc.)"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                /> */}
                            </div>
                            <button type="submit"
                                // disabled={isLoading || !url} 
                                className="btn btn-md sm:btn-md md:btn-md lg:btn-md flex items-center gap-2">
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                                Add Video
                            </button>

                            {/* <button
                                type="submit"
                                disabled={isLoading || !url}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                                Add Video
                            </button> */}
                        </div>
                    </form>

                    {/* Search Bar */}
                    {videos.length > 0 && (
                        <div className="mb-6 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by title, uploader, or source..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>
                    )}

                    {/* Video Table */}
                    {filteredVideos.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="py-3 px-4">#</th>
                                        <th className="py-3 px-4">Title</th>
                                        <th className="py-3 px-4">Duration</th>
                                        <th className="py-3 px-4">Quality</th>
                                        <th className="py-3 px-4">Views</th>
                                        <th className="py-3 px-4">Uploader</th>
                                        <th className="py-3 px-4">Source</th>
                                        <th className="py-3 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredVideos.map((video, index) => (
                                        <tr key={video.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                                            <td className="py-4 px-4">{index + 1}</td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-24 h-16 rounded overflow-hidden">
                                                        <img
                                                            src={video.thumbnail}
                                                            alt={video.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="font-medium">{video.title}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">{video.duration}</td>
                                            <td className="py-4 px-4">{video.quality}</td>
                                            <td className="py-4 px-4">{video.views.toLocaleString()}</td>
                                            <td className="py-4 px-4">{video.uploader}</td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    {getSourceIcon(video.source)}
                                                    <span className="capitalize">{video.source}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    {video.uploadStatus === 'pending' && (
                                                        <button
                                                            onClick={() => handleUpload(video.id)}
                                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
                                                        >
                                                            <Upload className="w-4 h-4" />
                                                            Upload
                                                        </button>
                                                    )}
                                                    {video.uploadStatus === 'uploading' && (
                                                        <div className="flex items-center gap-2">
                                                            <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                                                            <span className="text-sm text-blue-400">{video.uploadProgress}%</span>
                                                        </div>
                                                    )}
                                                    {video.uploadStatus === 'uploaded' && (
                                                        <button
                                                            onClick={() => handleRemove(video.id)}
                                                            className="p-2 text-red-400 hover:text-red-300 transition-colors group relative"
                                                            title="Remove from homepage"
                                                        >
                                                            <X className="w-5 h-5" />
                                                            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                                                Remove from homepage
                                                            </span>
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Empty State */}
                    {videos.length === 0 && (
                        <div className="text-center py-12 rounded-lg">
                            <Video className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                            <h3 className="text-lg font-medium mb-2">No videos yet</h3>
                            <p className="text-gray-400">Add a video URL to get started</p>
                        </div>
                    )}

                    {/* No Results State */}
                    {videos.length > 0 && filteredVideos.length === 0 && (
                        <div className="text-center py-12 bg-gray-800 rounded-lg">
                            <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                            <h3 className="text-lg font-medium mb-2">No matching videos</h3>
                            <p className="text-gray-400">Try adjusting your search query</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default UploadPage;