import React, { useState, useMemo } from 'react';
import { Video, Youtube, Twitch, Plus, Loader2, Upload, X, Search, SearchIcon, HomeIcon, CameraIcon } from 'lucide-react';
import Layout from '../../layout/layout';
import { VideoItem } from '../../lib/types';
import { Link } from 'react-router-dom';
import { Header } from '../../layout/header';

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

    const handleUpload = (e) => {
        e.preventDefault();
        const videoId = "12";
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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div style={{ width: "100%", height: "calc(100vh - 24px)" }} className="artboard mx-2 my-3 phone-1 bg-black rounded-[20px] h-full overflow-y-auto no-scrollbar">
                {/* haeder */}
                <Header isUpload />
                <div className="flex-1 p-6 mt-20">
                    {/* Input Form */}
                    <form onSubmit={handleUpload} className='flex justify-center items-center gap-20 pt-[35px] fixed pb-3 top-[60px] z-10 bg-black w-full max-w-[calc(100vw-60px)]'>
                        <div className="flex justify-center gap-4 w-full">
                            <div className='w-full max-w-xl'>
                                <input
                                    type="url"
                                    value={url}
                                    placeholder="Enter video URL (YouTube, Twitch, etc.)"
                                    onChange={(e) => setUrl(e.target.value)} className="input text-white input-bordered w-full max-w-xl" />
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
                        </div>
                    </form>

                    {/* Search Bar */}
                    {videos.length > 0 && (
                        <div className="overflow-x-auto mb-6 mt-14">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th className='text-white'>Name</th>
                                        <th className='text-white'>Job</th>
                                        <th className='text-white'>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className='h-[100px]'>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className='h-[100px]'>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Brice Swyre</div>
                                                    <div className="text-sm opacity-50">China</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Carroll Group
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                        </td>
                                        <td>Red</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className='h-[100px]'>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Marjy Ferencz</div>
                                                    <div className="text-sm opacity-50">Russia</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Rowe-Schoen
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                        </td>
                                        <td>Crimson</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className='h-[100px]'>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Yancy Tear</div>
                                                    <div className="text-sm opacity-50">Brazil</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
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